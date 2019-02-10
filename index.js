'use strict'
 var mongoose = require('mongoose');
 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost:27017/curso', {useNewUrlParser:true})
 .then(() =>{
     console.log("Conexion establecida");
 })
 .catch(err =>{
     console.log(err);
 });