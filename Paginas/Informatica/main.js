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
