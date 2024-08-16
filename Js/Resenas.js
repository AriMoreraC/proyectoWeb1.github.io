const stars = document.querySelectorAll('.star');
      const productId = new URLSearchParams(window.location.search).get('id'); // Obtener el ID del producto de la URL
      const savedRatings = JSON.parse(localStorage.getItem(`userRatings_${productId}`)) || []; // Usar el ID para obtener las calificaciones
      const feedback = document.getElementById('feedback');
      const saveButton = document.getElementById('saveRating');
      let selectedRating = 0;
  
      // Llamada a setRating(0) para que las estrellas no estén seleccionadas al cargar la página
      setRating(0);
  
      // Mostrar calificaciones y comentarios guardados
      displaySavedRatings();
  
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
          localStorage.setItem(`userRatings_${productId}`, JSON.stringify(savedRatings)); // Guardar usando el ID del producto
          displaySavedRatings();
  
          document.getElementById('userComment').value = ''; // Limpiar el comentario después de guardar
          saveButton.disabled = true; // Deshabilitar el botón después de guardar
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
          localStorage.removeItem(`userRatings_${productId}`); // Limpiar solo las calificaciones del producto actual
          savedRatings.length = 0; // Limpiar el array en memoria
          displaySavedRatings();
      });