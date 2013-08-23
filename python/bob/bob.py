import re
class Bob:
  def hey(self, message):
    if not message:
      return 'Fine. Be that way.'
    if re.match('^\s*$', message):
      return 'Fine. Be that way.'
    elif message.upper() == message:
      return 'Woah, chill out!'
    elif message[-1] == '?':
      return 'Sure.'
    else:
      return 'Whatever.'
