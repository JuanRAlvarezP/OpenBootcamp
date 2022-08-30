const listaCompras = ["Leche", "Arroz", "Huevos", "Queso", "Cereal"];

listaCompras.push("Aceite de girasol")

console.log(listaCompras)

listaCompras.pop()
console.log(listaCompras)

const peliculasFavoritas = [
    {titulo: "Inception", director: "Christopher Nolan", fecha: 2010},
    {titulo: "Interestelar", director: "Christopher Nolan", fecha: 2014},
    {titulo: "Everything Everywhere All at Once", director: "Dan Kwan", fecha: 2022},
]

const despues2012 = peliculasFavoritas.filter(pelicula => pelicula.fecha >2012)
console.log(despues2012)

const directores = peliculasFavoritas.map(pelicula => pelicula.director)
console.log(directores)

const titulos = peliculasFavoritas.map(pelicula => pelicula.titulo)
console.log(titulos)

const lista_concat = directores.concat(titulos)
console.log(lista_concat)

const lista_propagacion = [...titulos, ...directores]
console.log(lista_propagacion)
