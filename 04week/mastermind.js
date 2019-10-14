'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
  // your code here
  var sArray = solution.split('');
  var guessArray = guess.split('');
  let correctLetters = 0;
  let correctLettersLocations = 0;

  for (let i = 0; i < sArray.length; i++) {
    if (guessArray[i] === sArray) {
      correctLettersLocations += 1;
      sArray[i] = null;
    }
  }
  for (let j =0; j < sArray.length; j++) {
    const tragetIndex = sArray.indexOf(guessArray[j]);
    if (tragetIndex > -1) {
      correctLettersLocations ++;
      sArray[tragetIndex] = null;
    }
  }
  return `${correctLettersLocations}-${correctLetters}`;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if (guess === solution) {
    return "You guessed it!";
  } else {
    var hint = generateHint(guess);
    var hintGuess = guess + hint;
    board.push(hintGuess);
    return hint;
  }

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
