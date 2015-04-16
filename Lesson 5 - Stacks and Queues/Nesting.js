'use strict';

module.exports = function solution(S) {

    var opens = 0;
    var closes = 0;

    for (var i = 0; i<S.length; i++) {
        if (S[i] === '(') {
            opens++;
        }
        else if (S[i] === ')') {
            closes++;
        }

        if (opens < closes) {
            return 0;
        }
    }

    if (opens === closes) {
        return 1;
    }

    return 0;
};