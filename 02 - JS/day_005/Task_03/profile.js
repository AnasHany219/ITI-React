function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var cookieName = cookie.split("=")[0];
    var cookieValue = cookie.split("=")[1];
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

function setCookie(name, value) {
  document.cookie = name + "=" + value + "; ";
}

function visitCounter() {
  var visits = getCookie("visits");

  if (visits) visits = parseInt(visits) + 1;
  else visits = 1;

  setCookie("visits", visits);

  return visits;
}

function profile() {
  var name = getCookie("name");
  var gender = getCookie("gender");
  var visits = visitCounter();
  var genderIcon = gender === "male" ? "👨🏻‍🦱" : "👩🏻‍🦰";

  document.getElementById("welcomeMessage").innerHTML =
    "Welcome " +
    name +
    " " +
    genderIcon +
    ", you have visited this site " +
    visits +
    " times.";
}

profile();
