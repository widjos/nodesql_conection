module.exports = app => {
    const venta = require("../controller/venta.controller.js");
  


    app.get("/getNombreProducto", venta.getNombreProducto);

    app.get("/getIdVendedor", venta.getIdVendedor);

    app.post("/insertVenta", venta.insertVenta);

};