// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to miliseconds.
//
// #####Example:
//
// past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers!
//
// function past(h, m, s){
//   // Your code!
// }
//
// My solution

function past(h, m, s){
  return (h*3600000 + m*60000 + s*1000);
}

// The most popular solution
// 
// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }
