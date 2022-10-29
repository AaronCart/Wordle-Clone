function winPercentage (totalWins, totalGames){
    return Math.round((totalWins / totalGames) * 100)
  }


function copy_test(id, win, per, stre){
  var text = "STATISTICS \n Total: " + id + "\n Wins: " + win + "\n Win %: " + per + "\n Current Strea: " + stre;
  return text
}

function game(guesswordTime, guessword, currentword){
  if(guesswordTime < 6 && guessword != currentword){
    return "keep playing"
  }
  if(guessword = 6 && guessword != currentword) {
    return "Sorry, you have no more guesses! The word is " + currentword
  }
  else{
    return "Well done!"
  }
}


module.exports={
    winPercentage, copy_test, game
  }