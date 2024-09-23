
let score =JSON.parse(localStorage.getItem('score')) || {
    wins :0,
    losses : 0,
    ties :0
 }

 updateScore()


function pickComputerMove() {
 let computerMove = "";
 const randomNumber = Math.random();

 if (randomNumber >= 0 && randomNumber < 1 / 3) {
   computerMove = "rock";
 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
   computerMove = "paper";
 } else {
   computerMove = "scissors";
 }

 return computerMove;
}

function playerGame(playerMove)
{
 const computerMove=pickComputerMove();
 let result='';
 if(playerMove==='rock')
 {
   if(computerMove === playerMove)
   {
     result='Tie';
   }
   else if( computerMove === 'paper'){
     result='You Lose';
   }else
   {
   result='You Win';
   }

 }else if (playerMove === 'paper')
 {
   
   if(computerMove === 'rock')
   {
     result='You Win';
   }
   else if( computerMove === 'paper'){
     result='Tie';
   }else
   {
   result='You Lose';
   }

 
 }else{
   
   if(computerMove === 'rock')
   {
    result='You Lose';
    }
   else if( computerMove === 'paper'){
     result='You Win';
   }else
   {
   result='Tie';
   }
 }

 if( result === 'You Win')
 score.wins+=1;
 else if( result === 'You Lose')
 score.losses+=1;
 else
 score.ties+=1;

 localStorage.setItem('score', JSON.stringify(score));
 updateScore();

 document.querySelector('.js-result').innerHTML=result;

 document.querySelector('.js-moves').innerHTML= ` You 
<img src="images/${playerMove}-emoji.png" class="move-icon" alt="" srcset="">
<img src="images/${computerMove}-emoji.png" class="move-icon" alt="" srcset="">
Computer`;
 

; 
 alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result} 
 Wins: ${score.wins}, Losses : ${score.losses}. Ties: ${score.ties}`);

}
function updateScore(){
document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses : ${score.losses}. Ties: ${score.ties}`
}