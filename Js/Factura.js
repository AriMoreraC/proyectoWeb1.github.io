document.addEventListener("DOMContentLoaded", function() {
    // Recuperar el estado del checkbox desde localStorage
    var checkboxState = localStorage.getItem("checkboxState");
    var total = 0;
    var costoTotalEnvio = 0;
    var sumaSubtotal = 0;
    var cart = JSON.parse(localStorage.getItem('compra'));

    // Obtener el contenedor de la tabla
    var detalle = document.getElementById('detalle');
    detalle.innerHTML = ''; // Limpiar el contenido actual de la tabla

    if (cart) {
        cart.forEach(function(item) {
            var nombre = item.nombre;
            var precio = parseFloat(item.precio);
            var cantidad = parseInt(item.cantidad);
            var subtotal = precio * cantidad;
            
            sumaSubtotal += subtotal;
            total += subtotal;
            costoTotalEnvio += parseFloat(item.costo);

            // Crear una nueva fila
            var row = document.createElement('tr');

            // Crear celdas para cada valor
            var cellNombre = document.createElement('td');
            cellNombre.textContent = nombre;
            row.appendChild(cellNombre);

            var cellCantidad = document.createElement('td');
            cellCantidad.textContent = cantidad;
            row.appendChild(cellCantidad);

            var cellPrecio = document.createElement('td');
            cellPrecio.textContent = "¢" + precio.toFixed(2);
            row.appendChild(cellPrecio);

            var cellSubtotal = document.createElement('td');
            cellSubtotal.textContent = "¢" + subtotal.toFixed(2);
            row.appendChild(cellSubtotal);

            // Agregar la fila a la tabla
            detalle.appendChild(row);
        });
    }
    var cart2=JSON.parse(localStorage.getItem('MedioDePago'))
    var tipo= cart2.tipoEnvio;
    if (checkboxState === 'true') {
        total += costoTotalEnvio;
        $('#TipoEnvio').text(tipo);
        $('#costoEnvio').text("¢" + costoTotalEnvio.toFixed(2));
    } else {
        $('#costoEnvio').text("¢0.00");
        $('#TipoEnvio').text("Recogida en tienda");
    }
    $('#sumaSubtotal').text("¢" + sumaSubtotal.toFixed(2))
    $('#mostrar-total').text("¢" + total.toFixed(2));
});

// Guardar el estado del checkbox en localStorage cuando cambia
$(document).ready(function() {
    $('#flexCheckChecked').on('change', function() {
        localStorage.setItem("checkboxState", this.checked);
    });
});

// Limpiar el carrito al finalizar la compra
function limpiarCarrito() {
    localStorage.removeItem("compra");
    localStorage.removeItem("MedioDePago");
    localStorage.removeItem("checkboxState");
}

// Obtener la fecha del dispositivo
    // Crear un nuevo objeto Date
    var fecha = new Date();

    // Formatear la fecha (opcional)
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Los meses empiezan en 0, así que sumamos 1
    var año = fecha.getFullYear();

    // Puedes añadir un cero antes del día o el mes si es necesario
    if (dia < 10) dia = '0' + dia;
    if (mes < 10) mes = '0' + mes;

    // Crear la cadena de fecha en formato DD/MM/YYYY
    var fechaFormateada = dia + '/' + mes + '/' + año;

    // Mostrar la fecha en el elemento con id "fecha"
    document.getElementById('fecha').textContent = fechaFormateada;