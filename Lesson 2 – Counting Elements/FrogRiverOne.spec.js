'use strict';
var assert = require('assert');
var solution = require('./FrogRiverOne');

it('should return the earliest time when the frog can jump to the other side of the river', function() {
  assert(solution(5, [1,3,1,4,2,3,5,4]) === 6);
  assert(solution(5, [1,2,4,5,2]) === -1);
  assert(solution(1, [1]) === 0);
});