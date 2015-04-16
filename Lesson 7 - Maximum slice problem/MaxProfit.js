'use strict';

module.exports = function solution(A) {

    var max = 0;
    var min = Infinity;

    for (var i=0; i<A.length; i++) {
        min = Math.min(min, A[i]);
        max = Math.max(max, A[i] - min);
    }

    return max;
};