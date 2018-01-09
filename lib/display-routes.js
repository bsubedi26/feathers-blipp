const chalk = require('chalk');
/**
 * Displays route method & path when server first initializes
 * @param {app} 
*/

module.exports = function (app, verbose) {

    if (verbose) {
      app._router.stack.forEach((r) => {
        // r: { handle, name, params, path, keys, regexp, route }
        if (r.route && r.route.path) {
          r.route.methods.hasOwnProperty('get') ? console.log(chalk.cyan.bold('GET'), chalk.green.bold(`${r.route.path}`)) : null;
          r.route.methods.hasOwnProperty('post') ? console.log(chalk.yellow.bold('POST'), chalk.green.bold(`${r.route.path}`)) : null;
          r.route.methods.hasOwnProperty('put') ? console.log(chalk.white.bold('PUT'), chalk.green.bold(`${r.route.path}`)) : null;
          r.route.methods.hasOwnProperty('patch') ? console.log(chalk.magenta.bold('PATCH'), chalk.green.bold(`${r.route.path}`)) : null;
          r.route.methods.hasOwnProperty('delete') ? console.log(chalk.red.bold('DEL'), chalk.green.bold(`${r.route.path}`)) : null;
          console.log(chalk.white.bold('-------------------------------------------------------------'));
        }
      });
    }

    else {
      app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
          console.log(chalk.green.bold(r.route.path));
          console.log(chalk.white.bold('-------------------------------------------------------------'));
        }
      });

    }
};