'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for (let i = 0; i < 3; i++){
  const optiot = document.createElement('option')
  optiot.value = students[i].id
  optiot.innerHTML = students[i].name
  document.querySelector('#target').appendChild(optiot)
}