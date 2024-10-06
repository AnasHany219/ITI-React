var string = prompt("Enter a string to check if it's a palindrome:");

var palindrome = true;

for (var i = 0; i < string.length / 2; i++) {
  if (string[i] !== string[string.length - 1 - i]) {
    palindrome = false;
    break;
  }
}

if (palindrome) alert("The entered string is a palindrome.");
else alert("The entered string is not a palindrome.");
