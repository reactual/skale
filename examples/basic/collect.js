#!/usr/bin/env node

var sc = require('skale').context();

sc.parallelize([[1, 2], [3, 4]], 2)
  .collect(function(err, res) {
    console.log(res);
    console.assert(JSON.stringify(res) === JSON.stringify([[1, 2], [3, 4]]));
    sc.end();
  });
