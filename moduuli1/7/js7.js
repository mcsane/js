const rolls = parseInt(prompt("number of rolls"))
let sum = 0
for(let i = 1; i <= rolls; i++ ){
  let dice = Math.floor(Math.random()*6) +1
  console.log(dice)
  sum = sum + dice
}


document.querySelector('#kk').innerHTML = `Sum of dice = ${sum}`