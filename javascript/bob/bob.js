"use strict";
var Bob = function() {};

function isQuestion(statement) {
  return statement.slice(-1) === "?";
}

function isYelling(statement) {
  return statement.toUpperCase() === statement;
}

function isSilent(statement) {
  return statement.trim() === "";
}

Bob.prototype.hey = function(statement) {
  if(isSilent(statement)) {
    return 'Fine. Be that way!';
  }
  else if(isYelling(statement)) {
    return 'Woah, chill out!';
  }
  else if(isQuestion(statement)) {
    return 'Sure.';
  }
  else {
    return 'Whatever.';
  }
};

module.exports = Bob;
