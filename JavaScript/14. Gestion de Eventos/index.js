const boton = document.querySelector("#boton")

boton.addEventListener("click", () => {
    alert("Has hecho click en el boton")
})

$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})
