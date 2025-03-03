const fetch = require('node-fetch');

module.exports = async function(event, context) {
  const API_KEY = process.env.NEWS_API_KEY; // 从环境变量中获取API密钥
  const url = `https://newsdata.io/api/1/cryptocurrency?apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};