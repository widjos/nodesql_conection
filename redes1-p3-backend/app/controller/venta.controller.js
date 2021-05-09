const Venta = require("../models/venta.model");

//get all the data 
exports.getNombreProducto = (req, res) => {
Venta.getNombreProducto((err,data) => {
 
    if(err)
    res.status(500).send({
        message:
            err.message || "Un error ocurrio mientras se obtenian los datos"
    });
    else res.send(data);
});

};

exports.getIdVendedor = (req, res) => {
    Venta.getIdVendedor((err,data) => {
     
        if(err)
        res.status(500).send({
            message:
                err.message || "Un error ocurrio mientras se obtenian los datos"
        });
        else res.send(data);
    });
    
    };


  
exports.insertVenta = (req , res) => {

    if(!req.body) {
        res.status(400).send({
             message: "EL cuerpo  no puede estar vacio"   
        });
    }


    const venta = new Venta({
        id_vendedor: req.body.id_vendedor,
        fecha : req.body.fecha,
        id_inventario: req.body.id_inventario

    });


    Venta.insertVenta(venta , (err,data) => {

        if(err)
            res.status(500).send({
                message:
                    err.message || "Un error ocurrio insertando su producto"
            });
            else res.send(data);
    });

};  