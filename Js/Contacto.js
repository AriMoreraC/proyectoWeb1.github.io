function mostrarMapa() {
    const latitud = 10.0774941;
    const longitud = -84.2442774;

    // Crear el mapa y establecer el centro y el nivel de zoom
    const mapa = L.map('mapa').setView([latitud, longitud], 18);

    // Agregar el tile layer (capas de tiles) al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Agregar un marcador en la ubicación específica
    L.marker([latitud, longitud]).addTo(mapa)
        .bindPopup('<b>Estudio Magias</b><br>3QG4+X7X, Calle 1, Provincia de Alajuela, San Pedro de Poás.')
        .openPopup();
}

// Llamar a la función para inicializar el mapa cuando el contenido esté cargado
window.onload = mostrarMapa;