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
        //999 return error that user did not enter correct choice
        return [999,"Please enter Rock, Paper or Scissors"]
    }
}

function game(){
    //array to store scores [0]=ties, [1]=computer score [2]=player score
    let score=[0,0,0];
    //the count variable is the number of games to play.  if a user enters an incorrect value
    //the count is increased to ensure  5 games are played
    let count=5;
    
    //loop to play 5 games 
    for (var i = 0; i < count; i++) {
        let playerSelection=prompt("Take a shot, Rock, Paper, Scissor? ");
        let computerSelection=computerPlay();
        let result=playRound(playerSelection,computerSelection);
        console.log(result[1]);
        if (result[0]!=999){
            score[result[0]]++;
        } else{count++;}
    }
    if (score[2]>score[1]){
            console.log("You Win!: You: " + score[2]+" Computer: "+ score[1]+ " Ties: "+ score[0] );
    } else if (score[1]>score[2]){
        console.log("You Loose!: You: " + score[2]+" Computer: "+ score[1]+ " Ties: "+ score[0] );
    } else{
        console.log("Tie!: You: " + score[2]+" Computer: "+ score[1]+ " Ties: "+ score[0] );
    }
}
