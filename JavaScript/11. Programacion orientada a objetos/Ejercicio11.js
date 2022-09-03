class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = ['JavaScript', 'HTML', 'CSS']
    }

    obtenDatos() {
        console.log(`Nombre del estudiante: ${this.nombre}.`)
        console.log(`Asignaturas inscritas: ${this.asignaturas}`)

    }
}

const estudiante = new Estudiante("Juan")
estudiante.obtenDatos()


