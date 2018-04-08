// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!
//
// Return True if you're better, else False!
//
// Note:
// Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!
//
// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
// }

// My solution

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce(function (a, b) {return a + b;}, 0)/classPoints.length;
  return yourPoints > average ? true : false;
}

// // The most popular solution
//
// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }
