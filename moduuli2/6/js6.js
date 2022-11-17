function playDieGame(numberOfSides){
  const resultsElem = document.getElementById('results');
  const ulElem = document.createElement('ul');
  resultsElem.append(ulElem)
  let dieValue = 0;
  while (dieValue != 6){
    dieValue = Math.ceil(Math.random()*6);
    console.log(dieValue);
    const liElem = document.createElement('li');
    liElem.innerText = 'heiton tulos ' + dieValue;
    ulElem.append(liElem)
  }
}

playDieGame()