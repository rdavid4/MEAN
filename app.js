'use strict'
var express = require('express');
var app = express();

//Rutas
app.get('/', function (req, res) {
  res.status(200).json({
      mensaje: "Hello world"
  });
});


//Exportamos el modulo para utilizarlo en nuestro index
module.exports = app;
