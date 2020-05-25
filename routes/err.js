
'use strict'

const  
    express = require('express'),
    //AlbumController = require('../controllers/album'),
    err = express.Router()

err
    .get('*', (req, res) => res.send('Ups esta pagina no existe..!') )
    .post('*', (req, res) => res.send('Ups esta pagina no existe..!') )
    .put('*', (req, res) => res.send('Ups esta pagina no existe..!') )
    .delete('*', (req, res) => res.send('Ups esta pagina no existe..!') )

module.exports = err