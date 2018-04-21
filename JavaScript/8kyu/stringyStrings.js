// Write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
//
// the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
// with size 4 should return : '1010'.
//
// with size 12 should return : '101010101010'.
//
// The size will always be positive and will only use whole numbers.
//
// function stringy(size) {
//   // your code here
// }

// My solution

function stringy(size) {
  var string = '10'
  return (size%2 == 0) ? string.repeat(size/2) : string.repeat(size/2).concat('1');
}

// The most popular solution
// 
// function stringy(size) {
//   var str='';
//   for( var i=1; i<=size; i++ )
//     str+=i%2;
//   return str;
// }
