const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get API key from environment variable (secure on server side)
    const apiKey = process.env.SERPAPI_KEY;
    const authorId = "ZysUK0kAAAAJ"; // Your Google Scholar ID

    if (!apiKey) {
      console.error('SERPAPI_KEY environment variable not set');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }

    // Make the API call to SerpAPI
    const apiUrl = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}`;
    
    console.log('Making API call to SerpAPI...');
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error('SerpAPI response not ok:', response.status, response.statusText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          error: `SerpAPI error: ${response.status} ${response.statusText}` 
        })
      };
    }

    const data = await response.json();
    console.log('Successfully fetched data from SerpAPI');

    // Return the data with CORS headers
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow all origins for GitHub Pages
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Error in scholar-metrics function:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
}; 