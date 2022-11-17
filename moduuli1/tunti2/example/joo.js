const numbers = [1, 2, 4, "kutonen", ['toinen', 'taulukko']];
const number2 = [8, 9, 11, 89]
number2[1] = 19;
console.log('taulukon toinen arvo', numbers[1])
number2.push('kolmomen')
console.log('numbers2', number2)
const lastItem = numbers.pop()
console.log('numers2', numbers);
console.log('lastItem', lastItem)

for (let i = 0; i<numbers.length; i++){ //pytho: i in range(len(numbers2))
  console.log('alkion', i, 'arvo on', number2[i])
}

for (const number of number2){
  console.log('alkion', 'arvo on', number)
}

//sisältääkö taulukko arvon 9
const includer0 = number2.includes(9)
console.log('oliko ysiä?', includer0)
//järjestetään
number2.sort()
console.log(number2)
