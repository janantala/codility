'use strict';

module.exports = function solution(A, B) {

    var alive = 0;
    var predators = [];

    for (var i=0; i< A.length; i++) {

        if (B[i] === 1) {
            predators.push(A[i]);
        }
        else {
            if (predators.length) {
                var predator = predators.pop();
                while (predator && predator < A[i]) {
                    if (predators.length) {
                        predator = predators.pop();
                    }
                    else {
                        predator = null;
                    }
                }

                if (predator && predator > A[i]) {
                    predators.push(predator);
                }
                else {
                    alive++;
                }
            }
            else {
                alive++;
            }
        }
    }

    alive += predators.length;
    return alive;
};