window.addEventListener('load', function(event) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/getData', true);
      
     // onload function to get data 
     xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
            var table = '<table><tr><th> Id Producto </th> <th> nombre </th> <th> cantidad </th> <th> precio </th></tr>';
            for(var a of JSON.parse(this.responseText)) { table += `<tr>
            <td> ${a.id_inventario} </td> <td> ${a.nombre} </td><td> ${a.cantidad} </td><td> ${a.precio} </td>
            </tr>`; }
            table += `</table>`; 
            document.getElementById("inventario-actual").innerHTML  = table;
        }
     }
      
     // Send function to send data
     xhr.send()
    
}); 


function insertProducto(){

    var datos = {
        nombre: document.getElementById("formNombre").value,
        precio: document.getElementById("formPrecio").value,
        cantidad: document.getElementById("formCantidad").value
    };


     console.log(JSON.stringify(datos)) ;

     var xhr = new XMLHttpRequest();



     xhr.onload = function() {
         if (xhr.readyState === xhr.DONE){
             if(xhr.status === 200){
                var resultJs = JSON.parse(this.responseText);
                console.log(resultJs);
                console.log("%c Result de su post esta listo: ",'color: orange;');
                alert("Se registro a la perfeccion");
            }
            else
            console.log("No se obtuvo respuesta", xhr.status);
        }
        else
            console.log("no esta hecho");

    };

    xhr.onerror = function() { // only triggers if the request couldn't be made at all
        alert(`Network Error`);
      };

      xhr.open('POST', 'http://localhost:3000/insertProduct', true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
      xhr.send(JSON.stringify(datos));
      alert("Se enviaron los datos");
};

