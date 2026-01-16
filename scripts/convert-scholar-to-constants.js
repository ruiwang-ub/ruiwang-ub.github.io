#!/usr/bin/env node

/**
 * Script to update Constants.js with latest data from scholar-data.json
 * This merges the citation counts and new publications while preserving
 * manually added metadata (DOI, PDF, GitHub links, tags, type)
 *
 * Usage: node scripts/convert-scholar-to-constants.js
 */

const fs = require("fs");
const path = require("path");

const scholarDataPath = path.resolve(__dirname, '../src/data/scholar-data.json');
const constantsPath = path.resolve(__dirname, '../src/Constants.js');
const constantsBackupPath = path.resolve(__dirname, '../src/Constants.js.backup');

// Read scholar data
const scholarData = JSON.parse(fs.readFileSync(scholarDataPath, 'utf8'));

// Read existing Constants.js and extract PUBLICATIONS array
let constantsContent = fs.readFileSync(constantsPath, 'utf8');

// Create backup
fs.writeFileSync(constantsBackupPath, constantsContent, 'utf8');

// Extract the PUBLICATIONS array more safely
const match = constantsContent.match(/export const PUBLICATIONS = (\[[\s\S]*\]);/);
if (!match) {
  console.error('❌ Could not parse Constants.js');
  process.exit(1);
}

let existingPubs;
try {
  // Use Function constructor to safely evaluate the array
  existingPubs = new Function('return ' + match[1])();
} catch (e) {
  console.error('❌ Error parsing PUBLICATIONS array:', e.message);
  process.exit(1);
}

// Helper function to normalize title for matching
function normalizeTitle(title) {
  return title.toLowerCase().replace(/[^\w\s]/g, '').trim();
}

// Helper function to parse authors from the scholar format
function parseAuthors(authorString) {
  // Split by comma and clean up
  return authorString.split(',').map(a => a.trim());
}

// Create a map of existing publications by normalized title
const existingPubsMap = new Map();
existingPubs.forEach(pub => {
  existingPubsMap.set(normalizeTitle(pub.title), pub);
});

// Merge scholar data with existing publications
const publications = scholarData.articles.map(article => {
  const normalizedTitle = normalizeTitle(article.title);
  const existing = existingPubsMap.get(normalizedTitle);

  if (existing) {
    // Update existing publication with new citation count
    // Preserve all existing metadata (DOI, PDF, GitHub, tags, type, etc.)
    return {
      ...existing,
      citations: article.cited_by?.value || 0,
      links: {
        ...existing.links,
        scholar: article.link
      }
    };
  } else {
    // New publication - create with inferred metadata
    return {
      year: article.year.toString(),
      title: article.title,
      authors: parseAuthors(article.authors),
      venue: article.publication,
      citations: article.cited_by?.value || 0,
      links: {
        scholar: article.link
      },
      tags: inferTags(article.title, article.publication),
      type: inferType(article.publication)
    };
  }
});

// Sort by year (descending) and then by citations (descending)
publications.sort((a, b) => {
  if (b.year !== a.year) {
    return parseInt(b.year) - parseInt(a.year);
  }
  return b.citations - a.citations;
});

// Helper function to infer tags from title and venue
function inferTags(title, venue) {
  const tags = [];
  const text = (title + ' ' + venue).toLowerCase();
  
  if (text.includes('social media') || text.includes('twitter') || text.includes('facebook') || text.includes('reddit')) {
    tags.push('Social Media');
  }
  if (text.includes('network') || text.includes('hyperlink')) {
    tags.push('Network science');
  }
  if (text.includes('political') || text.includes('partisan') || text.includes('trump')) {
    tags.push('Political Communication');
  }
  if (text.includes('computational') || text.includes('method')) {
    tags.push('Computational Social Science');
  }
  if (text.includes('bot')) {
    tags.push('Social bot');
  }
  if (text.includes('misinformation') || text.includes('fake news')) {
    tags.push('Misinformation');
  }
  if (text.includes('journalism') || text.includes('news')) {
    tags.push('Journalism');
  }
  if (text.includes('ai') || text.includes('algorithm') || text.includes('automated') || text.includes('machine')) {
    tags.push('AI');
  }
  if (text.includes('bias')) {
    tags.push('System bias');
  }
  
  return tags.length > 0 ? tags : ['Research'];
}

// Helper function to infer publication type
function inferType(venue) {
  const v = venue.toLowerCase();
  if (v.includes('handbook') || v.includes('palgrave')) {
    return 'Book Chapter';
  }
  if (v.includes('review:')) {
    return 'Book Review';
  }
  if (v.includes('dataset') || v.includes('data')) {
    return 'Dataset';
  }
  if (v.includes('method')) {
    return 'Method';
  }
  return 'Article';
}

// Generate the Constants.js content
const newConstantsContent = `export const PUBLICATIONS = ${JSON.stringify(publications, null, 2)};
`;

// Write to Constants.js
fs.writeFileSync(constantsPath, newConstantsContent, 'utf8');

console.log('✅ Successfully updated Constants.js with latest scholar data');
console.log(`📊 Total publications: ${publications.length}`);
console.log(`📝 File written to: ${constantsPath}`);
console.log(`💾 Backup saved to: ${constantsBackupPath}`);

// Report new publications
const newPubs = publications.filter(pub => !existingPubsMap.has(normalizeTitle(pub.title)));
if (newPubs.length > 0) {
  console.log(`\n🆕 ${newPubs.length} new publication(s) added:`);
  newPubs.forEach(pub => {
    console.log(`   - ${pub.title} (${pub.year})`);
  });
  console.log('\n⚠️  Note: New publications have inferred tags and types.');
  console.log('    Please review and add DOI/PDF/GitHub links manually if available.');
} else {
  console.log('\n✓ No new publications. Citation counts updated.');
}

