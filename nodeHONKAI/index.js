const express = require('express');
const connectDb = require('./config/cone');
const cors = require('cors');
const app = express();

connectDb();

app.use(cors());
app.use(express.json());    
app.use("/personajes", require("./routes/personajes")); // Agrega las rutas de sensores


app.listen(4001, () => {
    console.log("Conectado en el puerto 4001");
});
