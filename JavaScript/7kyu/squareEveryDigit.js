// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer
//
// function squareDigits(num){
//   //may the code be with you
// }

// My solution

function squareDigits(num){
  var numSquare = [];
  num.toString().split('').forEach(function(element){
    numSquare.push(element*element);
  })
  return parseInt(numSquare.join(''));
}

// The most popular solution
// 
// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
// }
