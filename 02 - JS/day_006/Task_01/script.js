var getUsers = document.getElementById("btn");
var tbody = document.getElementById("users");
var userTable = document.getElementById("userTable");

getUsers.addEventListener("click", function () {
  if (userTable.style.display === "none") {
    userTable.style.display = "table";
    tbody.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var users = JSON.parse(xhr.responseText);

        for (var i = 0; i < users.length; i++) {
          var id = document.createElement("td");
          id.textContent = users[i].id;

          var name = document.createElement("td");
          name.textContent = users[i].name;

          var username = document.createElement("td");
          username.textContent = users[i].username;

          var email = document.createElement("td");
          email.textContent = users[i].email;

          var phone = document.createElement("td");
          phone.textContent = users[i].phone;

          var website = document.createElement("td");
          website.textContent = users[i].website;

          var action = document.createElement("td");

          var viewButton = document.createElement("button");

          viewButton.textContent = "View Details";
          viewButton.className = "view-details";

          viewButton.onclick = (function (user) {
            return function () {
              window.location.href = "details.html?id=" + user.id;
            };
          })(users[i]);

          action.append(viewButton);

          var row = document.createElement("tr");
          row.append(id, name, username, email, phone, website, action);
          tbody.append(row);
        }
      }
    };
  } else {
    userTable.style.display = "none";
  }
});
