const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function msjPersonalizado(mensaje) {
    if (typeof mensaje === "string"){
        return logger.error(mensaje)
    } else {
        throw new Error("El mensaje debe ser una cadena de texto")
    }
}

try {
    // msjPersonalizado("Este es un mensaje personalizado")
    msjPersonalizado(2)
} catch(e) {
    logger.error(e.toString())
    // logger.error(e)
}
