let userChoice;
let computerChoice;

const getUserChoice = (userInput) => {
   userInput = prompt('Choose rock, paper or scissors');
   userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      userChoice = userInput;
      return userChoice;
   } else {
      alert('Make correct choice!');
      // как вернуть опять userInput prompt?
   }
}
console.log(`User choice: ${getUserChoice()}`);
// console.log (userChoice);

const getComputerChoice = () => {
   let numberRandom = Math.floor(Math.random() * 3);
   // console.log(computerChoice); покажет случайное число
   if (numberRandom === 0) {
      computerChoice = 'rock';
   } else if (numberRandom === 1) {
      computerChoice = 'paper';
   } else {
      computerChoice = 'scissors';
   }
   return computerChoice;
}
console.log(`Computer choice: ${getComputerChoice()}`);
// console.log (computerChoice);


function determineWinner(userChoice, computerChoice) {
   let winner;
   if (userChoice === computerChoice) {
      winner = 'It\'s a draw';
   } else if ((userChoice === 'rock' && computerChoice === "scissors") || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice == 'paper' && computerChoice === 'rock')) {
      winner = 'user';
   } else if ((userChoice === 'rock' && computerChoice === "paper") || (userChoice === 'scissors' && computerChoice === 'rock') || (userChoice == 'paper' && computerChoice === 'scissors')) {
      winner = 'computer';
   } else if (userChoice === 'bomb' && computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
      winner = 'user';
   }
   console.log(`The winner is: ${winner}`);
}
console.log(`The winner : ${determineWinner(userChoice, computerChoice)}`);




// function playGame() {
//   let resultGame = determineWinner(userInput,computerChoice);
// //   console.log(`User: ${userChoice}`);
// //   console.log(`Computer: ${computerChoice}`);
// //   console.log(`Winner is: ${resultGame}`);
// getUserChoice();
// getComputerChoice();
// determineWinner(userInput, computerInput);

// }
// playGame();






