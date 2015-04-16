'use strict';

module.exports = function solution(A) {

    var size = 0;
    var leaderCandidate = null;
    var equiLeaders = 0;

    for (var j=0; j<A.length; j++) {
        if (size === 0) {
            leaderCandidate = A[j];
            size++;
        }
        else {
            if (leaderCandidate != A[j]) {
                size--;
            }
            else {
                size++;
            }
        }
    }

    var leaderCount = 0;

    for (var c=0; c<A.length; c++) {
        if (A[c] === leaderCandidate) {
            leaderCount++;
        }
    }

    var leftLeaders = 0;

    for (var i=0; i<A.length; i++) {

        if (A[i] === leaderCandidate) {
            leaderCount--;
            leftLeaders++;
        }

        if (leftLeaders > (i + 1) / 2 && leaderCount > (A.length - i - 1) / 2) {
            equiLeaders++;
        }
    }

    return equiLeaders;
};