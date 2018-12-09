// Define a method hello that returns "Hello, Name!"
// to a given name, or says Hello, World! if name
// is not given (or passed as an empty String).

// Assuming that name is a String and it checks
// for user typos to return a name with a first
// capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

// function hello(name) {
//     return '';
// }

// MY SOLUTION

function hello(name) {
  typeof name === "string" ? (name = name.toLowerCase()) : name;
  return typeof name === "string" && name.length > 0
    ? "Hello, " + (name.charAt(0).toUpperCase() + name.slice(1)) + "!"
    : "Hello, World!";
}

// MOST POPULAR SOLUTION

const hello = s =>
  `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "World"}!`;
