const score={
    Wins:0,
    Losses:0,
    Ties:0
};

function determineComputerMove(){
    const num=Math.random();
    if(num>=0 && num<1/3)return 'Rock';
    if(num>1/3 && num<2/3)return 'Paper';
    return 'Scissors';
}

function displayResult(result){
    const pEle=document.querySelector('.result-string');
    pEle.innerHTML=`It is a ${result}`;
}

function showMove(playerMove,computerMove){
    const moveEle=document.querySelector('.moves-string');
    moveEle.innerHTML=`You: <img class="move-icon" src="images/${playerMove}-emoji.png" alt=""> , Computer: <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">`;
}

function showScore(){
    const scoreEle=document.querySelector('.score-string');
    scoreEle.innerHTML=`Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`;
}

function updateScore(result){
    if(result==='Win')score.Wins++;
    else if(result==='Loss')score.Losses++;
    else score.Ties++;
    showScore();
}

function resetScore(){
    score.Wins=0;
    score.Losses=0;
    score.Ties=0;
    showScore();
}

function playGame(playerMove){
    const computerMove=determineComputerMove();
    let result='';
    if(playerMove==='Rock'){
        if(computerMove==='Rock')result='Tie';
        else if(computerMove==='Paper')result='Loss';
        else result='Win';
    }
    else if(playerMove==='Paper'){
        if(computerMove==='Rock')result='Win';
        else if(computerMove==='Paper')result='Tie';
        else result='Loss';
    }
    else{
        if(computerMove==='Rock')result='Loss';
        else if(computerMove==='Paper')result='Win';
        else result='Tie';
    }
    showMove(playerMove,computerMove);
    displayResult(result);
    updateScore(result);
}

let isAutoPlaying=false;
let intervalId;
function autoPlay(){
    const buttonEle=document.querySelector('.autoplay-btn');
    if(!isAutoPlaying){
        intervalId=setInterval(function(){
            const playerMove=determineComputerMove();
            playGame(playerMove);
        },1250);
        isAutoPlaying=true;
        buttonEle.innerHTML='Stop!';
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying=false;
        buttonEle.innerHTML='Auto Play!';
    }
}