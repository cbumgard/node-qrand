#!/usr/bin/env node

var qrand = require('../lib/qrand.js')
  , argv = require('optimist')
      .usage('Usage: $0 -l [length]')
      .demand(['l'])
      .alias('l', 'length')
      .describe('l', 'The length, in octets, of the returned random number')
      .argv
  , i
  , hexStr = ''
;

qrand.getRandomHexOctets(argv.l, function(octet, count) {
  process.stdout.write(octet);
  if (count === argv.l - 1) { // last octet
    process.stdout.write('\n');
  }
});