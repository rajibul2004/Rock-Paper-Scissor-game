const buttons=document.getElementsByTagName("button");
const result_=document.getElementById("display");
const user_score=document.getElementById("user-score");
const computer_score=document.getElementById("com-score");

let userScore=0;
let computerScore=0;

const current=buttons
for(const currentButton of buttons){
    const name=currentButton.id
    currentButton.addEventListener("click",()=>{
        const result=playRound(name,computerPlay())
        result_.innerText=result;
    })
}
function computerPlay(){
    const choices=["rock","paper","scissor"];
    const random=Math.random()*choices.length;
    const randomChoice=Math.floor(random);
    return choices[randomChoice];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "It is a tie!";
    }
    else if((playerSelection==="rock" && computerSelection==="scissor")||(playerSelection==="paper" && computerSelection==="rock")||(playerSelection==="scissor"&& computerSelection==="paper")){
        userScore++;
        user_score.innerText=userScore;
        return "You win! "+playerSelection+" beats "+computerSelection;
    }
    else{
        computerScore++;
        computer_score.innerText=computerScore;
        return "You lose! "+computerSelection+" beats "+playerSelection;
    }
}