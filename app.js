const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express(); 


app.use(express.json()); //me permite enviar objetos a traves de las rutas
app.use(logger('dev')); // cada consumo que se haga en el servidor lo va a mapear a traves de la consola
app.use(cors()); // habilita el cruce de info entre consultas http -- entre servidpres 


const indexRouter = require('./routers/index');
const apiRouter = require('./routers/api');
const {connect} = require('./db/db');


app.use('/', indexRouter);
app.use('/api', apiRouter);
connect();

module.exports = app 