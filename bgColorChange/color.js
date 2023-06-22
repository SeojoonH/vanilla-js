const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");

function randBgColor() {
  const bgColor01 = colors[Math.floor(Math.random() * colors.length)];
  const bgColor02 = colors[Math.floor(Math.random() * colors.length)];

  if (bgColor01 === bgColor02) {
    return randBgColor();
    // 두 컬러가 동일할 경우, 재귀함수를 사용해 다시 다른 컬러로 배치하도록 설정
  } else {
    document.body.style.background = `linear-gradient(to left, ${bgColor01}, ${bgColor02})`;
  }
}

btn.addEventListener("click", randBgColor);
