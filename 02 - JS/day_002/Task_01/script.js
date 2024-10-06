/*
Fizz Buzz Game
Write a function that take a number ad check if the given number is divided by 3 only, 5 only or both and print the suitable sentence. Follow the below Rule.

Rule:
divided by 3 only="fizz", divided by 5 only ="buzz", divided by 3 & 5= "fizz buzz", Neither divided by 3 nor 5 = "none"
*/

function check(n) {
  if (isNaN(n)) {
    console.log("Not a Number");
    return;
  }

  if (n % 3 === 0 && n % 5 === 0) console.log("fizz buzz");
  else if (n % 3 === 0) console.log("fizz");
  else if (n % 5 === 0) console.log("buzz");
  else console.log("none");
}

var input = prompt("Enter a number");
check(input);

// check(15);
// check(9);
// check(5);
// check(2);
