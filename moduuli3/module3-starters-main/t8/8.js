const button = document.getElementById('start')
function momo() {
  const numb1 = parseInt(document.getElementById('num1').value)
  const numb2 = parseInt(document.getElementById('num2').value)
  const valinta = document.getElementById('operation').value

  if (valinta === 'add') {
    document.getElementById('result').innerHTML = numb1 + numb2
  } else if (valinta === 'sub') {
    document.getElementById('result').innerHTML = numb1 - numb2
  } else if (valinta === 'multi') {
    document.getElementById('result').innerHTML = numb1 * numb2
  } else if (valinta === 'div') {
    document.getElementById('result').innerHTML = numb1 / numb2
  }
}
button.addEventListener('click', momo)