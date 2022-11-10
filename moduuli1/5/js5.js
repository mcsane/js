let year = parseInt(prompt("enter some year"));
if (year % 400 === 0){
  document.querySelector("#nn").innerHTML = `${year} is leap year`;
}
else if (year % 100 === 0){
  document.querySelector("#nn").innerHTML = `${year} is not leap year`;
}
else if (year % 4 === 0){
  document.querySelector("#nn").innerHTML = `${year} is leap year`;
}
else {
  document.querySelector("#nn").innerHTML = `${year} is not leap year`;
}