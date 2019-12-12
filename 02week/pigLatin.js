"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  // newWord trims the whitespace and makes it lowercase
  let newWord = word.trim().toLowerCase();
  let vowels = "aeiou";

  //this function is used to locate the vowel if there is one
  const vowelIsDetected = newWord => {
    for (let i = 0; i < newWord.length; i++) {
      if (vowels.indexOf(newWord[i]) !== -1) {
        return i;
      }
    }
  };
  let firstVowel = vowelIsDetected(newWord);
  //the if statement breaks the word apart at the vowel and adds ay or yay depending on where the vowel is located
  if (firstVowel > 0) {
    return newWord.slice(firstVowel) + newWord.slice(0, firstVowel) + "ay";
  } else if (firstVowel === 0) {
    return newWord + "yay";
  } else {
    return newWord + "ay";
  }
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
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
  getPrompt();
}
