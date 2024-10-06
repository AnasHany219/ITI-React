/**
 * Task - 02
 *
 * C.2. Create an adding function that adds n numbers only. Throw exception if the user passed any data type other than "number" or called your function without passing any parameters.
 */

function adding() {
  if (!arguments.length)
    throw new Error("Function called without passing any parameters.");

  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number")
      throw new Error("Invalid parameter type!");

    sum += arguments[i];
  }

  return sum;
}

try {
  console.log(adding(1, 2, 3));
  console.log(adding(5, 10));
  console.log(adding());
  // console.log(adding(1, "a", 3));
} catch (err) {
  console.log(err);
}
