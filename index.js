var katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}
function nowServing(name) {
  if (katzDeliLine.length>0) {
    return name
    katzDeliLine.shift(name)}
    else 
    return "There is nobody waiting to be served!"
    
  }
