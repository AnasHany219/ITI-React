var count = 0;
var string = prompt("Enter a string to count the number of 'e' characters:");

for (var i = 0; i < string.length; i++) {
  if (string[i] === "e") count++;
}

alert("The number of 'e' characters in the entered string is: " + count);
