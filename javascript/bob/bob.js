var Bob = function() {};

Bob.prototype._isQuestion = function(statement) {
  return statement.slice(-1) === "?";
}

Bob.prototype._isYelling = function(statement) {
  return statement.toUpperCase() === statement;
}

Bob.prototype._isSilent = function(statement) {
  return statement.trim() === "";
}

Bob.prototype.hey = function(statement) {
  if(this._isSilent(statement)) {
    return 'Fine. Be that way!';
  }
  else if(this._isYelling(statement)) {
    return 'Woah, chill out!';
  }
  else if(this._isQuestion(statement)) {
    return 'Sure.';
  }
  else {
    return 'Whatever.';
  }
};

module.exports = Bob;
