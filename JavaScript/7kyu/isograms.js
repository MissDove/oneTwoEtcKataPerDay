// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case
//
// function isIsogram(str){
//   //...
// }

// My solution

function isIsogram(str){
  let str1 = str.toLowerCase().split('');
  let str2 = Array.from(new Set(str1));
  return JSON.stringify(str1) === JSON.stringify(str2);
}

// The most popular solution
// 
// function isIsogram(str){
//   return !/(\w).*\1/i.test(str)
// }
