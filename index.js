var katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}
function nowServing(name) {
  if (name.length===0) {
    return "There is nobody waiting to be served!"
  }
 else {name.shift()
 return `Currently serving ${name}.`


    }
  }
