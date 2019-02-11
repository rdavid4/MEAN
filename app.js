'use strict'
var express = require('express');
var app = express();

//Rutas
var tarea_router = require('./routes/tarea');
/*app.get('/', function (req, res) {
  res.status(200).json({
      mensaje: "Hello world"
  });
});*/
app.use('/api', tarea_router);

//Exportamos el modulo para utilizarlo en nuestro index
module.exports = app;
