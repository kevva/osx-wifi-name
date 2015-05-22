'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	var cmd = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport';
	var args = ['-I'];
	var ret;

	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		ret = /^\s*SSID: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			cb(new Error('Could not get SSID'));
			return;
		}

		cb(null, ret);
	});
};
