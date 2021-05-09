const sql= require("./db.js");


const Venta =  function(id_vendedor, fecha,id_inventario ){
    this.id_vendedor = id_vendedor;
    this.fecha = fecha;
    this.id_inventario = id_inventario;
}


 

Venta.getIdVendedor = result => {
    sql.query(`SELECT id_vendedor FROM VENDEDOR`,  (err, res) => {
        if(err) {
            console.log("error: " , err);
            result(null,err);
            return;
        }
        console.log("Get all the data: " , res);
        result(null, res);

    });
};



Venta.getNombreProducto = result => {
    sql.query(`SELECT id_inventario FROM INVENTARIO`,  (err, res) => {
        if(err) {
            console.log("error: " , err);
            result(null,err);
            return;
        }
        console.log("Get all the data: " , res);
        result(null, res);

    });
};

Venta.insertVenta = (newVenta, result) => {

    sql.query("INSERT INTO  VENTA SET ?", [newVenta.id_vendedor , newVenta.fecha, newVenta.id_inventario ], (err,res) => {
      if(err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      
      console.log("vendedor insertado ", {dpi: res.id_vendedor, ...newVenta});
      result(null, { dpi: res.id_inventario, ...newVenta});
    });

};



module.exports = Venta;