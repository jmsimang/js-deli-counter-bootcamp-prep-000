function takeANumber(line, name) {
  line.push(name)
  var lineNumber = line.length
  return "Welcome, ${name}. You are number ${lineNumber} in line."
}

function nowServing(line) {
  if (line.length == 0)
    return "There is nobody waiting to be served!"
  var customer = ""
  customer += line[0]
  line.shift()
  return 'Currently serving '+customer+'.'
}

function currentLine(line) {
  
}