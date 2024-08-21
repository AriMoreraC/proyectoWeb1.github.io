const estrellas = document.querySelectorAll('.star');
const productoId = new URLSearchParams(window.location.search).get('id');
const producto = productos.find(p => p.id == productoId); // Buscar el producto por su ID
const resennasJSON = producto ? producto.resennas : []; // Obtener las reseñas del producto del JSON
const resennasLocalStorage = JSON.parse(localStorage.getItem(`userRatings_${productoId}`)) || []; // Obtener las reseñas guardadas en localStorage
const allResennas = [...resennasJSON, ...resennasLocalStorage]; // Combinar ambas listas de reseñas
const botonGuardar = document.getElementById('saveRating');
let resennaSeleccionada = 0;

setResennas(0);
mostrarResennasGuardadas();

// Asignamos el evento de clic a cada estrella
estrellas.forEach(estrella => {
    estrella.addEventListener('click', function() {
        resennaSeleccionada = this.getAttribute('data-value');
        setResennas(resennaSeleccionada);
        botonGuardar.disabled = false;
    });

    estrella.addEventListener('mouseover', function() {
        const rating = this.getAttribute('data-value');
        resaltarEstrellas(rating);
    });

    estrella.addEventListener('mouseout', function() {
        resaltarEstrellas(resennaSeleccionada);
    });
});

// Guardar la calificación y comentario al hacer clic en el botón
botonGuardar.addEventListener('click', function() {
    const comentario = document.getElementById('userComment').value;
    resennasLocalStorage.push({ rating: resennaSeleccionada, comment: comentario });

    // Guardar la reseña en localStorage
    localStorage.setItem(`userRatings_${productoId}`, JSON.stringify(resennasLocalStorage));

    // Notificar
    $.notify("Reseña guardada exitosamente.", "success");

    // Actualizar la visualización de las reseñas
    mostrarResennasGuardadas();

    // Limpiar el campo de comentario y desactivar el botón de guardar
    document.getElementById('userComment').value = '';
    botonGuardar.disabled = true;

    setTimeout(() => {
        location.reload();
    }, 1150); 
});

// Función para mostrar las estrellas seleccionadas
function setResennas(rating) {
    estrellas.forEach(estrella => {
        if (parseInt(estrella.getAttribute('data-value')) <= rating) {
            estrella.classList.add('selected');
        } else {
            estrella.classList.remove('selected');
        }
    });
}

// Función para resaltar estrellas al pasar el mouse
function resaltarEstrellas(rating) {
    estrellas.forEach(estrella => {
        if (parseInt(estrella.getAttribute('data-value')) <= rating) {
            estrella.classList.add('hover');
        } else {
            estrella.classList.remove('hover');
        }
    });
}

// Función para mostrar calificaciones y comentarios guardados
function mostrarResennasGuardadas() {
    const resennasGuardadasDiv = document.getElementById('savedRatings');
    resennasGuardadasDiv.innerHTML = ''; // Limpiar contenido previo

    if (allResennas.length === 0) {
        resennasGuardadasDiv.innerHTML = '<p class="sinCalificacion">No hay calificaciones para este producto.</p>'; // Mensaje si no hay calificaciones
        return; // Salir de la función
    }

    allResennas.forEach((entry, index) => {
        const ratingDiv = document.createElement('div');
        const mostrarEstrellas = '★'.repeat(entry.rating) + '☆'.repeat(5 - entry.rating);
        const comentario = entry.comment ? `${entry.comment}` : '';
        ratingDiv.innerHTML = `<div class="resena">
        <span class="calificacion">Calificación ${index + 1}</span>: <span class="estrellas">${mostrarEstrellas}</span>
          <span class="form-control comentario">${comentario}</span></div>`;
        resennasGuardadasDiv.appendChild(ratingDiv);
    });
}
