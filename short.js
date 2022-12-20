const axios = require('axios');

async function shortenLink(longUrl) {
  // Send a POST request to the link shortening API
  const response = await axios.post('https://api.example.com/shorten', {
    longUrl
  }, {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });

  // Extract the shortened URL from the response
  const shortUrl = response.data.shortUrl;

  return shortUrl;
}

const longUrl = 'https://www.example.com/very/long/url';
const shortUrl = await shortenLink(longUrl);
console.log(shortUrl);
