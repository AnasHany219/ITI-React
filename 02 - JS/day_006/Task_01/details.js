function fetchUserDetails() {
  var params = new URLSearchParams(document.location.search);
  var userId = params.get("id");

  if (userId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var user = JSON.parse(xhr.responseText);
        document.getElementById("userDetails").innerHTML =
          "<h1>" +
          user.name +
          "</h1>" +
          "<p><strong>ID:</strong> " +
          user.id +
          "</p>" +
          "<p><strong>Name:</strong> " +
          user.name +
          "</p>" +
          "<p><strong>Username:</strong> " +
          user.username +
          "</p>" +
          "<p><strong>Email:</strong> " +
          user.email +
          "</p>" +
          "<p><strong>Phone:</strong> " +
          user.phone +
          "</p>" +
          "<p><strong>Website:</strong> " +
          user.website +
          "</p>" +
          "<strong>Address:</strong>" +
          "<ul>" +
          "<li>" +
          "<p><strong>Street: </strong>" +
          user.address.street +
          "</p>" +
          "</li>" +
          "<li>" +
          "<p><strong>suite: </strong>" +
          user.address.suite +
          "</p>" +
          "</li>" +
          "<li>" +
          "<p><strong>City: </strong>" +
          user.address.city +
          "</p>" +
          "</li>" +
          "<li>" +
          "<p><strong>Zip Code: </strong>" +
          user.address.zipcode +
          "</p>" +
          "</li>" +
          "</ul>" +
          "<strong>Company:</strong>" +
          "<ul>" +
          "<li>" +
          "<p><strong>Name: </strong>" +
          user.company.name +
          "</p>" +
          "</li>" +
          "<li>" +
          "<p><strong>Catch Phrase: </strong>" +
          user.company.catchPhrase +
          "</p>" +
          "</li>" +
          "<li>" +
          "<p><strong>Bs: </strong>" +
          user.company.bs +
          "</p>" +
          "</li>" +
          "</ul>";
      }
    };
  }
}
