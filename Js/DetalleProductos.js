$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const IdProducto = urlParams.get("id");

    if (IdProducto) {
      const producto=productos.find((p)=>p.id==IdProducto)
      if(IdProducto){
        $("#Nombre").text(producto.Nombre)
        $("#Descripcion").html("<b>Descripción: </b>" + producto.Descripcion)
        $("#Precio").html("<b>Precio: </b>₡ " + producto.Precio)
        $("#Imagen").attr("src", producto.Imagen?producto.Imagen:'./Imagenes/NoEncontrado.avif')
        $("#TiempoEntrega").html("<b>Tiempo de entrega: </b>₡ " + producto.TiempoEntrega)
        $("#CostoEnvio").html("<b>Costo del envío: </b>₡ " + producto.CostoEnvio)
        $("#Stock").html("<b>Stock: </b>" + producto.Stock)
        $("#OpcionesEntrega").html("<b>Opciones de entrega: </b>" + producto.OpcionesEntrega)
        $("#Garantia").html("<b>Garantía: </b>" + producto.Garantia)
        $("#Imagen1").attr("src", producto.GaleriaImagenes.Imagen1)
        $("#Imagen2").attr("src", producto.GaleriaImagenes.Imagen2)
        $("#Imagen3").attr("src", producto.GaleriaImagenes.Imagen3)
        // if (producto.Categorias && producto.Categorias.length > 0) {
        const categoriasHtml = producto.Categorias.filter(categoria => categoria).join(", ");
        $("#Categorias").html("<b>Categorías: </b>" + categoriasHtml);
        // }
      }
    }
  });

// Reseñas ----------------------------------------------
const stars = document.querySelectorAll('.star');
        const savedRatings = JSON.parse(localStorage.getItem('userRatings')) || [];
        const feedback = document.getElementById('feedback');
        const saveButton = document.getElementById('saveRating');
        let selectedRating = 0;

        // Mostrar calificaciones y comentarios guardados
        displaySavedRatings();

        // Si hay una calificación guardada recientemente, la mostramos
        if (savedRatings.length > 0) {
            const lastRating = savedRatings[savedRatings.length - 1];
            selectedRating = lastRating.rating; // Asegúrate de que selectedRating esté actualizado
            setRating(selectedRating);
        }

        // Asignamos el evento de clic a cada estrella
        stars.forEach(star => {
            star.addEventListener('click', function() {
                selectedRating = this.getAttribute('data-value');
                setRating(selectedRating);
                saveButton.disabled = false; // Habilitar el botón cuando se selecciona una calificación
            });

            star.addEventListener('mouseover', function() {
                const rating = this.getAttribute('data-value');
                highlightStars(rating);
            });

            star.addEventListener('mouseout', function() {
                highlightStars(selectedRating);
            });
        });

        // Guardar la calificación y comentario al hacer clic en el botón
        saveButton.addEventListener('click', function() {
            const comment = document.getElementById('userComment').value;
            savedRatings.push({ rating: selectedRating, comment: comment });
            localStorage.setItem('userRatings', JSON.stringify(savedRatings));
            displaySavedRatings();
            feedback.textContent = 'Calificación y comentario guardados exitosamente.';
            document.getElementById('userComment').value = ''; // Limpiar el comentario después de guardar
            saveButton.disabled = true; // Deshabilitar el botón después de guardar
            // Restablecer estrellas a color gris después de guardar
            setRating(0); // Establecer la calificación en 0 para deseleccionar todas las estrellas
        });

        // Función para mostrar las estrellas seleccionadas
        function setRating(rating) {
            stars.forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= rating) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        }

        // Función para resaltar estrellas al pasar el mouse
        function highlightStars(rating) {
            stars.forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= rating) {
                    star.classList.add('hover');
                } else {
                    star.classList.remove('hover');
                }
            });
        }

        // Función para mostrar calificaciones y comentarios guardados
        function displaySavedRatings() {
            const savedRatingsDiv = document.getElementById('savedRatings');
            savedRatingsDiv.innerHTML = ''; // Limpiar contenido previo
            savedRatings.forEach((entry, index) => {
                const ratingDiv = document.createElement('div');
                const starsDisplay = '★'.repeat(entry.rating) + '☆'.repeat(5 - entry.rating);
                const comment = entry.comment ? `Comentario: ${entry.comment}` : 'Sin comentario';
                ratingDiv.textContent = `Calificación ${index + 1}: ${starsDisplay} - ${comment}`;
                savedRatingsDiv.appendChild(ratingDiv);
            });
        }

        // Limpiar todas las calificaciones y comentarios
        document.getElementById('clearRatings').addEventListener('click', function() {
            localStorage.removeItem('userRatings');
            savedRatings.length = 0; // Limpiar el array en memoria
            displaySavedRatings();
            feedback.textContent = 'Todas las calificaciones han sido eliminadas.';
        });