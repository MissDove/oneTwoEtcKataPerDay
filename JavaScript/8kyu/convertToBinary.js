// Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.
//
// function toBinary(n){
//   return n;
// }

// My solution

function toBinary(n){
  return parseInt(n.toString(2));
}

// The most popular solution
// 
// let toBinary = n => +n.toString(2)
