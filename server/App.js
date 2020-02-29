const { fetchIceCreamPlaces } = require('./web-clients/yelp');

class App {
  static async init() {
    try {
      await fetchIceCreamPlaces({
        location: 'Alpharetta',
        categories: 'icecream',
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}

module.exports = App;
