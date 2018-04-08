// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: array may be empty, in this case return 0.
//
// function positiveSum(arr) {
//
// }

// My solution

function positiveSum(arr) {
  let arrPos = 0;
  if (arr == []) {
    return 0;
  } else {
    arr.forEach(function(element){
      if (element > 0) {
        arrPos += element;
      }
    });
  }
  return arrPos;
}

// The most popular solution
//
// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }
