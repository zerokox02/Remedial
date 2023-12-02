// Aqui es la conexion ahora si con la base de datos, en LINUX debes estar activo el mongo con el siguiente comando: sudo systemctl start  mongod
const mongoose = require("mongoose");
DB_MONGO = "mongodb://localhost:27017/Honkai" //Conexion con la base de datos
const connectDb = async () => {
  try {
    await mongoose.connect(DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de Datos Conectada"); // Conexion correcta
  } catch (error) {
    console.log(error);
    console.log("Base de Datos no Conectado"); // Conexion fallida, checa el codigo o el puerto
    process.exit(1);
  }
};

module.exports = connectDb;