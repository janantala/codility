'use strict';
var assert = require('assert');
var solution = require('./MaxProfit');

it('should return the maximum profit', function() {
    assert.deepEqual(solution([23171, 21011, 21123, 21366, 21013, 21367]), 356);
});

it('hould return the maximum profit', function() {
    assert.deepEqual(solution([10, 5, 1]), 0);
});

