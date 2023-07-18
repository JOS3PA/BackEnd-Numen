const express = require('express')
const router = express.Router()
const apiControler = require('../controlers/apiControler')
const {validarID} = require('../middlewares/validarID')
const checks = require('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarChecks')

const axios = require('axios');


 
router.get('/ver', apiControler.ver);
router.get('/buscar/id/:id', validarID, apiControler.buscarSegunID);
router.post('/crear',checks, validarChecks, apiControler.crear); 
router.put('/editar/id/:id',validarID, checks, validarChecks, apiControler.editar);
router.delete('/eliminar/id/:id', validarID, apiControler.eliminar);


router.get('/external',apiControler.external)

module.exports = router 
