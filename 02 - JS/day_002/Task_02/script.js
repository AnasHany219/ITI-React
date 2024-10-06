function getUserInput() {
  var values = [];

  for (var i = 0; i < 3; i++) {
    var value;
    do {
      value = Number(prompt(`Enter value ${i + 1}:`));

      if (isNaN(value)) alert("Please enter a valid number.");
    } while (isNaN(value));

    values.push(value);
  }

  return values;
}

function sum(values) {
  return values[0] + values[1] + values[2];
}

function multiply(values) {
  return values[0] * values[1] * values[2];
}

function divide(values) {
  var div = values[0] / values[1] / values[2];

  return div === Infinity ? "Error: Division by zero is not allowed." : div;
}

var values = getUserInput();

document.writeln(
  "<p style='color:red;'>sum of the 3 values " +
    values[0] +
    " + " +
    values[1] +
    " + " +
    values[2] +
    " = " +
    sum(values) +
    "</p>"
);

document.writeln(
  "<p style='color:red;'>multiplication of the 3 values " +
    values[0] +
    " * " +
    values[1] +
    " * " +
    values[2] +
    " = " +
    multiply(values) +
    "</p>"
);

document.writeln(
  "<p style='color:red;'>division of the 3 values " +
    values[0] +
    " / " +
    values[1] +
    " / " +
    values[2] +
    " = " +
    divide(values) +
    "</p>"
);
