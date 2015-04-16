'use strict';

module.exports = function solution(H) {

    var blocks = [];
    blocks.push(H[0]);
    var count = 1;

    for (var i=1; i< H.length; i++) {

        var lastBlock = blocks.pop();

        if (H[i] === lastBlock) {
            blocks.push(lastBlock);
            continue;
        }

        if (H[i] > lastBlock) {
            blocks.push(lastBlock);
            blocks.push(H[i]);
            count++;
            continue;
        }

        while (lastBlock && H[i] < lastBlock) {
            if (blocks.length) {
                lastBlock = blocks.pop();
            }
            else {
                lastBlock = null;
            }
        }

        if (lastBlock != null) {
            blocks.push(lastBlock);
        }

        if (H[i] != lastBlock) {
            blocks.push(H[i]);
            count++;
        }
    }

    return count;
};