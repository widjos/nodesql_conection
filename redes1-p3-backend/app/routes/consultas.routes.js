module.exports = app => {
    const consultas = require("../controller/consultas.controller.js");

    app.get("/getData", consultas.getAll);

    app.post("/insertProduct", consultas.insertProduct);


    app.get("/getVentas", consultas.getVentas);

    app.get("/getVendedor", consultas.getVendedor);

};