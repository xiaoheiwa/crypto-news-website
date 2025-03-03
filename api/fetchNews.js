const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const API_KEY = process.env.NEWS_API_KEY;
  const url = `https://newsdata.io/api/1/cryptocurrency?apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
