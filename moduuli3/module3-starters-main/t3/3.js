'use strict';
const names = ['John', 'Paul', 'Jones'];
for (const hei of names){
  let p = document.createElement('li')
  p.innerHTML = hei
  document.querySelector('#target').append(p)
}
