document.addEventListener("DOMContentLoaded", function() {
  const invitacionImg = document.getElementById("invitacion-img");
  const textoInvitacion = document.getElementById("texto-invitacion");
  const voyAsistirBtn = document.getElementById("voyAsistirBtn");
  const voyAsistirBtn = document.getElementById("noVoyAsistirBtn");
  const toggleAudioBtn = document.getElementById("toggleAudioBtn");

  // Crear un nuevo objeto Audio
  const audio = new Audio("resources/cancion.mp3");

  // Variable para controlar si el audio ya fue activado
  let audioActivated = false;

  // Evento al hacer clic en la imagen
  invitacionImg.addEventListener("click", () => {
    // Activar y reproducir el audio solo en el primer clic
    if (!audioActivated) {
      audioActivated = true;
      audio.play().catch(error => console.error("Error al reproducir el audio:", error));
    }

    // Abrir la invitación
    invitacionImg.style.transition = "transform 1s ease";
    invitacionImg.style.transform = "translateX(-50%)";

    // Mostrar el mensaje de invitación después de la animación
    setTimeout(() => {
      textoInvitacion.classList.remove("hidden");
    }, 1000);
  });

  // Evento para cerrar el mensaje de invitación al hacer clic fuera del texto
  document.addEventListener("click", (event) => {
    if (!textoInvitacion.classList.contains("hidden") && !textoInvitacion.contains(event.target) && event.target !== invitacionImg) {
      // Ocultar mensaje y restaurar la imagen
      textoInvitacion.classList.add("hidden");
      invitacionImg.style.transform = "translateX(0)";
    }
  });

  // Abrir el formulario de Google en una nueva ventana al hacer clic en el botón "Voy a asistir"
  voyAsistirBtn.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=+5493624597356&text=Si%20voy%20al%20casamiento!!!", "_blank");
  });


  noVoyAsistirBtn.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=+5493624597356&text=No%20voy%20al%20casamiento", "_blank");
  });
  
  // Evento para reproducir o pausar la música
  toggleAudioBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(error => console.error("Error al reproducir el audio:", error));
      toggleAudioBtn.textContent = "Pausar música";
    } else {
      audio.pause();
      toggleAudioBtn.textContent = "Reproducir música";
    }
  });

  // Evento para manejar el fin del audio
  audio.addEventListener('ended', () => {
    toggleAudioBtn.textContent = "Reproducir música"; // Reiniciar el botón al finalizar la canción
  });
});
