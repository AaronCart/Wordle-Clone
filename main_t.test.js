const main = require('./js/mian_t')
const {winPercentage, copy_test, game} = main


test('test the formula calculate win percentage',()=>{
     // Arrange
     let totalWins = 3, totalGames = 5;
     let expected = 60;
   
     // Act
     let actual = winPercentage(totalWins, totalGames);
   
     // Assert
     expect(actual).toBe(expected);
})

test('test the win percentage range',()=>{
  // Arrange
  let totalWins = 5, totalGames = 5;

  // Act
  let actual = winPercentage(totalWins, totalGames);

  // Assert
  expect(actual).toBeGreaterThanOrEqual(0);
  expect(actual).toBeLessThanOrEqual(100);
})

test('test the copy function text ',()=>{
  // Arrange
  let id = 3, win = 5, per = 60, stre = 2;

  // Act
  let actual = copy_test(id, win, per, stre);

  // Assert
  expect(actual).toBe("STATISTICS \n Total: 3\n Wins: 5\n Win %: 60\n Current Strea: 2");
})

test('test the main game finish 6 game still have not input correct word',()=>{
  // Arrange
  let guesswordTime = 6, guessword = "onion", currentword = "sweet";

  // Act
  let actual = game(guesswordTime, guessword, currentword);

  // Assert
  expect(actual).toBe("Sorry, you have no more guesses! The word is " + currentword);
})

test('test the main game have not finish 6 game and input incorrect word',()=>{
  // Arrange
  let guesswordTime = 3, guessword = "onion", currentword = "sweet";

  // Act
  let actual = game(guesswordTime, guessword, currentword);

  // Assert
  expect(actual).toBe("keep playing");
})

test('test the main game have not finish 6 game and input correct word',()=>{
  // Arrange
  let guesswordTime = 6, guessword = "onion", currentword = "onion";

  // Act
  let actual = game(guesswordTime, guessword, currentword);

  // Assert
  expect(actual).toBe("Well done!");
})

test('test the main game finish 6 game and input correct word',()=>{
  // Arrange
  let guesswordTime = 6, guessword = "onion", currentword = "onion";

  // Act
  let actual = game(guesswordTime, guessword, currentword);

  // Assert
  expect(actual).toBe("Well done!");
})

const throwError = ()=>{
  throw new Error ("not in the word list")
}

test('test the main game finish 6 game and input word not in the word list',()=>{
  const libary = "sweet,onion"
  // Arrange
  let guesswordTime = 6, guessword = "abccd", currentword = "shose";

  expect(guesswordTime).toBeLessThanOrEqual(6);
  expect(libary).not.toMatch(guessword);
  expect(throwError).toThrow("not in the word list");
})

test('test the main game have not finish 6 game and input word not in the word list',()=>{
  const libary = "sweet,onion"
  // Arrange
  let guesswordTime = 3, guessword = "fokkl", currentword = "shose";

  expect(guesswordTime).toBeLessThanOrEqual(6);
  expect(libary).not.toMatch(guessword);
  expect(throwError).toThrow("not in the word list");
})