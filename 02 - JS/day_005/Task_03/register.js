function setCookie(name, value) {
  document.cookie = name + "=" + value + "; ";
}

function register() {
  const name = document.getElementById("name").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const color = document.getElementById("color").value;

  setCookie("name", name);
  setCookie("gender", gender);
  setCookie("color", color);

  window.location.href = "profile.html";
}
