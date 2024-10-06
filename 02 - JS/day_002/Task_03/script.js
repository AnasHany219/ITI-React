function getUserInput() {
  var values = [];

  for (var i = 0; i < 5; i++) {
    var value;
    do {
      value = Number(prompt(`Enter value ${i + 1}:`));

      if (isNaN(value)) alert("Please enter a valid number.");
    } while (isNaN(value));

    values.push(value);
  }

  return values;
}

function sortAscending(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

function sortDescending(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}

var values = getUserInput();

document.writeln(
  "<p style='color:red;'> u've entered the values of </p>" + values
);

document.writeln(
  "<p style='color:red;'> ur values after being sorted descending </p>" +
    sortDescending(values)
);

document.writeln(
  "<p style='color:red;'> ur values after being sorted ascendingg </p>" +
    sortAscending(values)
);
