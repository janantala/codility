'use strict';

module.exports = function solution(A) {

    var max = null;
    var maxEnding = 0;
    var maxSlice = 0;

    for (var i=0; i<A.length; i++) {
        if (max === null) {
            max = A[i];
        }
        max = A[i] > max ? A[i] : max;
        maxEnding = maxEnding + A[i] > 0 ? maxEnding + A[i] : 0;
        maxSlice = maxSlice > maxEnding ? maxSlice : maxEnding;
    }

    return maxSlice === 0 ? max : maxSlice;
};