'use strict';

module.exports = function solution(A) {
  
  var P = new Array(A.length + 1);

  for (var i=0; i<A.length; i++){
    if (A[i] > A.length){
      return 0;
    }

    P[A[i]] = true;
  }

  for (var j=1; j<P.length; j++){
    if (!P[j]){
      return 0;
    }
  }

  return 1;
};