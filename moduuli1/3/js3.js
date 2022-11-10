const number1 = parseInt(prompt("give integer"))
const number2 = parseInt(prompt("give integer"))
const number3 = parseInt(prompt("give integer"))

document.querySelector("#sum").innerHTML = `sum = ${number1 + number2 + number3}`;
document.querySelector("#product").innerHTML = `product = ${number1 * number2 * number3}`;
document.querySelector("#average").innerHTML = `avarage = ${(number1 + number2 + number3)/3}`;