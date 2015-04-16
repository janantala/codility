'use strict';
var assert = require('assert');
var solution = require('./MaxSliceSum');

it('should return the maximum sum of any slice of A', function() {
    assert.deepEqual(solution([3, 2, -6, 4, 0]), 5);
});

it('should return the maximum sum of any slice of A', function() {
    assert.deepEqual(solution([3, 2, -1, 4, 0]), 8);
});

it('hould return the maximum sum of any slice of A', function() {
    assert.deepEqual(solution([-5, -4, -3, -10]), -3);
});

it('hould return the maximum sum of any slice of A', function() {
    assert.deepEqual(solution([-1, -5, 0]), 0);
});

