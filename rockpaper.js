const  buttons=document.querySelectorAll('.btn button');
const reslte=document.getElementById("result")
const user3=document.getElementById("userscore")
const user4=document.getElementById("computerscore")
let user1=0
let user2=0

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
       const result= playRound(button.id,computerplay()   )
       console.log(result)
       reslte.textContent=result;
    })
})

function computerplay(){
    const choices=[ "rock", "paper", "scissors"];
    const randomChoice=Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        user1++;
        user3.textContent=user1
        return "You win yrr! " + playerSelection + " beats " + computerSelection;
    } else {
        user2++;
        user4.textContent=user2
        return "You lose yrr! " + computerSelection + " beats " + playerSelection;
    }
}
