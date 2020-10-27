// let is block-scoped and variables declared
//within a block of code cannot be accessed outside of it.

//let
function begin () {
    for (var i=0; i<5; i++) {
     console.log(i)
    }
   // i is accessible outside the for loop
    console.log.begin(i)
   }


// var
function begin () {
    for (var j=0; j<5; j++) {
     console.log(j)
    }
   // i is accessible outside the for loop
    console.log(j)
   }

const user = {"name": "Amit", "age": 20}
//Can manipulate object properties
//user.name = "Sanu";

//Cannot re-assign the entire object
//user = {"name": "Sanu", "age": "28"}
console.log(user)

//index
let a = ['first', 'second', 'third', 'fourth'];
let position = a.indexOf('second');
console.log("a:", a);
console.log("position:", position);
