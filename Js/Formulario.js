// Validar que se elija una Provincia del Select
document.getElementById('provincia').addEventListener('change', function() {
    var provinciaSeleccionada = this.value;
    if (provinciaSeleccionada !== "Elija su provincia") {
        document.getElementById('error-provincia').style.display = 'none';
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    var provinciaSeleccionada = document.getElementById('provincia').value;
    if (provinciaSeleccionada === "Elija su provincia") {
        event.preventDefault(); // Evita el envío del formulario
        document.getElementById('error-provincia').style.display = 'block';
    }
});

// Validar que se elija una fecha válida
document.getElementById('fechaNacimiento').addEventListener('change', function() {
    var fecha = this.value;
    var fechaNacimiento = new Date(fecha);
    var fechaMinima = new Date('2012-01-01'); // Fecha mínima para que tenga al menos 12 años

    if (fechaNacimiento < fechaMinima) {
        document.getElementById('error-edadMenor').style.display = 'none';
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    var fecha = document.getElementById('fechaNacimiento').value;
    var fechaNacimiento = new Date(fecha);
    var fechaMinima = new Date('2012-01-01'); // Fecha mínima para que tenga al menos 12 años

    if (fechaNacimiento >= fechaMinima) {
        event.preventDefault(); // Evita el envío del formulario
        document.getElementById('error-edadMenor').style.display = 'block';
    }
});
