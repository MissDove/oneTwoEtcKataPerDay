// Point objects have x and y attributes attributes.
//
// Write a function calculating distance between Point a and Point b.

// My solution

function distanceBetweenPoints(a, b) {
    let xDistance = Math.pow((b.x - a.x), 2);
    let yDistance = Math.pow((b.y - a.y), 2);

    return Math.sqrt(xDistance + yDistance);
}

// The most popular solution

// function distanceBetweenPoints(a, b) {
//     return Math.hypot(a.x - b.x, a.y - b.y);
// }