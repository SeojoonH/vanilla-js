const body = document.querySelector("body");
const title = document.querySelector("body h1");

body.style.color = "white";

function handleResize() {
  const size = window.innerWidth;
  if (size >= 1000) {
    body.style.backgroundColor = "yellow";
  } else if (size < 1000 && size > 700) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "deepskyblue";
  }
}

window.addEventListener("resize", handleResize);
