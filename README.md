# feathers-blipp

[![Build Status](https://travis-ci.org/feathersjs/feathers-blipp.png?branch=master)](https://travis-ci.org/feathersjs/feathers-blipp)
[![Code Climate](https://codeclimate.com/github/feathersjs/feathers-blipp/badges/gpa.svg)](https://codeclimate.com/github/feathersjs/feathers-blipp)
[![Test Coverage](https://codeclimate.com/github/feathersjs/feathers-blipp/badges/coverage.svg)](https://codeclimate.com/github/feathersjs/feathers-blipp/coverage)
[![Dependency Status](https://img.shields.io/david/feathersjs/feathers-blipp.svg?style=flat-square)](https://david-dm.org/feathersjs/feathers-blipp)
[![Download Status](https://img.shields.io/npm/dm/feathers-blipp.svg?style=flat-square)](https://www.npmjs.com/package/feathers-blipp)

> feathers blipp

## Installation

```
npm install feathers-blipp --save
```

## Documentation

Please refer to the [feathers-blipp documentation](http://docs.feathersjs.com/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `feathers-blipp`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const plugin = require('feathers-blipp');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
