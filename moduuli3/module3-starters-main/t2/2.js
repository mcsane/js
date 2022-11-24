const div = document.querySelector('#target');
const i = document.createElement('li')
i.innerHTML = "First item";
const k = document.createElement('li')
k.innerHTML = "second item";
const e = document.createElement('li')
e.innerHTML = "third item";

div.append(i, k, e)
document.getElementsByTagName('li')[1].classList.add("my-list")
