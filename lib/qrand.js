/**
 * N-length random numbers from the ANU Quantum Random Number Generator
 * See here for more info: http://photonics.anu.edu.au/qoptics/Research/qrng.php.
 *
 * Inspired by my friend Rick Mellor's Python module: https://github.com/rickmellor/Python-qrand
 * and geekiness in general.
 * 
 * Author: Chris Bumgardner (cbumgard@gmail.com)
 * This software is free.
 */

var http = require('http');

exports.getRandomHexOctets = function(num, callback) {
  var opts = {host: '150.203.48.55', port:80, path:'/ran_hex.php'},
    octet = '',
    i;
  for (i = 0; i < num; i++) {
    http.get(opts, function(res) {
      res.setEncoding('utf8');
      res.on('data', function(octet) {
        callback(octet);
      });
      res.on('error', function(e) {
        console.error('Got error: %s', e.message);
      });    
    })
  }
}