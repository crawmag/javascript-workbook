"use strict";

// const assert = require("assert");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function pigLatin(word) {
  // Your code here
  let newWord = word.trim().toLowerCase();
  let vowels = "aeiou";

  function vowelIsDetected(newWord) {
    for (let i = 0; i < newWord.length; i++) {
      if (vowels.indexOf(newWord[i]) !== -1) {
        return i;
      }
    }
  }

  let firstVowel = vowelIsDetected(newWord);
  if (firstVowel > 0) {
    return newWord.slice(firstVowel) + newWord.slice(0, firstVowel) + "ay";
  } else {
    return newWord + "yay";
  }
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

function handleTranslate() {
  console.log("I am inside handleTranslate!");
  //step 1 get input value from input box
  var inputBox = document.getElementById("plaintext");
  var englishWord = inputBox.value;
  console.log("english word", englishWord);

  //step 2 call piglatin function with this value
  var pigLatinWord = pigLatin(englishWord);
  console.log("pig latin word", pigLatinWord);

  //step 3 write the result tha the piglatin function returns to the screen
  var spanElement = document.getElementById("pigLatinText");
  console.log("span element", spanElement);
  spanElement.innerHTML = pigLatinWord;
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  //getPrompt();
}
