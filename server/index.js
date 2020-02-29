const express = require('express');
const cors = require('cors')
const { resolve } = require('path');

const environment = require('./environment');
const logger = require('./logger');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const { getIcecreamBestPlaces } = require('./api');

const server = express();
const apiServer = express();
const apiServerPort = 3001;

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(server, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || environment.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
server.get('*.js', (request, response, next) => {
  request.url = request.url + '.gz'; // eslint-disable-line
  response.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
server.listen(port, host, async err => {
  if (err) {
    logger.error(err.message);
    return;
  }

  logger.appStarted(port, prettyHost);

  // App.init();
});

apiServer.use(cors());
apiServer.get(getIcecreamBestPlaces.path, getIcecreamBestPlaces.handler);
apiServer.listen(apiServerPort, () => {
  logger.info(`ApiServer started at: http://localhost:${apiServerPort}`);
});
