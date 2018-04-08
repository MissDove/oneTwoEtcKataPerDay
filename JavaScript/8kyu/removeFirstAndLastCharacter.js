// It is pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
//
// function removeChar(str){
//  // Your code!
// };

// My solution

function removeChar(str){
  if (str.length > 2) {
    return str.slice(1,-1)
  }
};

// The most popular solution
// 
// function removeChar(str) {
//   return str.slice(1, -1);
// }
