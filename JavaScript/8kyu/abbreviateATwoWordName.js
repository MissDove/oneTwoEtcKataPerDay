// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F
//
// function abbrevName(name){
//     // code away
// }

// My solution

function abbrevName(name){
  var initials = [];
  name.split(' ').forEach(function(element) {
    initials.push(element.slice(0, 1).toUpperCase());
  });
  return initials[0] + "." + initials[1]
}

// The most popular solution
//
// function abbrevName(name){
//
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
