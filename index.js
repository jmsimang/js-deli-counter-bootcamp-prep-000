function takeANumber(line, name) {
  line.push(name)
  var lineNumber = line.length
  return `Welcome, ${name}. You are number ${lineNumber} in line.`
}

function nowServing(line) {
  if (line.length == 0)
    return "There is nobody waiting to be served!"
  var customer = ""
  customer += line[0]
  line.shift()
  return `Currently serving ${customer}.`
}

function currentLine(line) {
  if (line.length == 0)
    return "The line is currently empty."
  var message = "The line is currently"
  for (let i = 1; i<=line.length; i++) {
    message += `${i}. ${line[i]}`
  }
  return message
}