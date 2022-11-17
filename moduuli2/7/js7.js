function rollDice(numberOfSides){
  return Math.ceil(Math.random()*numberOfSides);
}

function playDieGame(numberOfSides){
  const resultsElem = document.getElementById('results');
  const ulElem = document.createElement('ul');
  resultsElem.append(ulElem)
  let dieValue = 0;
  while (dieValue != numberOfSides){
    dieValue = rollDice(numberOfSides);
    console.log(dieValue);
    const liElem = document.createElement('li');
    liElem.innerText = 'heiton tulos ' + dieValue;
    ulElem.append(liElem)
  }
}
const dieSize = prompt('kuinka monta sivua')
playDieGame(dieSize)

