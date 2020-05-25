
'use strict'

const
    express = require('express'),
    //AlbumController = require('../controllers/album'),
    api = express.Router()

api
    .get('/', (req, res) => res.send('Hola Mundo desde el API..!') )
    .post('/', (req, res) => res.send('Hola Mundo desde el API..!') )
    .put('/', (req, res) => res.send('Hola Mundo desde el API..!') )
    .delete('/', (req, res) => res.send('Hola Mundo desde el API..!') )

module.exports = api