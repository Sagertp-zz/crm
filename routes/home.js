
'use strict'

const 
    express = require('express'),
    homeController = require('../controllers/home.js'),
    home = express.Router()

home
    .get('/', homeController.getHome )
    .post('/', (req, res) => res.send('Hola Mundo desde el Home..!') )
    .put('/', (req, res) => res.send('Hola Mundo desde el Home..!') )
    .delete('/', (req, res) => res.send('Hola Mundo desde el Home..!') )

module.exports = home