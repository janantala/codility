'use strict';
var assert = require('assert');
var solution = require('./MaxProductOfThree');

it('should return the value of the maximal product of any triplet', function() {
  assert.deepEqual(solution([-3,1,2,-2,5,6]), 60);
});