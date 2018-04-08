// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...
//
// Expected results:
//
// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue
//
// function spam(number){
//   //TODO: Not returning the expected value.
//   return "hue" * number;
// }

// My solution

function spam(number){
  return "hue".repeat(number);
}

// The most popular solution
// 
// function spam(number){
//   return Array(++number).join("hue");
// }
