// Write a function that returns the total surface area and volume of a box as an array: [area, volume].
//
// function getSize(width, height, depth)

// My solution

function getSize(width, height, depth) {
  area = (2*width*height) + (2*width*depth) + (2*height*depth);
  volume = width*height*depth;
  var array = [];
  array.push(area, volume);
  return array;
};

//  The most popular solution

// function getSize(width, height, depth){
//   var box = { width: width, height:height, depth:depth};
//
//   return [getArea(box), getVolume(box)];
// }
//
// 
// function getArea(box){
//   return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
// }
//
// function getVolume(box){
//   return box.width * box.height * box.depth;
// }
