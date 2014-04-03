'use strict';
var assert = require('assert');
var solution = require('./Distinct');

it('should return the number of passing cars', function() {
  assert.deepEqual(solution([2,1,1,2,3,1]), 3);
  assert.deepEqual(solution([2,1,1,2,3,1,-1,-1]), 4);
});