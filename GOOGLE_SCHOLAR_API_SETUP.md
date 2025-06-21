# Google Scholar API Setup Guide

## Overview
This website displays Google Scholar metrics using a secure approach that protects your API key when deploying to public repositories.

## Security Considerations

### ⚠️ **Important: API Key Protection**
When deploying to GitHub Pages or any public repository, your API key will be exposed if stored in client-side code. This guide provides secure alternatives.

## Deployment Options

### **Option 1: GitHub Pages (Recommended for Public Repos)**
For GitHub Pages deployment, the current implementation uses **cached data** to avoid exposing your API key:

- ✅ **Secure**: No API key in client-side code
- ✅ **Fast**: No API calls needed
- ✅ **Reliable**: Always works
- ⚠️ **Static**: Data needs manual updates

### **Option 2: Netlify with Serverless Functions**
For dynamic data with API key protection:

1. **Deploy to Netlify** instead of GitHub Pages
2. **Use serverless functions** to keep API key secure
3. **Set environment variables** in Netlify dashboard

### **Option 3: Custom Backend**
For maximum security and control:

1. **Create a simple backend** (Node.js, Python, etc.)
2. **Store API key** on the server
3. **Create API endpoint** for your frontend

## Setup Instructions

### **For GitHub Pages (Current Implementation)**

1. **No API key needed** - uses cached data
2. **Deploy directly** to GitHub Pages
3. **Update data manually** when needed

### **For Netlify with Serverless Functions**

1. **Get SerpAPI Key** from [SerpAPI](https://serpapi.com/)
2. **Deploy to Netlify**:
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```
3. **Set Environment Variable** in Netlify dashboard:
   - Go to Site Settings → Environment Variables
   - Add `SERPAPI_KEY` with your API key
4. **Enable Functions** in `netlify.toml`

### **For Custom Backend**

1. **Create backend server** (example with Express.js):
   ```javascript
   const express = require('express');
   const fetch = require('node-fetch');
   
   app.get('/api/scholar-metrics', async (req, res) => {
     const apiKey = process.env.SERPAPI_KEY;
     const response = await fetch(`https://serpapi.com/search.json?engine=google_scholar_author&author_id=ZysUK0kAAAAJ&api_key=${apiKey}`);
     const data = await response.json();
     res.json(data);
   });
   ```

2. **Deploy backend** to Heroku, Vercel, or similar
3. **Update frontend** to call your backend endpoint

## Data Structure
The API returns the following metrics:
- **Publications**: Number of articles from your profile
- **Citations**: Total citations count
- **h-index**: Your h-index value
- **i10-index**: Your i10-index value

## Features
- ✅ **Secure**: API key protected from exposure
- ✅ **Loading States**: Shows enhanced loading animation
- ✅ **Error Handling**: Graceful fallback to cached data
- ✅ **Cache Control**: Automatic data fetching or cached data
- ✅ **Enhanced UI**: Beautiful loading animations and error messages
- ✅ **GitHub Pages Compatible**: Works with static hosting

## API Limits
- SerpAPI has usage limits based on your plan
- Free tier includes 100 searches per month
- Consider caching results to minimize API calls

## Troubleshooting

### **GitHub Pages Issues**
- ✅ **Works out of the box** with cached data
- ✅ **No API key needed**
- ✅ **No CORS issues**

### **Netlify Issues**
1. Check your API key is set in environment variables
2. Verify your Google Scholar ID: `ZysUK0kAAAAJ`
3. Check Netlify function logs for errors
4. Ensure `node-fetch` is installed

### **Custom Backend Issues**
1. Verify API key is set in environment variables
2. Check CORS headers are properly set
3. Test endpoint directly with curl or Postman
4. Review server logs for errors

## Security Best Practices

### **✅ Do's**
- Store API keys in environment variables
- Use serverless functions or backend APIs
- Implement rate limiting
- Use HTTPS for all API calls
- Monitor API usage

### **❌ Don'ts**
- Never commit API keys to version control
- Don't expose API keys in client-side code
- Don't use public CORS proxies in production
- Don't hardcode sensitive data

## Cost Considerations
- SerpAPI charges per search
- Free tier: 100 searches/month
- Paid plans start at $50/month for 5,000 searches
- Consider implementing caching to reduce costs

## Example Response Structure
```json
{
  "cited_by": {
    "table": [
      {
        "citations": {
          "all": 96,
          "since_2020": 95
        }
      },
      {
        "h_index": {
          "all": 5,
          "since_2020": 5
        }
      },
      {
        "i10_index": {
          "all": 3,
          "since_2020": 3
        }
      }
    ]
  },
  "articles": [...]
}
``` 