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