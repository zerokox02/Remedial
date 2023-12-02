const mongoose = require('mongoose');
const personajeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    elemento: {
        type: String,
        required: true
    },
    via: {
        type: String,
        required: true
    }
});

const Personaje = mongoose.model('Personajes', personajeSchema);
module.exports = Personaje;
