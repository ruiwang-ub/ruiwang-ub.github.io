# Scripts Directory

This directory contains utility scripts for maintaining the website.

## update-scholar-data.js

This script fetches fresh Google Scholar data and updates the cached values in the Home component.

### Usage

```bash
# Using npm script (recommended)
npm run update-scholar-data

# Or directly with node
node scripts/update-scholar-data.js
```

### What it does

1. **Fetches fresh data** from SerpAPI using your Google Scholar ID
2. **Extracts metrics** (publications, citations, h-index, i10-index)
3. **Updates the cached data** in `src/components/Home/Home.js`
4. **Updates fallback values** in case of errors

### Prerequisites

**⚠️ IMPORTANT: API Key Security**
Your SerpAPI key must be set as an environment variable. The script will fail if the API key is not provided.

**Option 1: Environment Variable (Recommended)**
```bash
export SERPAPI_KEY=your_api_key_here
```

**Option 2: .env File (Local Development Only)**
Create a `.env` file in the project root (DO NOT COMMIT THIS FILE):
```
SERPAPI_KEY=your_api_key_here
```

**Option 3: Inline (Not Recommended)**
```bash
SERPAPI_KEY=your_api_key_here npm run update-scholar-data
```

### Security Note

- ✅ **API key is never stored in code**
- ✅ **Script requires environment variable**
- ✅ **Safe to commit to public repositories**
- ❌ **Never commit .env files**
- ❌ **Never hardcode API keys**

### After running the script

1. **Review the changes** in `src/components/Home/Home.js`
2. **Test locally** with `npm start`
3. **Commit and push** the changes to update your live site

### Frequency

Run this script whenever you want to update your Google Scholar metrics on your website. Consider running it:
- Monthly
- After new publications
- When you notice significant changes in your metrics

### Error Handling

If you see an error about missing API key:
```bash
❌ Error: SERPAPI_KEY environment variable is required
Please set your API key:
  export SERPAPI_KEY=your_api_key_here
  or create a .env file with: SERPAPI_KEY=your_api_key_here
```

This means you need to set your API key as an environment variable before running the script.

## convert-scholar-to-constants.js

This script converts data from `scholar-data.json` to `Constants.js` format for the Publications page.

### Usage

```bash
# Using npm script (recommended)
npm run update-constants

# Or directly with node
node scripts/convert-scholar-to-constants.js
```

### What it does

1. **Reads** the latest data from `src/data/scholar-data.json`
2. **Merges** with existing `src/Constants.js` to preserve manually added metadata
3. **Updates** citation counts for existing publications
4. **Adds** new publications with inferred tags and types
5. **Creates** a backup at `src/Constants.js.backup`

### Important Notes

- **Preserves metadata**: DOI links, PDF links, GitHub links, tags, and types are preserved for existing publications
- **Infers metadata**: New publications get automatically inferred tags and types based on keywords
- **Manual review needed**: You should review new publications and add DOI/PDF/GitHub links manually

### After running the script

1. **Review the changes** in `src/Constants.js`
2. **Check new publications** and add missing metadata (DOI, PDF, GitHub links)
3. **Adjust tags and types** if the inferred values are incorrect
4. **Test locally** with `npm start`
5. **Commit and push** the changes

## Recommended Workflow

To update all publication data and deploy:

```bash
# 1. Update scholar data from Google Scholar
npm run update-scholar-data

# 2. Convert to Constants.js format
npm run update-constants

# Or run both at once:
npm run update-all

# 3. Review the changes (especially new publications)
git diff src/Constants.js

# 4. Manually add DOI/PDF/GitHub links for new publications if needed
# Edit src/Constants.js

# 5. Commit the changes
git add src/data/scholar-data.json src/Constants.js
git commit -m "Update publication data"
git push

# 6. Deploy to GitHub Pages
npm run deploy
```