// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father
// was twice as old as his son (or in how many
// years he will be twice as old).

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     // your code here
// }

// MY SOLUTION

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = 2 * sonYearsOld;
  let difference = twice - dadYearsOld;
  if (difference >= 0) {
    return difference;
  } else {
    return -difference;
  }
}

// MOST POPULAR SOLUTION

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
