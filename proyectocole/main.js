var btn = document.getElementById("buttonflight");
var drop = document.getElementById("drop");

/*Shows the dropmenu only if the button is visible*/
btn.onclick = function() {
  if (btn.classList.contains("show")) {
    drop.classList.add("show");
  }
};

/*Hides the dropmenu when you click outside it*/
window.onclick = function(event) {
  if (!event.target.matches("#buttonflight")) {
    drop.classList.remove("show");
  }
};