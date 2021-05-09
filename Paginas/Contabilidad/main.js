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
     xhr.send();


     var xhr2 = new XMLHttpRequest();
    xhr2.open('GET','http://localhost:3000/getIdVendedor',true);

    xhr2.onload = function() {
        if (this.status === 200) {
            var select1 = '';
            for(var a of JSON.parse(this.responseText)) {
                select1 += `<option value=""> ${a.id_vendedor}</option>`;
            }
            document.getElementById("idUser").innerHTML = select1;
        }
    }
    
    xhr2.send();



    var xhr3 = new XMLHttpRequest();
    xhr3.open('GET','http://localhost:3000/getNombreProducto',true);

    xhr3.onload = function() {
        if (this.status === 200) {
            var select1 = '';
            for(var a of JSON.parse(this.responseText)) {
                select1 += `<option value=""> ${a.id_inventario}</option>`;
            }
            document.getElementById("idProducto").innerHTML = select1;
        }
    }
    
    xhr3.send();



}); 



function insertVenta(){

    var a = document.getElementById("idUser");
    var c = document.getElementById("idProducto");
    var form = {
        id_vendedor : a.options[a.selectedIndex].text,
        fecha :'2021-05-08',
        id_inventario: c.options[c.selectedIndex].text
        
    };

    console.log(form);

    var xhr = new XMLHttpRequest();


    xhr.onload = function() {
        if(xhr.readyState === xhr.DONE){
            if(xhr.status === 200){
                var resultJs = JSON.parse(this.responseText);
                console.log(resultJs);
                console.log("%c Result de su post esta listo: ",'color: orange;');
                alert("Se registro su nuevo vendedor a la perfeccion");
            }
            else 
                console.log("No se obtuvo repuesta", xhr.status);
        }
        else 
            console.log("no esta hecho");

    };


    xhr.onerror = function(){
        alert(`NetworkError`);
    }

    xhr.open('POST','http://localhost:3000/insertVenta', true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(form));
    alert("Se enviaron los datos");


};