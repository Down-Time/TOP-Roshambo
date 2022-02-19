//Scripts to play rock, paper, scissor


function computerPlay(){
    // Alternative to using switch statement, used an object literal
    // this appears to be to recommended approach over using switch statements

    return {
        1:'Rock',
        2:'Paper',
        3:'Scissors'
    }[Math.floor(Math.random()*3+1)];  //Typical method for random number between 1-3
}

function playRound(playerSelection,computerSelection){
    /*
        Rules of selection
        Rock > Scissors
        Paper > Rock
        Scissor > Paper
    */
   // Rock,paper,scissors have different lenghts, so we will use the concatenated value of the player and 
   //the computer to determine who wins.
    let play= ""+playerSelection.length + computerSelection.length;
    
    //if statement to ensure user provide either Rock, paper or scissors, otherwise return a message
    if ((playerSelection.toUpperCase()=="ROCK") || (playerSelection.toUpperCase()=="PAPER") || (playerSelection.toUpperCase()=="SCISSORS")){    
        //inplace of a switch, I am using an object literal
        //0=tie, 1=loose, 2=win - these values will be used to keep score
        return {
        '44':[0,'Tie!'],
        '45':[1,'You Loose! Paper beats Rock'],
        '48':[2,'You Win! Rock beats Scissors'],
        '54':[2,'You Win! Paper beats Rock'],
        '55':[0,'Tie'],
        '58':[1,'You Loose! Scissors beat Paper'],
        '84':[1,'You Loose! Rock beats Scissors'],
        '85':[2,'You Win! Scissors beat Paper'],
        '88':[0,'Tie!']
    } [play];} else {
        //999 return error that user did not enter correct choice, no longer needed becuase
        //choices are made from buttons and not typed into console 
        return [999,"Please enter Rock, Paper or Scissors"]
    }
}

function game(e){

    // display your choice
    document.querySelector('.you').textContent=`You: ${e.target.innerText}`;
    
    //remove the css select style for selected div
    const btn =document.querySelector(`.${e.target.innerText}`);
    btn.classList.remove('select');

    //player button selection
    let playerSelection=btn.innerText;
    //computer selectio
    let computerSelection=computerPlay();
    document.querySelector('.computer').textContent=`Computer: ${computerSelection}`;

    //get results of player/computer selections
    let result=playRound(playerSelection,computerSelection);
    //display results on page
    document.querySelector('.winner').textContent=result[1];
    //this probably isn't needed becuase users are selection buttons and no longer typing in selection
    if (result[0]!=999){
        score[result[0]]++;
    } else{count++;}
    
    //display score on page
    document.querySelector('.score').textContent=`You: ${score[2]} \r\n Computer: ${score[1]} \r\n Ties:  ${score[0]}`;

    for (s of score){
        if (s==5){

        }
    }
    if (score[1]==5){
        document.querySelector('.champ').textContent='COMPUTER WINS!';
        score=[0,0,0];
    }else if (score[2]==5){
        document.querySelector('.champ').textContent='YOUR WIN!';
        score=[0,0,0];  
    }else{
        document.querySelector('.champ').textContent='';
    }

}

function click(e){
    const btn =document.querySelector(`.${e.target.innerText}`);
    btn.classList.add('select');
}

//array to store scores [0]=ties, [1]=computer score [2]=player score
let score=[0,0,0];

const buttons=document.querySelectorAll('.button');

buttons.forEach(button=>button.addEventListener('mouseup',game));
buttons.forEach(button=>button.addEventListener('mousedown',click));

//testing logging
//window.addEventListener('mouseup',()=>{console.log("hello");});