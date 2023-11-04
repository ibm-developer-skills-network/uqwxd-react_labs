# scripts

[![Build](https://travis-ci.org/jaredhanson/node-scripts.png)](http://travis-ci.org/jaredhanson/node-scripts)
[![Coverage](https://coveralls.io/repos/jaredhanson/node-scripts/badge.png)](https://coveralls.io/r/jaredhanson/node-scripts)
[![Dependencies](https://david-dm.org/jaredhanson/node-scripts.png)](http://david-dm.org/jaredhanson/node-scripts)


Resolve scripts based on supported extensions.

## Install

    $ npm install scripts

## Usage

Resolve a `require`-able script to a path, including extension.

```javascript
var path = scripts.resolve('hello');
// => 'hello.js'
```

With CoffeeScript support:

```javascript
require('coffee-script');

var path = scripts.resolve('hello');
// => 'hello.coffee'
```

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
