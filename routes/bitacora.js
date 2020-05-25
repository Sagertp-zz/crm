
'use strict'

const
    express = require('express'),
    bitacoraController = require('../controllers/bitacora.js'),
    bitacora = express.Router()

bitacora
    .get('/', bitacoraController.getBitacora)
    //.post('/bitacora', console.log('Hola Mundo desde la Bitacora POST..!'))
    //.put('/bitacora', console.log('Hola Mundo desde la Bitacora PUT..!'))
    //.delete('/bitacora', console.log('Hola Mundo desde la Bitacora DELETE..!'))

module.exports = bitacora