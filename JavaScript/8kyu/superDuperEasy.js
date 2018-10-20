// Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".

// Note: in C#, you'll always get the input as a string, so the above applies
// if the string isn't representing a double value.

// function problem(x) {
//   //your code here
// }

// MY SOLUTION

function problem(x) {
  y = parseFloat(x);
  if (!isNaN(parseFloat(x))) {
    return y * 50 + 6;
  } else {
    return "Error";
  }
}

// THE MOST POPULAR SOLUTION

const problem = x => (typeof x === "string" ? "Error" : x * 50 + 6);
