const sql= require("./db.js");


const Vendedor =  function(dpi, nombre , apellido, direccion,telefono){
    this.dpi = dpi;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
}


Vendedor.insertVendedor = (newVendedor, result) => {

    sql.query("INSERT INTO  VENDEDOR SET ?", [newVendedor.dpi , newVendedor.nombre, newVendedor.apellido  , newVendedor.direccion , newVendedor.telefono], (err,res) => {
      if(err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      
      console.log("vendedor insertado ", {dpi: res.dpi, ...newVendedor});
      result(null, { dpi: res.dpi, ...newVendedor});
    });

};


module.exports = Vendedor;


