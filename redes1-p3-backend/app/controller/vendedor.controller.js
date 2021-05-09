const Vendedor = require("../models/vendedor.model");

exports.insertVendedor = (req , res) => {

    if(!req.body) {
        res.status(400).send({
             message: "EL cuerpo  no puede estar vacio"   
        });
    }


    const vendedor = new Vendedor({
        dpi: req.body.dpi,
        nombre : req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono

    });


    Vendedor.insertVendedor(vendedor , (err,data) => {

        if(err)
            res.status(500).send({
                message:
                    err.message || "Un error ocurrio insertando su producto"
            });
            else res.send(data);
    });

};