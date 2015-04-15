'use strict';
var assert = require('assert');
var solution = require('./Triangle');

it('should exists a triangular triplet for an array', function() {
    assert.deepEqual(solution([10,2,5,1,8,20]), 1);
});

it('should not exists a triangular triplet for an array', function() {
    assert.deepEqual(solution([10,50,5,1]), 0);
});