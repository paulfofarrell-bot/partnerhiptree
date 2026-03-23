exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  console.log('Function called, method:', event.httpMethod);
  console.log('API key present:', !!process.env.ANTHROPIC_API_KEY);
  console.log('Body length:', event.body ? event.body.length : 0);

  try {
    const parsed = JSON.parse(event.body);
    console.log('Model:', parsed.model);
    console.log('Messages count:', parsed.messages ? parsed.messages.length : 0);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'web-search-2025-03-05'
      },
      body: event.body
    });

    console.log('Anthropic response status:', response.status);
    const data = await response.json();
    console.log('Response type:', data.type);
    if(data.error) console.log('API error:', JSON.stringify(data.error));

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    console.log('Exception:', err.message);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
