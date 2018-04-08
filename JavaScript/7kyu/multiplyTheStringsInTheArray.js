// You received an array with two strings. Create a function that will return their product as a string. E.g.
//
// arrMultiply(['9','6']) should return '54'
//
// function arrMultiply(arr){
//    //your solution
// }

// My solution

function arrMultiply(arr){
   return (arr[0] * arr[1]).toString();
}

// The most popular solution
// 
// let arrMultiply = ([a, b]) => '' + (a * b);
