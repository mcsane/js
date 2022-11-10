const startyear = parseInt(prompt("give start year"))
const endyear = parseInt(prompt("give end year"))

let vuodet = []

for (let i = startyear; i < endyear; i++) {
  if (i % 400 === 0) {
    vuodet.push(i);
  }
  else if (i % 100 === 0) {
  }
  else if (i % 4 === 0) {
    vuodet.push(i);
  }
  else {
  }
}

const lista = document.getElementById('kk');
for (const paa of vuodet) {
  const elementti = document.createElement('li');
  elementti.innerHTML = paa;
  lista.append(elementti);
}