'use strict';

var Anagram = function(word) {
  this.word = word;
};

Anagram.prototype.match = function(words) {
  var validAnagrams = [];
  var anagram = this;
  words.forEach(function(potential) {
    if(validAnagram(anagram.word, potential)) {
      validAnagrams.push(potential);
    }
  });
  return validAnagrams;
}

function validAnagram(tester, testee) {
  var testeeLetters = testee.toLowerCase().split('');
  var testerLetters = tester.toLowerCase().split('');
  var sameWord = testeeLetters.join('') === testerLetters.join('');
  var isAnagram = testeeLetters.sort().join('') === testerLetters.sort().join('');
  return !sameWord && isAnagram;
}

module.exports = Anagram;
