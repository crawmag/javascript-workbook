"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = "";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

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

function generateHint(solution, guess) {
  // your code here
  let sArray = solution.split("");
  let guessArray = guess.split("");
  let correctLettersLocations = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === guessArray[i]) {
      correctLettersLocations++;
      sArray[i] = null;
    }
  }
  let correctLetters = 0;
  for (let j = 0; j < sArray.length; j++) {
    let target = guessArray.indexOf([sArray[j]]);
    if (target > -1) {
      correctLetters++;
      sArray[j] = null;
    }
  }
  return `${correctLettersLocations}-${correctLetters}`;
}

function mastermind(guess) {
  solution = "abcd"; // Comment this out to generate a random solution
  // your code here
  if (board.length >= 10) {
    console.log(`You ran out of guesses! The solution was: ${solution}`);
  } else if (guess != solution) {
    let hint = generateHint(solution, guess);
    board.push(hint);
  } else {
    return "You guessed it!";
  }
}

function getPrompt() {
  rl.question("guess: ", guess => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  generateSolution();
  getPrompt();
}
