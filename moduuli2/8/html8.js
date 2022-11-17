function concat(nimi){
  let lista = ""
  for (const maa of nimi){
    lista += maa
  }
  return lista
}


const array = ['Johnny', 'DeeDee', 'Joey', 'Marky']
const lista = concat(array)
document.querySelector('h1').textContent = lista