count = 0
koirat = []
while (count < 6){
  nimi = prompt("anna koiran nimi")
  koirat.push(nimi)
  count++
}
koirat.reverse().sort()
for (const hei of koirat){
  const lima = document.createElement('li')
  lima.textContent = hei
  document.querySelector('ul').append(lima)
}