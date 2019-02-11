'use strict'
function pruebas(req, res){
    res.status(200).send({
        mensaje: "Metodo de prueba"
    });
}
function saveTarea(req, res){
    var tarea = new tarea();
    var params = req.body;
    if(params.nombre){
        tarea.nombre = params.nombre;
        tarea.terminado = params.terminado;

        tarea.save((err, tareaStored) =>{
            if(err){
                res.status(500).send({
                    mensaje: "No se ha guardado la tarea"
                });
            }else{
                if(tareaStored){
                    res.status(200).send({
                        mensaje: tareaStored
                    });
                }else{
                    res.status(200).send({
                        mensaje: "Parece que no se ha guardado la fruta"
                    });
                }
            }
        });

    }
}
//Objeto para exportar todos los metodos
module.exports = {
    pruebas,
    saveTarea
}