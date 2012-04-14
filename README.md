# node-qrand

## A quantum random number generator for node.js.
Gets N-length random numbers from the ANU Quantum Random Number Generator
See here for more info: [http://photonics.anu.edu.au/qoptics/Research/qrng.php](http://photonics.anu.edu.au/qoptics/Research/qrng.php)

## Installation
`npm install qrand`

## Usage
For example to generate a random string of 10 hex octets:

`node test/get-qrand.js -l 10`

Example output: `bdd81dc887d84899cf3b`