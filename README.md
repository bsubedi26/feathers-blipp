# feathers-blipp

## Installation

```
npm install feathers-blipp --save
```

## Usage

`feathers-blipp` MUST be configured AFTER services.

```js
  const blipp = require('feathers-blipp);
  app
    .configure(middleware)
    .configure(services)
    .configure(blipp); // <<-- MUST be configured AFTER services
```

An `options` object with `verbose` boolean can also be passed as an argument.

```js
  const blipp = require('feathers-blipp);
  app
    .configure(middleware)
    .configure(services)
    .configure(blipp({ verbose: true }));
```

## Screenshots

![Alt text](screenshots/verbose.JPG?raw=true "Verbose routes table")
![Alt text](screenshots/not-verbose.JPG?raw=true "Not Verbose routes table")

## Complete Example

```
git clone git@github.com:bsubedi26/feathers-blipp.git
cd /feathers-blipp/example
npm install
npm start
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
