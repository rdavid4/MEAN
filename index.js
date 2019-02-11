'use strict'
 var mongoose = require('mongoose');
 //Importamos el modulo desde app.js
 var app = require('./app');
 //Creamos una variable para almacenar el puerto


 mongoose.Promise = global.Promise;
 //Conexion con mongodb
 mongoose.connect('mongodb://localhost:27017/curso', {useNewUrlParser:true})
 .then(() =>{
     console.log("Conexion establecida");
     app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
      });
 })
 .catch(err =>{
     console.log(err);
 });