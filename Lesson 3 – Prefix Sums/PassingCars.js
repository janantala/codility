'use strict';

module.exports = function solution(A) {
  var zeros = 0;
  var sum = 0;

  for (var i=0; i<A.length; i++){
    if (A[i] === 0) {
      zeros++;
    }

    if (A[i] === 1) {
      sum += zeros;
    }
  }
  return (sum > 1000000000) ? -1 : sum;
};