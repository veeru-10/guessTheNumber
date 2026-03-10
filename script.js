const check = document.getElementById("check");
const ans = document.getElementById("answer");
const score = document.getElementById("score");
let number = Math.trunc(Math.random() * 20) + 1;
const value = document.getElementById("value");
const defaultHighScore = document.getElementById("highscore");
const again = document.getElementById("again");
let chances = 20
let highScore = 0;
score.innerHTML = chances;
defaultHighScore.innerHTML = highScore;

check.addEventListener("click", function()  {
  const guess = Number(document.getElementById("guess").value);
  if(guess === number) {
    document.body.style.backgroundColor = "green";
    value.innerHTML = number;
    ans.innerHTML = "correct Answer";
    if(chances > highScore) highScore = chances;
    defaultHighScore.innerHTML = highScore;
    check.disabled = true; // Prevent further guesses
    check.style.cursor = "block";
  }else if(guess < number) {
    ans.innerHTML = `${guess} is Less than actual Number`;
    if(chances > 0) chances--;
    score.innerHTML = chances;
  }else {
    ans.innerHTML = `${guess} is greater than actual Number`;
    if(chances > 0) chances--;
    score.innerHTML = chances;
  }
})

again.addEventListener("click", function() {
  chances = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  score.innerHTML = chances;
  document.body.style.backgroundColor = "#222";
  ans.innerHTML = "start guessing";
  value.innerHTML = "?";
  document.getElementById("guess").value = "";
  check.disabled = false; // Re-enable check button
})

