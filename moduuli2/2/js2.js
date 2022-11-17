let users = parseInt(prompt("kuinka monta käyttäjää"))
jarkka = []
for (let i=0; i< users; i++){
  const acco = prompt("anna nimi");
  jarkka.push(acco)

}
jarkka.sort()
for (const par of jarkka){
  const lima = document.createElement('li');
  lima.textContent = par;
  document.querySelector('ol').append(lima);
}


