let start = parseInt(prompt("start"));
let end = parseInt(prompt("end"));

for(let i = start; i <= end; i++){
  if (0===i % 4 && ( 0 !== i & 100||0===i%400)){
    const node = document.createElement("li");
    node.innerText = i;
    document.getElementById("target").appendChild(node)
  }
}