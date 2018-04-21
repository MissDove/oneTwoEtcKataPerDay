// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"
//
// function bmi(weight, height) {
//   return "";
// }

// My solution

function bmi(weight, height) {
  var bmi = weight/Math.pow(height, 2);
  if (bmi <= 18.5) {return "Underweight"}
  else if (bmi <= 25.0) {return "Normal"}
  else if (bmi <= 30.0) {return "Overweight"}
  else if (bmi > 30) {return "Obese"}
}

// The most popular solution
// 
// function bmi(weight, height) {
//   var result = weight/Math.pow(height,2)
//
//   if (result <= 18.5) {
//     return "Underweight";
//   } else if (result <= 25) {
//     return "Normal";
//   } else if (result <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
//
// }
