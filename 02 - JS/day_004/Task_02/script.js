function showAlert(type) {
  const container = document.getElementById("alertContainer");

  if (type === "success") {
    container.innerHTML =
      "<strong>Success:</strong> <p> &#10004; </p> <p>This is a success message!</p>";
    container.style.color = "#008000";
  } else if (type === "error") {
    container.innerHTML =
      "<strong>Error:</strong> <p> &#10539; </p> <p>This is an error message!</p>";
    container.style.color = "#FF0000";
  }

  container.style.display = "block";
}
