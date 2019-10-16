/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default binding, window object.
* 2. Implicit binding, the object to the left of the dot.
* 3. Explicit binding, uses call, apply, or bind.
* 4. New binding, creates and empty object and inherits the prototype of the function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function defBinding() {
    console.log(this.boo);
}
var boo = "BoooOoooOOoo";

defBinding();

// Principle 2

// code example for Implicit Binding
let impBinding = {
    name: 'Principle 2',
    type: 'Implicit',
    sayit: function(){
        console.log(this.type);
    }
}

impBinding.sayit();


// Principle 3

// code example for New Binding
function NewBind() {
    this.name = 'New Binding'
    this.speak = function () {
        return `This is the ${this.name}!`;
    }
}

const result = new NewBind();
console.log(result.speak());

// Principle 4

// code example for Explicit Binding
function sayboo(){
    console.log(`This is ${this.name} and this is how I roll: ${this.boo}`);
}

let firstGhost = {
    name: "Ghost Face",
    boo: "Boo in your face!"
}

let secondGhost = {
    name: "Double Ghost",
    boo: "Boo boo!"
}

sayboo.call(firstGhost);
let ghost2speak = sayboo.bind(secondGhost);
ghost2speak();

