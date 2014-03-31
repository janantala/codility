'use strict';

module.exports = function solution(A) {
  var asum = 0;
  var sum = 0;

  for (var i=0; i<A.length; i++){
    asum += A[i];
  }

  for (var j=1; j<=A.length + 1; j++){
    sum += j;
  }
  return sum - asum;
};