function even(numerot){
  const newLista = []
  for (const paa of numerot){
    if (paa % 2 == 0)
        newLista.push(paa)
  }
  return newLista
}


const ogLista = [3, 7, 4, 2, 8, 9]
newLista =  even(ogLista)
console.log(ogLista)
console.log(newLista)