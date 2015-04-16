'use strict';
var assert = require('assert');
var solution = require('./Dominator');

it('should return the index of any element of array A in which the dominator of A occurs', function() {
    assert.deepEqual(solution([3, 4, 3, 2, 3, -1, 3, 3]), 0);
});

it('hould return the index of any element of array A in which the dominator of A occurs', function() {
    assert.deepEqual(solution([1, 1, 2, 3]), -1);
});

