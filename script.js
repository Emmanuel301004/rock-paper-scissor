let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const playGame=(userChoice) => {
    console.log("userChoice = ",userChoice);
}
choices.forEach((choice) => {
        choice.addEventListener("click", () => {
const userChoice = choice.getAttribute("id");
             playGame(userChoice);
    });  
});