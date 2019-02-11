'use strict'
var mongoose = require('mongoose');
//Con esta variable podemos crear esquemas en mongo
var Schema = mongoose.Schema;
//Definimos el esquema
var TareaSchema = Schema({
    nombre: String,
    terminado: Boolean
});

//Exportamos como modelo de Tarea
module.exports = mongoose.model('Tarea', TareaSchema);
