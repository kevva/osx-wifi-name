# osx-wifi-name [![Build Status](https://travis-ci.org/kevva/osx-wifi-name.svg?branch=master)](https://travis-ci.org/kevva/osx-wifi-name)

> Get current wifi name on OS X


## Install

```
$ npm install --save osx-wifi-name
```


## Usage

```js
var osxWifiName = require('wifi-name');

osxWifiName(function (err, name) {
	console.log(name);
	//=> 'wu-tang lan'
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
