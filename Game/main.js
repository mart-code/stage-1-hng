const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

function initializeGame() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("colorBox").style.backgroundColor = targetColor;
  document.getElementById("colorOptions").innerHTML = "";
  colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.classList.add("color-option");
    btn.style.backgroundColor = color;
    btn.setAttribute("data-testid", "colorOption");
    btn.onclick = () => checkGuess(color);
    document.getElementById("colorOptions").appendChild(btn);
  });
  document.getElementById("gameStatus").textContent = "";
}

function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    document.getElementById("gameStatus").textContent = "Correct!";
    score++;
    document.getElementById("score").textContent = score;
    initializeGame();
  } else {
    document.getElementById("gameStatus").textContent = "Wrong! Try again.";
  }
}

document.getElementById("newGameButton").addEventListener("click", function () {
  document.getElementById("score").textContent = 0;
  initializeGame();
});

initializeGame();
