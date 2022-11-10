const name = prompt("Whats your name? ")
const number = Math.floor(Math.random()*4)+1;

console.log(number)
if (number === 1){
  document.querySelector("#olet").innerHTML = `${name}, you are Gryffindor`;
}
else if (number === 2){
  document.querySelector("#olet").innerHTML = `${name}, you are Slytherin`;
}
else if (number === 3){
  document.querySelector("#olet").innerHTML = `${name}, you are Hufflepuff`;
}
else {
  document.querySelector("#olet").innerHTML = `${name}, you are Ravenclaw`;
}