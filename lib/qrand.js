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

var request = require('request')
  , async = require('async')
  ;

/**
 * num: number of hex octets to retrieve as a string.
 * fn: called as fn(err, octets) where octets is an array of octet hex strings. 
 *     If error, called as fn(err, null). Otherwise fn(null, octets).
 *     To convert to a single string just call octets.join('') on the result array.
 */
exports.getRandomHexOctets = function requestRandomHexOctets(num, fn) {
  var requests = [], i;
  for (i = 0; i < num; i++) {
    requests.push(function(callback) { // callback passed in by async module
      request('http://150.203.48.55/ran_hex.php', function(err, res, body) {
        if (err) return callback(err, null);
        else if (res.statusCode !== 200) return callback(new Error(body), null);
        else return callback(null, body);
      });
    });
  }    
  async.parallel(requests, function(err, results) {
    if (err) return fn(err, null);
    return fn(null, results);
  });
}