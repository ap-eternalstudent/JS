const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput === 'bomb') {
      
      return userInput;
    } else {
      console.log('invalid selection');
    }
};
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
         
    }
};
  
  const determineWinner = (userChoice, computerChoice) => { 
    if(userChoice === 'bomb'){
      return "User wins";
    }
        if(userChoice === computerChoice){
          return "It's a tie!";         
       } else if(userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return "Computer has won!"
        } else {
            return "User has won!";  
        }
          } else if(userChoice === 'paper') {
            if(computerChoice === 'scissors') {
                return "Computer has won!";
            } else {
                return "User has won!";
            } 
          } else if(userChoice === 'scissors') { 
              if(computerChoice === 'rock') {
                return "Coumputer has won!";
              } else {
                return "User has won!"
              } 
          } 

};

const playGame = () => {
    const userChoice = getUserChoice('rock');
  
  
  
    	console.log("User: " + userChoice);
  
    const computerChoice = getComputerChoice();
    	console.log("Computer: " + computerChoice);
console.log(determineWinner(userChoice,computerChoice));
  
}

playGame()








  
  
  
  
