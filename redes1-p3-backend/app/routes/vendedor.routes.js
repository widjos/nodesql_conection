module.exports = app => {
    const vendedor = require("../controller/vendedor.controller.js");
  


    app.post("/insertVendedor", vendedor.insertVendedor);

};