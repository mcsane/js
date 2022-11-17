const lista = []
while (true){
  let count = parseInt(prompt('anna numero'))
  if (count === 0)
    break
  lista.push(count)
}
lista.sort(function(a, b){
  return a - b;
})
console.log(lista)