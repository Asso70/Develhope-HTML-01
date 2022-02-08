function sum(...nums) {
  return nums.reduce(function(preVal, currVal) {return preVal + currVal});
}

console.log(sum(1, 2, 3, 4, 5));