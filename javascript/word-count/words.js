'use strict';
var Words = function(words) {
  this.words = words;

  this.count = countWordsIn(words);
}

function countWordsIn(string) {
  return countWords(splitToWords(string.toLowerCase()));
}

function countWords(words) {
  var wordCounts = {};
  words.forEach(function(word) {
    wordCounts[word] || (wordCounts[word] = 0);
    wordCounts[word] += 1;
  });
  return wordCounts;
}

function splitToWords(string) {
  return string.replace(/[^\w+]/g, ' ').trim().split(/\s+/);
}

module.exports = Words;
