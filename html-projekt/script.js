const actualNumber = 194;
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", checkGuess);

function checkGuess() {
  const userInput = parseInt(document.getElementById("userGuess").value);
  const result = document.getElementById("result");

  if (isNaN(userInput)) {
    result.textContent = "Bitte gib eine Zahl ein!";
    return;
  }


  if (userInput === actualNumber) {
    result.textContent = "Wow! Genau richtig!";
  } else if (Math.abs(userInput - actualNumber) <= 5) {
    result.textContent = `Sehr nah dran! Es sind tatsächlich ${actualNumber} Minuten.`;
  } else if (userInput < actualNumber) {
    result.textContent = "Zu niedrig! Versuch es noch einmal.";
  } else {
    result.textContent = "Zu hoch! Versuch es noch einmal.";
  }
}
