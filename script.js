// Good Luck 💪🏾

//Done 💯💯👍👍

function sumTwoSmallestNums(arr) {
  arr.sort(function(c, d) {
    return c - d;
  });
  var sum = arr[0] + arr[1];
  return sum;
}
console.log(sumTwoSmallestNums([12, 5, 24, 55, 18])); 
console.log(sumTwoSmallestNums([190, 300, 230, 800])); 
console.log(sumTwoSmallestNums([200, 300, 100, 400])); 
