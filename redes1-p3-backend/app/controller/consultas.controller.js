const Consultas = require("../models/consultas.model");

//get all the data 
exports.getAll = (req, res) => {
Consultas.getAll((err,data) => {
 
    if(err)
    res.status(500).send({
        message:
            err.message || "Un error ocurrio mientras se obtenian los datos"
    });
    else res.send(data);
});

};


exports.getVentas = (req, res) => {
    Consultas.getVentas((err,data) => {
     
        if(err)
        res.status(500).send({
            message:
                err.message || "Un error ocurrio mientras se obtenian los datos"
        });
        else res.send(data);
    });
    
    };

 
    exports.getVendedor = (req, res) => {
        Consultas.getVendedor((err,data) => {
         
            if(err)
            res.status(500).send({
                message:
                    err.message || "Un error ocurrio mientras se obtenian los datos"
            });
            else res.send(data);
        });
        
        };    

exports.insertProduct = (req , res) => {

    if(!req.body) {
        res.status(400).send({
             message: "EL cuerpo  no puede estar vacio"   
        });
    }


    const producto = new Consultas({
        nombre: req.body.nombre,
        precio : req.body.precio,
        cantidad: req.body.cantidad
    });


    Consultas.insertProduct(producto , (err,data) => {

        if(err)
            res.status(500).send({
                message:
                    err.message || "Un error ocurrio insertando su producto"
            });
            else res.send(data);
    });

};