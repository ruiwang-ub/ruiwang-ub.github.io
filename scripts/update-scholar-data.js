#!/usr/bin/env node

/**
 * Script to update cached Google Scholar data
 * Run this locally to fetch fresh data and update the cached values
 * 
 * Usage: node scripts/update-scholar-data.js
 */

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Configuration - API key must be set as environment variable
const API_KEY = process.env.SERPAPI_KEY;
const AUTHOR_ID = 'ZysUK0kAAAAJ';

// Check if API key is provided
if (!API_KEY) {
  console.error('❌ Error: SERPAPI_KEY environment variable is required');
  console.error('Please set your API key:');
  console.error('  export SERPAPI_KEY=your_api_key_here');
  console.error('  or create a .env file with: SERPAPI_KEY=your_api_key_here');
  process.exit(1);
}

async function fetchScholarData() {
  try {
    console.log('🔍 Fetching Google Scholar data...');
    
    const apiUrl = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${AUTHOR_ID}&api_key=${API_KEY}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.cited_by || !data.cited_by.table) {
      throw new Error('Invalid data structure received from API');
    }
    
    // Extract metrics
    const citationsData = data.cited_by.table.find(item => item.citations);
    const hIndexData = data.cited_by.table.find(item => item.h_index);
    const i10IndexData = data.cited_by.table.find(item => item.i10_index);
    
    const metrics = {
      publications: data.articles ? data.articles.length : 0,
      citations: citationsData ? citationsData.citations.all : 0,
      hIndex: hIndexData ? hIndexData.h_index.all : 0,
      i10Index: i10IndexData ? i10IndexData.i10_index.all : 0,
    };
    
    console.log('✅ Data fetched successfully:');
    console.log(`   Publications: ${metrics.publications}`);
    console.log(`   Citations: ${metrics.citations}`);
    console.log(`   h-index: ${metrics.hIndex}`);
    console.log(`   i10-index: ${metrics.i10Index}`);
    
    // Update the Home.js file with new cached data
    updateHomeComponent(metrics);
    
    console.log('✅ Home.js component updated with new cached data');
    console.log('💡 Remember to commit and push the changes to update your live site');
    
  } catch (error) {
    console.error('❌ Error fetching data:', error.message);
    process.exit(1);
  }
}

function updateHomeComponent(metrics) {
  const homeJsPath = path.join(__dirname, '..', 'src', 'components', 'Home', 'Home.js');
  
  if (!fs.existsSync(homeJsPath)) {
    throw new Error('Home.js file not found');
  }
  
  let content = fs.readFileSync(homeJsPath, 'utf8');
  
  // Update the cached data object
  const newCachedData = `        // Use cached/static data for GitHub Pages
        const cachedData = {
          cited_by: {
            table: [
              {
                citations: {
                  all: ${metrics.citations},
                  since_2020: ${metrics.citations}
                }
              },
              {
                h_index: {
                  all: ${metrics.hIndex},
                  since_2020: ${metrics.hIndex}
                }
              },
              {
                i10_index: {
                  all: ${metrics.i10Index},
                  since_2020: ${metrics.i10Index}
                }
              }
            ]
          },
          articles: [
            // Sample articles data
            { title: "Sample Publication 1" },
            { title: "Sample Publication 2" },
            // ... more articles
          ]
        };`;
  
  // Replace the cached data section
  const regex = /\/\/ Use cached\/static data for GitHub Pages[\s\S]*?};/;
  content = content.replace(regex, newCachedData);
  
  // Also update the fallback values
  content = content.replace(
    /publications: cachedData\.articles \? cachedData\.articles\.length : \d+/,
    `publications: cachedData.articles ? cachedData.articles.length : ${metrics.publications}`
  );
  content = content.replace(
    /citations: citationsData \? citationsData\.citations\.all : \d+/,
    `citations: citationsData ? citationsData.citations.all : ${metrics.citations}`
  );
  content = content.replace(
    /hIndex: hIndexData \? hIndexData\.h_index\.all : \d+/,
    `hIndex: hIndexData ? hIndexData.h_index.all : ${metrics.hIndex}`
  );
  content = content.replace(
    /i10Index: i10IndexData \? i10IndexData\.i10_index\.all : \d+/,
    `i10Index: i10IndexData ? i10IndexData.i10_index.all : ${metrics.i10Index}`
  );
  
  // Update the fallback values in the catch block
  content = content.replace(
    /publications: \d+,\s*citations: \d+,\s*hIndex: \d+,\s*i10Index: \d+/,
    `publications: ${metrics.publications}, citations: ${metrics.citations}, hIndex: ${metrics.hIndex}, i10Index: ${metrics.i10Index}`
  );
  
  fs.writeFileSync(homeJsPath, content, 'utf8');
}

// Run the script
if (require.main === module) {
  fetchScholarData();
}

module.exports = { fetchScholarData, updateHomeComponent }; 