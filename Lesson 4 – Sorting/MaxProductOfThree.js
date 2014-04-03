'use strict';

module.exports = function solution(A) {
  A.sort(function(a,b){return b-a;});

  return Math.max(
    A[0] * A[1] * A[2],
    A[0] * A[1] * A[A.length-1],
    A[0] * A[A.length-1] * A[A.length-2],
    A[A.length-1] * A[A.length-2] * A[A.length-3]
  );
};