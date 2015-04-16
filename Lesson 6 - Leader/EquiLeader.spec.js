'use strict';
var assert = require('assert');
var solution = require('./EquiLeader');

it('should return the number of equi leaders', function() {
    assert.deepEqual(solution([4,3,4,4,4,2]), 2);
});

it('should return the number of equi leaders', function() {
    assert.deepEqual(solution([1, 1, 2, 2, 3]), 0);
});

it('should return the number of equi leaders', function() {
    assert.deepEqual(solution([2, 2, 1]), 0);
});

it('should return the number of equi leaders', function() {
    assert.deepEqual(solution([-3, 3, -3, -3, -3, 7]), 2);
});

