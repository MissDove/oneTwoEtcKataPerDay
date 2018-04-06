// Your task is to write function findSum.
//
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
//
// For example:
//
// findSum(5) should return 8 (3 + 5)
//
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
//
// function findSum(n) {
//   return 0;
// }

// My solution

function findSum(n) {
  var number;
  var array = [];
  for (number = 0; number <= n; number++) {
    if (number%3==0 || number%5==0) {
      array.push(number)
    };
  }
  return array.reduce((a, b) => a + b, 0);
}

// The most popular solution
// 
// function findSum(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i += 1) {
//     if (i % 3 ===0 || i % 5 === 0) result += i
//   }
//   return result
// }
