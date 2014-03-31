'use strict';

module.exports = function solution(X, A) {
  
  var P = {};
  var size = 0;

  for (var i=0; i<A.length; i++) {
    
    if (P[A[i]]){

    }
    else {
      P[A[i]] = true;
      size++;
    }
    
    if (size === X) {
      return i;
    }
  }
  return -1;
};