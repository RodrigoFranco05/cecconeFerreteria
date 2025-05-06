document.addEventListener("DOMContentLoaded", function () {
    

    const form = document.getElementById("contact-form");
    const modal = document.getElementById("status-modal");
    const modalMessage = document.getElementById("modal-message");
    const closeModal = document.getElementById("close-modal");
    const loading = document.getElementById("loading");

    if (!form) {
        console.error("No se encontró el formulario en el DOM.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Crear objeto FormData con los datos del formulario
        const formData = new FormData(this);

        // Obtener los valores de los inputs
        let name = document.getElementById("name")?.value || "";
        let number = document.getElementById("number")?.value || "";
        let business = document.getElementById("business")?.value || "";
        let email = document.getElementById("email")?.value || "";
        let message = document.getElementById("message")?.value || "";

        if (!name || !email) {
            showModal("Por favor, completa los campos obligatorios.");
            return;
        }

        // Mostrar GIF de carga
        loading.style.display = "flex";
         
        // Enviar datos mediante fetch API
        fetch('../php/procesar_formulario.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                showModal("❌ Error al enviar el mensaje. Inténtalo de nuevo.");
                throw new Error('Error en la respuesta de la red');
            }
        })
        .then(data => {
            // Mostrar mensaje de éxito en la misma página
            showModal("¡Mensaje enviado con éxito! 🎉 Revisa tu correo con la confirmacion.");
            form.reset(); // Limpiar formulario tras el envío
        })
        .catch(error => {
            showModal("❌ Error al enviar el mensaje. Inténtalo de nuevo.");
            console.error('Error:', error);
        })
        .finally(() => {
            // Ocultar GIF de carga después de completar la solicitud
            loading.style.display = "none";
        });
    });

    // Función para mostrar el modal
    function showModal(message) {
        modalMessage.innerText = message;
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
    }

    // Evento para cerrar el modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal si el usuario hace clic fuera de la caja
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});