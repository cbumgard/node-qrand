# node-qrand

## A quantum random number generator for node.js.
Gets N-length random numbers from the ANU Quantum Random Number Generator
See here for more info: [http://photonics.anu.edu.au/qoptics/Research/qrng.php](http://photonics.anu.edu.au/qoptics/Research/qrng.php)

## Installation (Global)

`npm install -g qrand`

Then try it out by running:

`qrand -l 16`

Which should output something 32 random hex characters (16 octets):

`028251ba71420a4b8b0a343333b7445a`

## Using as a Library

Add to your project's package.json dependency array:

    "dependencies": {
      "qrand": "0.1.x"
    }

Then run `npm install`

From your project you can now use this library as follows:

    var qrand = require('qrand');
    qrand.getRandomHexOctets(16, function(err, octets) {
      console.log(octets.join(''));
    });
