'use strict';
var assert = require('assert');
var solution = require('./MaxCounters');

it('should calculate the value of every counter after all operations', function() {
  assert.deepEqual(solution(5, [3,4,4,6,1,4,4]), [3,2,2,4,2]);
});