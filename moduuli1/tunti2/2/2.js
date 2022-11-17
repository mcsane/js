let nopat = parseInt(prompt("number of dice"))
let luku = parseInt(prompt("sum of the eye number"))

let totalsum = 0;
for (let i = 0; i<10_000; i++){
  let sum = 0
  for (let j = 0; j < nopat; j++){
    sum += Math.ceil(Math.random()*6)
  }
  if (sum === luku) totalsum++
}
const prossa = ((totalsum / 10_000)*100).toFixed(2)
document.querySelector("target").textContent += ` the probability of getting ${luku} with${nopat} ${prossa}`