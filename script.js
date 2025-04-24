const heart = document.getElementById('clickable-heart');
const messageElement = document.querySelector('.message'); // Selecciona el elemento del mensaje

// Guardamos el color original del texto del CSS
const originalTextColor = window.getComputedStyle(messageElement).color;
const highlightColor = '#ffff00'; // Color para resaltar el texto (amarillo brillante)


// Añadir listeners para clic y toque al corazón
heart.addEventListener('click', handleInteraction);
heart.addEventListener('touchstart', handleInteraction);

function handleInteraction(event) {
    // Evita el comportamiento por defecto del touch si es un evento táctil
    if (event.type === 'touchstart') {
        event.preventDefault();
    }

    // Cambiar el color del texto temporalmente
    messageElement.style.color = highlightColor; // Cambia al color de resaltado

    // Después de un breve tiempo, cambia el color de vuelta al original
    setTimeout(() => {
        messageElement.style.color = originalTextColor; // Vuelve al color original
    }, 300); // 300 milisegundos (puedes ajustar este tiempo)
}