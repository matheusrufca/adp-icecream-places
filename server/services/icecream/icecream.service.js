const { orderBy } = require('lodash/collection');
const { fetchIceCreamPlaces } = require('../../web-clients/yelp');
const logger = require('../../logger');

function sortPlacesByBestRate(places) {
  return orderBy(places, ['rating', 'review_count'], ['desc', 'desc']);
}

const getBestIcecreamPlaces = async (location, limit = 5) => {
  try {
    const { data } = await fetchIceCreamPlaces({
      location,
      categories: 'icecream',
    });
    return sortPlacesByBestRate([...data.businesses]).slice(0, limit);
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

module.exports = { getBestIcecreamPlaces };
