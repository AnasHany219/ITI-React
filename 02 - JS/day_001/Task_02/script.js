var value;
var sum = 0;

while (true) {
  value = Number(
    prompt("Enter a numeric value (0 to stop or if the sum exceeds 100): ")
  );

  if (isNaN(value)) {
    alert("Invalid input, please enter a numeric value.");
    continue;
  }

  sum += value;
  if (value === 0 || sum + value > 100) break;
}

alert("sum: " + sum);
