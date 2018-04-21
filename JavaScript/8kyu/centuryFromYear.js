// Given a year, return the century it is in.
//
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.
//
// Let's see some examples:
//
// centuryFromYear(1705) // returns 18
// centuryFromYear(1900) // returns 19
// centuryFromYear(1601) // returns 17
// centuryFromYear(2000) // returns 20

// function century(year) {
//   // Finish this :)
//   return;
// }

// My solution

function century(year) {
  var num = year/100;
  return Number.isInteger(num) ? num : Math.ceil(num) ;
}

// The most popular solution
// 
// function century(year) {
//   return (year + 99) / 100 | 0;
// }
