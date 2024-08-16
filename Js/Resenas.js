const stars = document.querySelectorAll('.star');
      const productId = new URLSearchParams(window.location.search).get('id'); // Obtener el ID del producto de la URL
      const savedRatings = JSON.parse(localStorage.getItem(`userRatings_${productId}`)) || []; // Usar el ID para obtener las calificaciones
      const feedback = document.getElementById('feedback');
      const saveButton = document.getElementById('saveRating');
      let selectedRating = 0;
  
      setRating(0);
      displaySavedRatings();
  
      // Asignamos el evento de clic a cada estrella
      stars.forEach(star => {
          star.addEventListener('click', function() {
              selectedRating = this.getAttribute('data-value');
              setRating(selectedRating);
              saveButton.disabled = false;
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
  
          document.getElementById('userComment').value = '';
          saveButton.disabled = true;
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
          
          if (savedRatings.length === 0) {
            savedRatingsDiv.innerHTML = '<p class="sinCalificacion">No hay calificaciones para este producto.</p>'; // Mensaje si no hay calificaciones
            return; // Salir de la función
        }
          
          savedRatings.forEach((entry, index) => {
              const ratingDiv = document.createElement('div');
              const starsDisplay = '★'.repeat(entry.rating) + '☆'.repeat(5 - entry.rating);
              const comment = entry.comment ? `${entry.comment}` : '';
              ratingDiv.innerHTML = `<div class="resena">
              <span class="calificacion">Calificación ${index + 1}</span>: <span class="estrellas">${starsDisplay}</span>
                <span class="form-control comentario">${comment}</span></div>`;
              savedRatingsDiv.appendChild(ratingDiv);
          });
      }