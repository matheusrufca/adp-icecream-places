const axios = require('axios');

function yelpWebClientFactory() {
  const apiDomain = process.env.YELP_API_DOMAIN;
  const apiKey = process.env.YELP_API_KEY;

  return axios.create({
    baseURL: apiDomain,
    headers: { Authorization: `Bearer ${apiKey}` },
  });
}

module.exports = {
  yelpWebClientFactory,
};
