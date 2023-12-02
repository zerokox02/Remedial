const express = require('express');
const router = express.Router();
const personajesCont = require('../controllers/personajes'); // Controlador para los personajes

// Define las rutas utilizando las funciones del controlador de los personajes
router.post('/', personajesCont.addPersonaje);
router.get('/', personajesCont.getPersonajes);
router.get('/:id', personajesCont.getPersonajeById);
router.put('/:id', personajesCont.updatePersonajeById);
router.delete('/:id', personajesCont.deletePersonajeById);

module.exports = router;
