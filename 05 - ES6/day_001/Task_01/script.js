// "use strict";

// global scope
console.log(this); // `window` object -> super global object

// regularFunction
function regularFunction() {
  console.log(this); // `window`
}
regularFunction();

// strictFunction
function strictFunction() {
  console.log(this); // undefined
}

strictFunction();

// method object
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name); // `this` refers to the `person` object
  },
};

person.greet(); // "Alice"

// Arrow function
const obj = {
  name: "Alice",
  greet: function () {
    const inner = () => console.log(this); // window

    inner();
  },
};

obj.greet(); // "Alice"
console.log(obj);
