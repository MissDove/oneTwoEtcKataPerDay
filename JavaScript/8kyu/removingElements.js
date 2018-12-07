// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr){
// //your code here
// }

// MY SOLUTION

function removeEveryOther(arr) {
  return arr.filter(function(item, index) {
    return index % 2 === 0;
  });
}

// THE MOST POPULAR SOLUTION

function removeEveryOther(arr) {
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
