let count = 3;

function changeColor() {
  var colors = [
    "red",
    "green",
    "blue",
    // "yellow",
    "orange",
    // "purple",
    // "pink"
  ];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  swatch.style.backgroundColor = randomColor;
  label.innerText = randomColor;

  // updateTimer();
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