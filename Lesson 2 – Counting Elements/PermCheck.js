'use strict';

module.exports = function solution(A) {
  
  var P = {};

  for (var i=0; i<A.length; i++){
    if (A[i] > A.length){
      return 0;
    }

    P[A[i]] = true;
  }

  return Object.keys(P).length === A.length ? 1 : 0;
};