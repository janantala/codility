'use strict';

module.exports = function solution(A) {
  var asum = 0;
  var n = A.length + 1;
  var sum = n * (n + 1) / 2;

  for (var i=0; i<A.length; i++){
    asum += A[i];
  }

  return sum - asum;
};