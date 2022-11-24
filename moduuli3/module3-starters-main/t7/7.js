const image = document.getElementById("trigger")
const joku = document.getElementById('target')

image.addEventListener("mouseover", function () {
    joku.src = "img/picB.jpg"
})
image.addEventListener('mouseout', function() {
    joku.src = "img/picA.jpg"
})