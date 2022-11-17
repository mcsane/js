const numerot = []
while (true){
  let count = parseInt(prompt('anna numero'))
  if (count in numerot)
    break
  else
    numerot.push(count)
}
console.log('Olet syöttänyt jo tämän numeron')
console.log(numerot)