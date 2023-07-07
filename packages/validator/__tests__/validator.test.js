'use strict';

const validator = require('..');
const assert = require('assert').strict;

assert.strictEqual(validator(), 'Hello from validator');
console.info('validator tests passed');
