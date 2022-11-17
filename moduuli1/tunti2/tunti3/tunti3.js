const paragraph1 = document.querySelector ('#testi1'); // selects the first p-element from the document
//const paragraph2 = document.querySelector ('#testi2'); // selects the first p-element from the document
console.log (paragraph1.innerText); // prints the text inside the p-element to the console
//console.log (paragraph2.innerText);
const p2 = document.createElement('p')
const body = document.body
body.appendChild(p2)
p2.innerHTML = 'vili on komea kaveri'