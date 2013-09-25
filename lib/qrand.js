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
var base = 'http://qrng.anu.edu.au/API/jsonI.php?type=hex16&size=1&length='

/**
 * num: number of hex octets to retrieve as a string.
 * fn: called as fn(err, octets) where octets is an array of octet hex strings.
 *     If error, called as fn(err, null). Otherwise fn(null, octets).
 *     To convert to a single string just call octets.join('') on the result array.
 */
exports.getRandomHexOctets = function requestRandomHexOctets(num, fn) {
  if (num < 1) return fn(new Error('Invalid length (< 1)'));
  http.get(base + num , function (res) {
    var body = '';
    res.on('error', function (err) {
      return fn(new Error(err));
    });

    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      if (res.statusCode !== 200) return fn(new Error(body));
      try {
        body = JSON.parse(body);
      } catch (e) {
        return fn(e);
      }
      if (!body.success) return fn(new Error('Unsuccessful request (Unknown error)'));
      return fn(null, body.data);
    })
  });
}
