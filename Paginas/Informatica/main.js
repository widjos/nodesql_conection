window.addEventListener('load', function(event) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/getVendedor', true);
      
     // onload function to get data 
     xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
            var table = '<table><tr><th> Id Vendedor </th> <th> dpi </th> <th> Nombre </th> <th> Apellido </th><th> Direccion </th><th> Telefono </th></tr>';
            for(var a of JSON.parse(this.responseText)) { table += `<tr>
            <td> ${a.id_vendedor} </td> <td> ${a.dpi} </td><td> ${a.nombre} </td><td> ${a.apellido} </td> <td> ${a.direccion} </td><td> ${a.telefono} </td>
            </tr>`; }
            table += `</table>`; 
            document.getElementById("vendedores").innerHTML  = table;
        }
     }
      
     // Send function to send data
     xhr.send()
    
}); 



function insertVendedor(){

    var form = {
        dpi : document.getElementById("formDPI").value,
        nombre: document.getElementById("formNombre").value,
        apellido: document.getElementById("formApellido").value,
        direccion : document.getElementById("formDireccion").value,
        telefono: document.getElementById("formTelefono").value
    };


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

    xhr.open('POST','http://localhost:3000/insertVendedor', true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(form));
    alert("Se enviaron los datos");


};