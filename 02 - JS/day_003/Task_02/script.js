/*
2- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

Ex: input: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox'
*/

function capitalizeWords() {
  var input = document.getElementById("input").value;
  var words = input.split(" ");
  var result = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word.length > 0) {
      var capWord = word[0].toUpperCase();

      for (var j = 1; j < word.length; j++) capWord += word[j].toLowerCase();

      result += capWord + " ";
    } else result += " ";
  }

  document.getElementById("result").innerHTML = result;
}
