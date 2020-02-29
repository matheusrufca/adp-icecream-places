const logger = require('../../logger');
const {
  getBestIcecreamPlaces,
} = require('../../services/icecream/icecream.service');

const path = '/api/icecream/best-rated';

const handler = async (request, response, next) => {
  // eslint-disable-next-line no-console
  logger.debug(`${path}`, request.params);

  try {
    const result = await getBestIcecreamPlaces('Alpharetta');
    response.json(result);
  } catch (error) {
    response.error(error);
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    next();
  }
};

module.exports = {
  path,
  handler,
};
