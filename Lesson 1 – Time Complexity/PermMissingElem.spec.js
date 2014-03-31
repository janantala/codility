'use strict';
var assert = require('assert');
var solution = require('./PermMissingElem');

it('should return the value of the missing element', function() {
  assert(solution([2,3,1,5]) === 4);
});