let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawGame = (userChoice) => {
    console.log("game was a draw");
    message.innerText = `its a draw both chose ${userChoice}`;
}

const showWinner = (useWin,userChoice,computerChoice) => {
    if (useWin) {
        userScore++;
        userScorepara.innerText= userScore;
        console.log("you win");
        message.innerText = `You win ${userChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScorepara.innerText= computerScore;
        console.log("you lose");
        message.innerText = `You lose ${userChoice} lost to ${computerChoice}`;
    }
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const computerChoice = generateComputerChoice();
    console.log("computerChoice = ", computerChoice);
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let useWin = false;
        if (userChoice === "rock") {
            useWin = computerChoice === "scissors";
        } else if (userChoice === "paper") {
            useWin = computerChoice === "rock";
        } else if (userChoice === "scissors") {
            useWin = computerChoice === "paper";
        }
        
        showWinner(useWin,userChoice,computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
