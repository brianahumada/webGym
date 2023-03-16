document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.background = "#eca023";
}

function mouseOut() {
  document.getElementById("demo").style.background = "black";
}


