// Create a function that takes 2 numbers in form of a string as an input, and outputs the sum (also as a string):
//
//   sumStr("4", "5")    // should output "9"
//   sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero. If both inputs are empty, output "0".
//
// function sumStr(a,b) {
//   // Your code here
// }

// My solution

function sumStr(a, b) {
  let aNum;
  a ? (aNum = parseInt(a)) : (aNum = 0);
  let bNum;
  b ? (bNum = parseInt(b)) : (bNum = 0);
  let sum = aNum + bNum;
  return sum.toString();
}

// The most popular solution

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}
