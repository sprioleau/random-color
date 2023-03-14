let count = 3;

function changeColor() {
  var colors = [
    "red",
    "green",
    "blue",
    "orange",
    // "yellow",
    // "purple",
    // "pink"
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // ensure that the new color is different from the previous one
  if (randomColor === swatch.style.backgroundColor) {
    changeColor();
    return;
  }

  swatch.style.backgroundColor = randomColor;
  label.innerText = randomColor;
}

function updateTimer() {
  if (count === 0) {
    count = 3;
    timer.innerText = "Go!";
    changeColor();
    return;
  };
  timer.innerText = count;
  count--;
}

setInterval(updateTimer, 1000); // 3000 milliseconds = 3 seconds

changeColor();