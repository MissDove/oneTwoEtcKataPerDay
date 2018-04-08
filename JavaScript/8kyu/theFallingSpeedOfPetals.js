// When it is spring Japanese cherries blossom, it is called "sakura" and it is admired a lot. The petals start to fall in late April.
//
// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.
//
// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
//
// Notes:
//
// The movement of the petal is quite compilcated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0
//
// function sakuraFall(v) {
//   // your code here
// }

// My solution

function sakuraFall(v) {
//  distance from the branch
//  distance = 5 cm/s * 80 s
//  distance = 400 cm
//  speed = distance/time
//  time = distance/speed
  var time;
  v > 0 ? time = 400/v : time = 0;
  return time;
}

// The most popular solution

// function sakuraFall(v) {
//   return v < 1 ? 0 : 400 / v;
// }
