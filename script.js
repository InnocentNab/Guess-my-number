'use strict';
let SecretNumber = Math.trunc(Math.random()*20) + 1;
let score = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);

   //When there is no input
if(!guess){
   document.querySelector('.message').textContent = '⛔ No SecretNumber';

   //When player wins
}else if(guess === SecretNumber){
   document.querySelector('.message').textContent = '🥳 Correct Number';
   document.querySelector('body').style.backgroundColor = '#60b347';
   
document.querySelector('.number').textContent = SecretNumber;
   document.querySelector('.number').style.width='30rem';
   // if(score > highscore){
   //    highscore = score;
   //    document.querySelector('.highscore').textContent = highscore;
   // }
   highscore+=5;
   document.querySelector('.highscore').textContent = highscore;
  
   //when guess is wrong
} else if(guess!==SecretNumber){
   if(score > 1){ 
      document.querySelector('.message').textContent =guess>SecretNumber ?'📈 Too High':'📈 Too Low';
  score--;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#FF0000';
} else{
  document.querySelector('.message').textContent = ' 💥 Game Over';
  document.querySelector('body').style.backgroundColor = '#FF0000';
  document.querySelector('.score').textContent = 0;
}
}
//When  guess is high
//  else if(guess> SecretNumber){
//    if(score > 1){ 
//        document.querySelector('.message').textContent = '📈 Too High';
//    score--;
//    document.querySelector('.score').textContent = score;
//    document.querySelector('body').style.backgroundColor = '#FF0000';
// } else{
//    document.querySelector('.message').textContent = ' 💥 Game Over';
//    document.querySelector('body').style.backgroundColor = '#FF0000';
//    document.querySelector('.score').textContent = 0;
// }
// }
// //When  guess is low
// else if(guess < SecretNumber){
//    if(score > 1){ 
//       document.querySelector('.message').textContent = '📈 Too Low';
//   score--;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#FF0000';
// } else{
//   document.querySelector('.message').textContent = ' 💥 Game Over';
//   document.querySelector('body').style.backgroundColor = '#FF0000';
//   document.querySelector('.score').textContent = 0;
// }
// }
});

document.querySelector('.again').addEventListener('click', function(){
   SecretNumber = Math.trunc(Math.random()*20) + 1;
   score = 0;
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.score').textContent = score; 
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width='15rem';
})
