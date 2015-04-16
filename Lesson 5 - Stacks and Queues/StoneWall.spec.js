'use strict';
var assert = require('assert');
var solution = require('./StoneWall');

it('should return the minimum number of blocks', function() {
    assert.deepEqual(solution([8,8,5,7,9,8,7,4,8]), 7);
});

