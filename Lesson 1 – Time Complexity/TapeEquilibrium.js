'use strict';

module.exports = function solution(A) {
  var a = A[0];
  var b = 0;

  for (var i=1; i<A.length; i++){
    b += A[i];
  }

  var min = Infinity;

  for (var j=1; j<A.length; j++){
    var result = Math.abs(a-b);
    if (result < min) {
      min = result;
    }
    a += A[j];
    b -= A[j];
  }

  return min;
};