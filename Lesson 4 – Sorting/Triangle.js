'use strict';

module.exports = function solution(A) {
    A.sort(function(a,b){return b-a;});

    for (var i=0; i<A.length - 2; i++) {
        if (A[i] < A[i+1] + A[i+2]) {
            return 1;
        }
    }
    return 0;
};