/* 
1- Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers.

Ex: input : [1,2,3,4,5]
Expected Output : 2,4
*/

function findNumbers() {
  var input = document.getElementById("input").value;
  var numbers = input.split(",");

  numbers.sort(function (a, b) {
    return a - b;
  });

  var secondLowest = numbers.length > 1 ? numbers[1] : null;
  var secondGreatest = numbers.length > 1 ? numbers[numbers.length - 2] : null;

  var result = document.getElementById("result");

  if (secondLowest !== null && secondGreatest !== null)
    result.innerHTML =
      "Second Lowest:" + secondLowest + ", Second Greatest:" + secondGreatest;
  else result.innerHTML = "Array must contain at least two numbers.";
}
