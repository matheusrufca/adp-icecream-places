import ky from 'ky';

export function yelpWebClientFactory() {
  const apiDomain = process.env.YELP_API_DOMAIN;
  const apiToken = process.env.YELP_API_TOKEN;

  return ky.extend({
    prefixUrl: apiDomain,
    retry: 3,
    hooks: {
      beforeRequest: [
        request => {
          request.headers.set('Authorization', `Bearer ${apiToken}`);
          return request;
        },
      ],
    },
  });
}
