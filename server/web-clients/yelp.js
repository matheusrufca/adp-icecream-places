import { yelpWebClientFactory } from './client-factory';

const request = yelpWebClientFactory();

export default async function fetchIceCreamPlaces(filters = {}) {
  const searchEndpoint = 'businesses/search';
  const defaultFilter = {
    limit: 50,
  };

  try {
    // eslint-disable-next-line no-console
    console.info('[yelpApi] request: /businesses/search');
    const result = await request
      .get(searchEndpoint, {
        searchParams: { ...defaultFilter, ...filters },
      })
      .json();

    // eslint-disable-next-line no-console
    console.debug('[yelpApi] response: /businesses/search', result);

    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[yelpApi] request error: /businesses/search');
    throw error;
  }
}
