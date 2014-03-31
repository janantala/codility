'use strict';
var assert = require('assert');
var solution = require('./TapeEquilibrium');

it('should return the minimal difference that can be achieved', function() {
  assert(solution([3, 1, 2, 4, 3]) === 1);
});