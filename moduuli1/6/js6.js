const answer = confirm("Should I calculate square root?")
console.log(answer)
if (answer === true){
  document.querySelector("#ok").innerHTML = Math.sqrt(parseFloat(prompt("give number")))
}