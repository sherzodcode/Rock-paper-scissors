window.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice"),
    score = document.querySelector("#score"),
    modal = document.querySelector(".modal"),
    result = document.querySelector("#result"),
    restart = document.querySelector("#restart")
    scoreBoard = {
        player: 0,
        computer: 0
    };

  //Play Game

  function play(event) {
    restart.style.display = "inline-block";
    const playerChoice = event.target.id
    const computerChocie = getComputerChoice();
    const winner = getWinner(playerChoice, computerChocie)
    showWinner(winner, computerChocie)
  }

  //Get computer choice

  function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
      return "rock";
    } else if (rand <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  //Get winner

  function getWinner(p, c) {
    if (p === c) {
      return "draw";
    } else if (p === "rock") {
      if (c === "paper") {
        return "computer";
      } else {
        return "player";
      }
    } else if (p === "paper") {
      if (c === "scissors") {
        return "computer";
      } else {
        return "player";
      }
    } else if (p === "scissors") {
      if (c === "rock") {
        return "computer";
      } else {
        return "player";
      }
    }
  }

  //Show winner

  function showWinner(winner, computerChocie) {
    if (winner === "player") {
      scoreBoard.player++;
      result.innerHTML = `
                <h1 class = "text-win"> You win </h1>
                <i class="fas fa-hand-${computerChocie} fa-10x"></i>
                <p> Computer choose <strong> ${
                  computerChocie.charAt(0).toUpperCase() +
                  computerChocie.slice(1)
                } </strong></p>
            `;
    } else if (winner === "computer") {
      scoreBoard.computer++;
      result.innerHTML = `
                <h1 class="text-lose">You lose</h1>
                <i class="fas fa-hand-${computerChocie} fa-10x"></i>
                <p> Computer Chose ${
                  computerChocie.charAt(0).toUpperCase() +
                  computerChocie.slice(1)
                }</p>
            `;
    } else {
      result.innerHTML = `
                <h1>Draw</h1>
                <i class="fas fa-hand-${computerChocie} fa-10x"></i>
                <p> Computer Chose ${
                  computerChocie.charAt(0).toUpperCase() +
                  computerChocie.slice(1)
                }</p>
            `;
    }

    score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>
    `
    modal.style.display = 'block'
  }

  //Restart game

  function restartGame() {
      scoreBoard.player = 0
      scoreBoard.computer = 0
      score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>
      `
  }

  //Clear Modal

  function clearModal(event) {
    if(event.target == modal){
        modal.style.display = 'none'
    }
}

choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)
});


// Event listeners