'use strict'

const
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    pug = require('pug'),
    app = express(),
    home = require('./routes/home.js'),
    documentacion = require('./routes/documentacion.js'),
    bitacora = require('./routes/bitacora.js'),
    api = require('./routes/api.js'),
    err = require('./routes/err.js')

// Convierte una petición recibida (POST-GET...) a objeto JSON
app
    .use(bodyParser.urlencoded({extended:false}))
    .use(bodyParser.json())
    .use('/', home)
    .use('/documentacion', documentacion)
    .use('/bitacora', bitacora)
    .use('/api', api)
    .use('*', err)

    //.set('views', )
app
    .set('view engine', 'pug')
    .set('views', path.join(__dirname, '/views'))

module.exports = app