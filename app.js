var vehiculos = []; // Arreglo para almacenar los vehículos

function contarVehiculos() {
  var numeroVehiculos = vehiculos.length;

  document.getElementById("contador").textContent = "Número de vehículos: " + numeroVehiculos;
}

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  var vehiculo = document.getElementById("vehiculo").value;
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;

  var nuevoVehiculo = {
    "vehiculo": vehiculo,
    "marca": marca,
    "modelo": modelo
  };

  vehiculos.push(nuevoVehiculo);

  document.getElementById("vehiculo").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";

  alert("El vehículo se ha guardado exitosamente.");

// Convertir los datos a formato JSON
var jsonData = JSON.stringify(vehiculos);
  
// Guardar los datos en un archivo JSON
guardarEnJSON(jsonData);


});

function guardarEnJSON(data) {
    // Crear un objeto Blob con los datos JSON
    var blob = new Blob([data], { type: "application/json" });
  
    // Crear un enlace de descarga
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "datos.json";
  
    // Hacer clic en el enlace para descargar el archivo
    link.click();
  
    // Liberar el objeto URL creado
    URL.revokeObjectURL(url);
  }

  document.getElementById("mostrar").addEventListener("click", function() {
    // Mostrar los datos guardados en formato JSON
    alert(JSON.stringify(vehiculos));
  });
