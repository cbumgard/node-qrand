#!/usr/bin/env node

var qrand = require('../lib/qrand.js')
  , colors = require('colors')
  , argv = require('optimist')
      .usage('Usage: $0 -l [length]')
      .demand(['l'])
      .alias('l', 'length')
      .describe('l', 'The length, in octets, of the returned random number')
      .alias('n', 'num')
      .describe('n', 'The amount of random numbers to generate')
      .argv
  , i
  , hexStr = ''
;

var num = argv.n && argv.n > 0 ? argv.n : 1;
for (var i = 0; i < num; i++) {
  qrand.getRandomHexOctets(argv.l, function(err, octets) {
    if (err) return console.error(err.toString().red); // doh!
    console.log(octets.join('').cyan); // join array to single string with color :)
  });
}