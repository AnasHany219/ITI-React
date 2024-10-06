function updateCircles() {
  var input = Number(document.getElementById("number").value);

  for (var i = 1; i <= 3; i++) {
    var circle = document.getElementById("circle" + i);
    var text = document.getElementById("text" + i);

    circle.className = "circle";
    text.innerHTML = "";
  }

  if (input === 1) {
    document.getElementById("circle1").classList.add("red");
    document.getElementById("text1").innerHTML = "Ready";
  } else if (input === 2) {
    document.getElementById("circle2").classList.add("yellow");
    document.getElementById("text2").innerHTML = "Steady";
  } else if (input === 3) {
    document.getElementById("circle3").classList.add("green");
    document.getElementById("text3").innerHTML = "Go";
  }
}
