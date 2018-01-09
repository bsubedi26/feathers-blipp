const displayRoutes = require('./display-routes');

module.exports = function init(options) {
  let app = this;

  if (typeof options.verbose === 'boolean') {
    return function (app) {
      displayRoutes(app, options.verbose);
    }
  }
  else {
    displayRoutes(app);
  }
};
