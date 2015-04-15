'use strict';
var assert = require('assert');
var solution = require('./Brackets');

it('should be properly nested', function() {
    assert.deepEqual(solution(''), 1);
});

it('should be properly nested', function() {
    assert.deepEqual(solution('{[()()]}'), 1);
});

it('should be properly nested', function() {
    assert.deepEqual(solution('()()'), 1);
});

it('should be properly nested', function() {
    assert.deepEqual(solution('()(){}'), 1);
});

it('should be properly nested', function() {
    assert.deepEqual(solution('{[()()]}()'), 1);
});

it('should not be properly nested', function() {
    assert.deepEqual(solution('([)()]'), 0);
});