const message = require('./message/message.service.js');
const user = require('./user/user.service.js');

module.exports = function (app) {
  // eslint-disable-line no-unused-vars
  app.configure(message);
  app.configure(user);
};
