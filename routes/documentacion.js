
'use strict'

const
    express = require('express'),
    //AlbumController = require('../controllers/album'),
    documentacion = express.Router()

documentacion
    .get('/', (req, res) => res.send('Hola Mundo desde la Documentacion..!') )
    .post('/', (req, res) => res.send('Hola Mundo desde la Documentacion..!') )
    .put('/', (req, res) => res.send('Hola Mundo desde la Documentacion..!') )
    .delete('/', (req, res) => res.send('Hola Mundo desde la Documentacion..!') )

module.exports = documentacion