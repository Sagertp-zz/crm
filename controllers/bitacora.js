'use strict'

const 
  dbconnection = require('../models/dbconnection.js'),
  connection = dbconnection()

function getBitacora(req, res){
  connection.query('SELECT * FROM productos', (err, result) => {
    res.render('bitacora', {
      bitacora: result
    }) 
  })
}
/*
function getBitacora(req, res){
  res.status(200).send({
    data:albums
  });
}

function saveBitacora(req, res){
	var params = req.body;
	res.status(200).send({
    album: params
  });
}

function updateBitacora(req, res){
	var params = req.body;
	res.status(200).send({
    album: params
  });
}

function deleteBitacora(req, res){
	var id = req.params.id;
	res.status(200).send({
		data: id,
	});
}*/

module.exports = {
  getBitacora,
  //getBitacoras,
  //saveBitacora,
  //updateBitacora,
  //deleteBitacora
}
