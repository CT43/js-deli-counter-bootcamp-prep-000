var katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}
function nowServing(name) {
  if (name.length===0) {
    return "There is nobody waiting to be served!"
  }
 else {
 return `Currently serving ${name.shift()}.`}
  }
function currentLine(line){
  for (let i = 1; i < line.length; i++) {
    var fullLine = []
    fullLine.push(`${i}. ${line[i]}`)
    return `The line is currently: ${fullLine.join(', ')}`
  }
}