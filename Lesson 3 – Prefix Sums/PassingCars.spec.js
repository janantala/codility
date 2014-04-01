'use strict';
var assert = require('assert');
var solution = require('./PassingCars');

it('should return the number of passing cars', function() {
  assert.deepEqual(solution([0,1,0,1,1]), 5);
});