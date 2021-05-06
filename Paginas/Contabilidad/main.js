window.addEventListener('load', function(event) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/getVentas', true);
      
     // onload function to get data 
     xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
            var table = '<table><tr><th> Id Venta </th> <th> id Vendedor </th> <th> Nombre Vendedor </th> <th> Fecha </th><th> Producto </th></tr>';
            for(var a of JSON.parse(this.responseText)) { table += `<tr>
            <td> ${a.id_transaccion} </td> <td> ${a.id_vendedor} </td><td> ${a.nombre} </td><td> ${a.fecha} </td><td> ${a.Producto} </td>
            </tr>`; }
            table += `</table>`; 
            document.getElementById("ventas-actual").innerHTML  = table;
        }
     }
      
     // Send function to send data
     xhr.send()
    
}); 
