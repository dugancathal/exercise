var Bob = function() {};

String.prototype.isQuestion = function() {
  return this.indexOf('?', this.length - 1) !== -1;
}

String.prototype.isYelling = function() {
  return this.toUpperCase() == this; 
}

String.prototype.isSilent = function() {
  return this.trim().length === 0;
}

Bob.prototype.hey = function(statement) {
  if(statement.isSilent()) {
    return 'Fine. Be that way!';
  }
  else if(statement.isYelling()) {
    return 'Woah, chill out!';
  }
  else if(statement.isQuestion()) {
    return 'Sure.';
  }
  else {
    return 'Whatever.';
  }
};

module.exports = Bob;
