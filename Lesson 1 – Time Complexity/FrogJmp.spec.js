'use strict';
var assert = require('assert');
var solution = require('./FrogJmp');

it('should return the minimal number of jumps', function() {
  assert(solution(10, 85, 30) === 3);
});