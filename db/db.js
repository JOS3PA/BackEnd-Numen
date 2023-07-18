const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('base de datos conectada!')
        // RECORDAR! con nodemode funciona mas rápido!  la PC y la TERMINAL! puedo ir probando sin que haga falta ir levantando el servidor a cada rato!!
    } catch {
        console.log('no se pudo conectar con la base de datos')
    }
} 

module.exports = {connect}
