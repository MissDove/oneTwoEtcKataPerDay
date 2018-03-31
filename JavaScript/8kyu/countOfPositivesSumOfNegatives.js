// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//
// If the input array is empty or null, return an empty array:
//
// C#/Java: new int[] {} / new int[0];
// C++: std::vector<int>();
// JavaScript/CoffeeScript/PHP/Haskell: [];
// Rust: Vec::<i32>::new();
// ATTENTION!
// The passed array should NOT be changed.
//
// For example:
//
// input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// return [10, -65].
//
// function countPositivesSumNegatives(input) {
//     return ?;
// }

// My solution - NOT WORKING ON CodeWars - one test not passing - need to refactor to take into consideration when the array is null or yhe length of the array is zero.

function countPositivesSumNegatives(input) {
  var countPlus = [];
  var sumMinus = 0;
  var result = [];
  if (input.length == 0) {
    return [];
  } else {
    var input = input.filter(function(x){
      return (x !== (undefined || null || ''));
    });
    input.forEach(function(element) {
      if (element > 0) {
        countPlus.push(element);
      }
      else if (element <= 0) {
        sumMinus += element;
      }
      return countPlus;
      return sumMinus;
    });
    result.push(countPlus.length, sumMinus);
    return result;
  }
}

// The most popular solution

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
  return [];

  var positive = 0;
  var negative = 0;

  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
    ++ positive;
    else
    negative += input[i];
  }

  return [positive, negative];
}
