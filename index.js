function takeANumber(line, name) {
  
}

function nowServing(line) {
  if (line.length == 0)
    return "There is nobody waiting to be served!"
  var customer = ""
  customer += line[0]
  line.shift()
  return 'Currently serving '+customer
}

function currentLine(line) {
  
}