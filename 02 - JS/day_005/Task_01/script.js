/**
 * Task - 01
 * C.1. Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters
 */

function check(param1, param2) {
  if (arguments.length !== 2)
    throw new Error(
      "Number of parameters either less than or exceeds 2 parameters."
    );

  console.log("Function with parameters:", param1, param2);
}

try {
  check(1, 2);
  check(1);
  check(1, 2, 3);
} catch (err) {
  console.log(err);
}
