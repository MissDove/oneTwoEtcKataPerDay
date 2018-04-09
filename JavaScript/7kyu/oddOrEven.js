// Given an array of numbers, determine whether the sum of all of the numbers is odd or even.
//
// Give your answer in string format as 'odd' or 'even'.
//
// If the input array is empty consider it as: [0] (array with a zero).
//
// Example:
//
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"
//
// function oddOrEven(array) {
//    //enter code here
// }

// My solution

function oddOrEven(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  if(sum%2 === 0){
    return "even";
  } else {
    return "odd";
  }
}

// The most popular solution
// 
// function oddOrEven(arr) {
//   return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
// }
