// Write a function that takes a string and returns an array containing binary numbers
// equivalent to the ASCII codes of the characters of the string.
// The binary strings should be eight digits long.
//
// Example: 'man' should return [ '01101101', '01100001', '01101110']


// MY SOLUTION

function wordToBin(str){
    let array1 = str.split('');
    let array2 = array1.map((letter) => 0 + letter.charCodeAt(0).toString(2));

    return array2;
}

// Best practice solutions

// const wordToBin = (x) => [...x].map(el=> el.codePointAt().toString(2).padStart(8,'0'));

// function wordToBin(str) {
//     return Array.from(str, c => "0" + c.charCodeAt(0).toString(2))
// }