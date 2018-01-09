const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const blipp = require('../../lib');
const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');
const app = express(feathers());

// Load app/express configuration
app
  .configure(configuration())
  .use(cors())
  .use(helmet())
  .use(compress())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', express.static(app.get('public')));

// Load Feathers Core
app
  .configure(express.rest())
  .configure(socketio())
  .configure(middleware)
  .configure(services)
  .configure(blipp)
  // .configure(blipp({ verbose: true }))
  .configure(channels);

// Configure a middleware for 404s and the error handler
app
  .use(express.notFound())
  .use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
