'use strict';
var assert = require('assert');
var solution = require('./Fish');

it('should return the number of fish that will stay alive', function() {
    assert.deepEqual(solution([4,3,2,1,5], [0,1,0,0,0]), 2);
});

it('should return the number of fish that will stay alive', function() {
    assert.deepEqual(solution([4,3,2,1,5], [0,1,0,1,0]), 2);
});

it('should return the number of fish that will stay alive', function() {
    assert.deepEqual(solution([4,3,2,1,5], [0,1,0,1,1]), 4);
});

