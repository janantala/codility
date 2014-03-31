'use strict';

module.exports = function solution(N, A) {
  var counters = new Array(N);
  for (var i=0; i<N;i++){
    counters[i]=0;
  }
  var arraySize = N;
  var max = 0;
  var nextMax = 0;

  for (var k=0; k<A.length; k++){
    if (A[k] >= 1 && A[k] <= N){
      if (counters[A[k]-1] < nextMax){
        counters[A[k]-1] = nextMax;
      }
      counters[A[k]-1]++;

      if (max < counters[A[k]-1]) {
        max = counters[A[k]-1];
      }
    }
    if (A[k] == N + 1) {
      nextMax = max;
    }
  }

  for (var j=0; j<N; j++){
    if (counters[j] < nextMax) {
      counters[j] = nextMax;
    }
  }
  return counters;
};