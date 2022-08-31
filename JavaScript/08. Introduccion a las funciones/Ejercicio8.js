function siempreTrue () {
    return true
}

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* idPar() {
    let id = 0;
    while (true) {
        yield id += 2
    }
}

let gen = idPar()
console.log(gen.next())
console.log(gen.next())
