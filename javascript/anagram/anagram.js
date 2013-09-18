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
  var sameWord = canonicalizedWord(tester) == canonicalizedWord(testee);
  var isAnagram = sortedWord(tester) === sortedWord(testee);
  return !sameWord && isAnagram;
}

function canonicalizedWord(word) {
  return word.toLowerCase();
}

function sortedWord(word) {
  return canonicalizedWord(word).split('').sort().join('');
}

module.exports = Anagram;
