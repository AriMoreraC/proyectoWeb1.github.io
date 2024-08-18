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
    var fechaMaxima = new Date('1920-01-01');
    var fechaMinima = new Date('2012-01-01');
    if (fechaNacimiento < fechaMinima) {
        document.getElementById('error-edad').style.display = 'none';
    } else {
        document.getElementById('error-edad').style.display = 'block';
    }
    if (fechaNacimiento >= fechaMaxima) {
        document.getElementById('error-edad').style.display = 'none';
    } else {
        document.getElementById('error-edad').style.display = 'block';
    }
});
document.querySelector('form').addEventListener('submit', function(event) {
    var fecha = document.getElementById('fechaNacimiento').value;
    var fechaNacimiento = new Date(fecha);
    var fechaMaxima = new Date('1920-01-01');
    var fechaMinima = new Date('2012-01-01');
    if (fechaNacimiento >= fechaMinima || fechaNacimiento < fechaMaxima) {
        event.preventDefault(); // Evita el envío del formulario
        document.getElementById('error-edad').style.display = 'block';
    }
});

// Mostrar el notify del envío de Formulario
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("Formulario");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío inmediato del formulario
            $.notify("Formulario enviado", {
                className: "success",
                position: "top center" // Centra la notificación en la parte superior
            });
            // Después de un pequeño retraso para mostrar la notificación, envía el formulario
            setTimeout(function() {
                form.submit(); // Envía el formulario después de la notificación
            }, 1700);
        });
    }
});
