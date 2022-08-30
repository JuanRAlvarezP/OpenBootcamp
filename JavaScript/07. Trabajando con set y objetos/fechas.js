const hoy = new Date()
const birthDate = new Date(1993, 10, 07)

const isLater = (hoy > birthDate)

const day = birthDate.getDate()
const month = birthDate.getMonth() + 1
const year = birthDate.getFullYear()
