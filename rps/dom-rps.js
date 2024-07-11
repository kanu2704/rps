let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

updateScoreElement();///

function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';
    if(playerMove===computerMove){
        result="tied";
        score.ties+=1;
    }
    else if(playerMove==='rock' && computerMove!=='paper'){
        result='you win';
        score.wins+=1;
    }
    else if(playerMove==='paper' && computerMove!=='scissors'){
        result='you win';
        score.wins+=1;
    }
    else if(playerMove==='scissors' && computerMove!=='rock'){
        result='you win';
        score.wins+=1;
    }
    else{
        result='you lose';
        score.losses+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateResultElement(result);
    updateMoveElement(computerMove,playerMove);
    updateScoreElement();
    
}
function updateScoreElement(){
    document.querySelector('.j-score').innerHTML=`wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
}
function updateResultElement(result){
    document.querySelector('.j-result').innerHTML=result;
}
function updateMoveElement(computerMove,playerMove){
    document.querySelector('.j-moves').innerHTML=`You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}
function updateFinalWinner(wins,losses){
    console.log(wins);
    console.log(losses);
    let winner='';
    if(wins>losses){
        winner='you';
    }else if(wins<losses){
        winner='computer';
    }else{
        winner='no one';
    }
    document.querySelector('.final-winner').innerHTML=`final winner at the end of this round: ${winner}`;
}

function pickComputerMove(){
    const randomNumber=Math.random();
    let computerMove='';
    if(randomNumber>=0 && randomNumber < 1/3){
        computerMove='rock';}
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
    }
    else{
        computerMove='scissors';   
    } 
    console.log(computerMove);
    return computerMove;
}