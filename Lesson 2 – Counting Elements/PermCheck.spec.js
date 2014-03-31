'use strict';
var assert = require('assert');
var solution = require('./PermCheck');

it('should check whether array A is a permutation', function() {
  assert(solution([4,1,3,2]) === 1);
  assert(solution([4,1,3]) === 0);
});