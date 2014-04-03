'use strict';

module.exports = function solution(A) {
  var distinct = {};
  var count = 0;

  for (var i=0; i<A.length; i++){
    if (! distinct[A[i]]) {
      distinct[A[i]] = true;
      count++;
    }
  }

  return count;
};