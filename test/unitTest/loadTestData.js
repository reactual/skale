#!/usr/local/bin/node --harmony

var co = require('co');
var UgridClient = require('../../lib/ugrid-client.js');
var UgridContext = require('../../lib/ugrid-context.js');

var grid = new UgridClient({host: 'localhost', port: 12346, data: {type: 'master'}});

try {

	co(function *() {
		var startTime = new Date();
		yield grid.connect();
		var devices = yield grid.send({cmd: 'devices', data: {type: "worker"}});
		var ugrid = new UgridContext(grid, devices);

		var N = 4;
		var D = 2;
		
		// Section 1: without persist()
		var t0 = ugrid.loadTestData(N, D);
		var r1 = yield t0.collect();
		var r2 = yield t0.collect();

		var passed1 = true;
		top:
		for (var i = 0; i < N; i++) {
			for (var j = 0; j < D; j++) {
				if (r1[i].features[j] != r2[i].features[j]) {
					passed1 = false;
					break top;
				}
			}
		}	
		console.log(passed1 ? 'Test without persist PASSED' : 'Test without persist FAILED');

		// Section 2: with persist()
		var t0 = ugrid.loadTestData(N, D).persist();
		var r1 = yield t0.collect();
		var r2 = yield t0.collect();

		var endTime = new Date();
		var passed2 = true;
		top:
		for (var i = 0; i < N; i++) {
			for (var j = 0; j < D; j++) {
				if (r1[i].features[j] != r2[i].features[j]) {
					passed2 = false;
					break top;
				}
			}
		}
		console.log(passed2 ? 'Test with persist PASSED' : 'Test with persist FAILED');
		if (passed1 && passed2) {
			console.log('test OK');
			process.exit(0);
		} else {
			console.log('test KO');
			process.exit(1);
		}
		
		grid.disconnect();
	})();
}catch (err) {
	console.log("error ")
	process.exit(2);
}
