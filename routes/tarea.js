'use strict'

var express = require('express');
var TareaController = require('../controllers/tarea');
//Llamamos al router de express que nos permitirá crear rutas y pasar parametros.
var api = express.Router();
/*Creamos nuestra ruta de prueba
al igual que en laravel, le pasamos un patch y un controlador y su metodo*/
api.get('/pruebas', TareaController.pruebas);
api.post('/tareas', TareaController.saveTarea);
module.exports = api;