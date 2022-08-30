const datos_personales = {
    nombre: "Juan",
    apellido: "Alvarez",
    edad: 28,
    altura: 1.73,
    isDeveloper: true
}

const edad = datos_personales.edad

const lista = [
    {...datos_personales},
    {
        nombre: "Santiago",
        apellido: "Galeano",
        edad: 29,
        altura: 1.73,
        isDeveloper: false
    },
    {
        nombre: "Giulia",
        apellido: "Rossi",
        edad: 27,
        altura: 1.73,
        isDeveloper: false
    }
]

lista.sort((a,b) => b.edad - a.edad)
console.log(lista)
