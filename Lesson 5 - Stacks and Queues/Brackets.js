'use strict';

module.exports = function solution(S) {

    var buffer = [];
    var opens = '([{';
    var closes = ')]}';

    for (var i = 0; i<S.length; i++) {
        if (opens.indexOf(S[i]) > -1) {
            buffer.push(S[i]);
            continue;
        }
        if (!buffer.length) {
            return 0;
        }
        if (closes.indexOf(S[i]) !== opens.indexOf(buffer.pop())) {
            return 0;
        }
    }

    if (!buffer.length) {
        return 1;
    }

    return 0;
};