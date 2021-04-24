// John has invited some friends. His list is:
//
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//
// Could you make a program that
// - makes this string uppercase
// - gives it sorted in alphabetical order by last name.
//
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
//
// So the result of function meeting(s) will be:
//
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
//
// It can happen that in two distinct families with the same family name two people have the same first name too.


// My solution => WORK IN PROGRESS => need to write sorting function for names and cleanup code

// TODO
function meeting(s) {
    let array1 = s.split(";");
    let array2 = array1.map((name) => name.split(":"));
    let array3 = array2.map((name) => name.reverse());
    let array4 = array3.sort(function(a, b) {
        let nameA = a[0]// ignore upper and lowercase
        let nameB = b[0] // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    let array5 = array4.map((name)=> name.join(", "));

    let array6 = array5.map((name) => `(${name})`);

    return array6.join("").toUpperCase();
}



