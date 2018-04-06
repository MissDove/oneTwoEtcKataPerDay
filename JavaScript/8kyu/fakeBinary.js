// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// function fakeBin(x){
// // Your code here
// }

//  My solution

function fakeBin(x){
  var answer = "";
  x.split("").forEach(function(element){
    answer += parseInt(element) < 5 ? "0" : "1";
  });
  return answer;
}

// The most popular solution
//
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
