const nombre = "Juan"
const apellido = "Alvarez"

const nombre_apellido = {
    nombre: nombre,
    apellido: apellido
}

localStorage.setItem("local-storage", JSON.stringify(nombre_apellido))

sessionStorage.setItem("session-storage", JSON.stringify(nombre_apellido))
today = new Date()
expiry = 5 // In minutes
expire = new Date(today.getTime() + expiry*60000)
document.cookie = "cookieStorage=" + JSON.stringify(nombre_apellido) +";expires="+ expire
