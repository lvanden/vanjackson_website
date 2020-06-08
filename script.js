
 
 function toggleMode() {
  var x = document.getElementById("toggle-light")
  var y = document.getElementById("toggle-dark")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  var element = document.body;
  element.classList.toggle("dark-mode");
}

