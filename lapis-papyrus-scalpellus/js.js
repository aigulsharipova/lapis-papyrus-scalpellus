const computer = {
  currentChoice: null
}
const player = {
  currentChoice: null
}
const choices = ["Lapis", "Papyrus", "Scalpellus"];
function computerChooses(e) {
  const numIndexComputer = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[numIndexComputer];
}
function compareChoices(e) {
  player.currentChoice = e.currentTarget.innerText
  computerChooses()
  if (computer.currentChoice === player.currentChoice) {
     document.getElementById('result').innerText = `This round is a tie! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
  } else if (computer.currentChoice === choices[0]) {
     if (player.currentChoice === choices[2]) {
        document.getElementById('result').innerText = `The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     } else {
        document.getElementById('result').innerText = `The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`
     }

  } else if (computer.currentChoice === choices[1]) {
     if (player.currentChoice === choices[0]) {
        document.getElementById('result').innerText = `The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     } else {
        document.getElementById('result').innerText = `The player wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     }
  } else if (computer.currentChoice === choices[2]) {
     if (player.currentChoice === choices[1]) {
        document.getElementById('result').innerText = `The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     } else {
        document.getElementById('result').innerText = `The player wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     }
  } else if (player.currentChoice === choices[0]) {
     if (computer.currentChoice === choices[2]) {
        document.getElementById('result').innerText = `The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`;
     } else {
        document.getElementById('result').innerText = `The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     }
  } else if (player.currentChoice === choices[1]) {
     if (computer.currentChoice === choices[0]) {
        document.getElementById('result').innerText = `The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`;
     } else {
        document.getElementById('result').innerText = `The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     }
  } else if (player.currentChoice === choices[2]) {
     if (computer.currentChoice === choices[1]) {
        document.getElementById('result').innerText = `The player wins! The player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}.`;
     } else {
        document.getElementById("results").innerText = `The computer wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`;
     }
  }
}
document.getElementById("lapis").addEventListener("click", compareChoices);
document.getElementById("papyrus").addEventListener("click", compareChoices);
document.getElementById("scalpellus").addEventListener("click", compareChoices);