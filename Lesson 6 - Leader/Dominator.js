'use strict';

module.exports = function solution(A) {

    var size = 0;
    var dominator = null;

    for (var j=0; j<A.length; j++) {
        if (size === 0) {
            dominator = A[j];
            size++;
        }
        else {
            if (dominator != A[j]) {
                size--;
            }
            else {
                size++;
            }
        }
    }

    var dominatorCount = 0;

    for (var c=0; c<A.length; c++) {
        if (A[c] === dominator) {
            dominatorCount++;
        }
    }

    if (dominatorCount <= A.length / 2) {
        return -1;
    }

    for (var i=0; i<A.length; i++) {
        if (A[i] === dominator) {
            return i;
        }
    }

    return -1;
};