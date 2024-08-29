const guess_Btn = document.querySelector(".guess_btn"); // This selects the first element with the class
const again_Btn = document.querySelector(".again");
const massage = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const body = document.querySelector("body");
guess_Btn.onclick = () => {
  const value_guess = guess.value;
  if (!value_guess) {
    massage.textContent = "No number!";
  } else {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    if (Number(value_guess) === secretNumber) {
      massage.textContent = "Correct Number!";
      number.textContent = secretNumber;
      number.style.width = "30rem";
      body.style.backgroundColor = "#60b347";
      score.textContent = Number(score.textContent) + 1;
    } else {
      number.textContent = secretNumber;
    }
  }
};
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
again_Btn.onclick = () => {
  score.textContent = 0;
  number.textContent = "?";
  massage.textContent = "Start guessing...";
  guess.value = "";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
};
