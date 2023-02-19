function lines() {
  line1 = document.getElementById("horizontal-line");

  setTimeout(function () {
    line1.style.visibility = "visible";
  }, 500);

  setTimeout(function () {
    document.getElementById("Contact").style.backgroundColor = "transparent";
  }, 1500);

  document.getElementById("size").addEventListener("click", size);

  function size() {
    alert(window.outerWidth + " x " + window.outerHeight);
  }
}
