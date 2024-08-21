// Validar que se elija una provincia
document.getElementById('provincia').addEventListener('change', function() {
    var provinciaSeleccionada = this.value;
    if (provinciaSeleccionada !== "Elija su provincia") {
        document.getElementById('error-provincia').style.display = 'none';
    }
});

document.getElementById('fechaNacimiento').addEventListener('change', function() {
    var fecha = this.value;
    var fechaNacimiento = new Date(fecha);
    var fechaMaxima = new Date('1920-01-01');
    var fechaMinima = new Date('2012-01-01');

    if (fechaNacimiento >= fechaMaxima && fechaNacimiento <= fechaMinima) {
        document.getElementById('error-edad').style.display = 'none';
    } else {
        document.getElementById('error-edad').style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("Formulario");
    if (form) {
        form.addEventListener("submit", function(event) {
            var provinciaSeleccionada = document.getElementById('provincia').value;
            var fecha = document.getElementById('fechaNacimiento').value;
            var fechaNacimiento = new Date(fecha);
            var fechaMaxima = new Date('1920-01-01');
            var fechaMinima = new Date('2012-01-01');
            var hayErrores = false;

            // Validación de la provincia
            if (provinciaSeleccionada === "Elija su provincia") {
                document.getElementById('error-provincia').style.display = 'block';
                hayErrores = true;
            } else {
                document.getElementById('error-provincia').style.display = 'none';
            }

            // Validación de la fecha de nacimiento
            if (fechaNacimiento < fechaMaxima || fechaNacimiento > fechaMinima) {
                document.getElementById('error-edad').style.display = 'block';
                hayErrores = true;
            } else {
                document.getElementById('error-edad').style.display = 'none';
            }

            // Si hay errores, evita el envío del formulario
            if (hayErrores) {
                event.preventDefault();
            } else {
                // Si no hay errores, muestra la notificación y envía el formulario después de un pequeño retraso
                event.preventDefault(); // Evita el envío inmediato del formulario
                $.notify("Formulario enviado", {
                    className: "success",
                    position: "top center" // Centra la notificación en la parte superior
                });
                setTimeout(function() {
                    form.submit(); // Envía el formulario después de la notificación
                }, 1700);
            }
        });
    }
});
