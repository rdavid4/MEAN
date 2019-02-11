'use strict'
function pruebas(req, res){
    res.status(200).send({
        mensaje: "Metodo de prueba"
    });

}
//Objeto para exportar todos los metodos
module.exports = {
    pruebas
}