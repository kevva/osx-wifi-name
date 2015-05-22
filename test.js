'use strict';
var test = require('ava');
var osxWifiName = require('./');

test(function (t) {
	t.plan(2);

	if (process.env.CI) {
		t.assert(true);
		t.assert(true);
		return;
	}

	osxWifiName(function (err, name) {
		t.assert(!err, err);
		t.assert(name, name);
	});
});
