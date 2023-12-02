
const Personaje = require('../models/personajes');

// Controlador para agregar un nuevo personaje
exports.addPersonaje = async (req, res) => {
  try {
    // Crear una nueva instancia de Personaje con los datos del cuerpo de la solicitud
    const nuevoPersonaje = new Personaje(req.body);
    
    // Guardar el nuevo personaje en la base de datos
    await nuevoPersonaje.save();

    // Enviar la respuesta con el nuevo personaje creado
    res.status(201).json(nuevoPersonaje);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al agregar el personaje.');
  }
};

// Controlador para obtener todos los personajes
exports.getPersonajes = async (req, res) => {
  try {
    // Obtener todos los personajes de la base de datos
    const personajes = await Personaje.find();
    
    // Enviar la respuesta con la lista de personajes
    res.status(200).json(personajes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al obtener los personajes.');
  }
};

// Controlador para obtener un personaje por su ID
exports.getPersonajeById = async (req, res) => {
  try {
    // Obtener el personaje por su ID de la base de datos
    const personaje = await Personaje.findById(req.params.id);
    
    // Si no se encuentra el personaje, devolver un mensaje de error
    if (!personaje) {
      return res.status(404).send('Personaje no encontrado.');
    }

    // Enviar la respuesta con el personaje encontrado
    res.status(200).json(personaje);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al obtener el personaje.');
  }
};

// Controlador para actualizar un personaje por su ID
exports.updatePersonajeById = async (req, res) => {
  try {
    // Actualizar el personaje por su ID con los datos proporcionados en el cuerpo de la solicitud
    const personajeActualizado = await Personaje.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    // Si no se encuentra el personaje, devolver un mensaje de error
    if (!personajeActualizado) {
      return res.status(404).send('Personaje no encontrado.');
    }

    // Enviar la respuesta con el personaje actualizado
    res.status(200).json(personajeActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al actualizar el personaje.');
  }
};

// Controlador para eliminar un personaje por su ID
exports.deletePersonajeById = async (req, res) => {
  try {
    // Eliminar el personaje por su ID de la base de datos
    const personajeEliminado = await Personaje.findByIdAndDelete(req.params.id);
    
    // Si no se encuentra el personaje, devolver un mensaje de error
    if (!personajeEliminado) {
      return res.status(404).send('Personaje no encontrado.');
    }

    // Enviar la respuesta con un mensaje indicando que el personaje ha sido eliminado
    res.status(200).json({ message: 'Personaje eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al eliminar el personaje.');
  }
};
