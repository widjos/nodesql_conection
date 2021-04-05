const sql= require("./db.js");

const Consultas =  function(nombre, precio , cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}


Consultas.getAll = result => {
    sql.query(`SELECT * FROM INVENTARIO`, (err, res) => {
        if(err) {
            console.log("error: " , err);
            result(null,err);
            return;
        }
        console.log("Get all the data: " , res);
        result(null, res);

    });
};

Consultas.insertProduct = (newProduct, result) => {

    sql.query("INSERT INTO  INVENTARIO SET ?", [newProduct.nombre , newProduct.precio, newProduct.cantidad], (err,res) => {
      if(err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      
      console.log("producto insertado ", {nombre: res.nombre, ...newProduct});
      result(null, { nombre: res.nombre, ...newProduct});
    });

};


module.exports = Consultas;