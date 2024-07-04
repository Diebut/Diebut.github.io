function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldType = field.getAttribute('type') === 'password' ? 'text' : 'password';
    field.setAttribute('type', fieldType);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario real
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const contacto = document.getElementById('contacto').value.trim();
        const pais = document.getElementById('pais').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        const acceptTerms = document.getElementById('accept_terms').checked;
        const errorMessage = document.getElementById('error-message');

        let errorMessages = [];

        if (nombre === "") {
            errorMessages.push("El nombre no puede estar vacío.");
        }

        if (email === "") {
            errorMessages.push("El correo electrónico no puede estar vacío.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessages.push("El correo electrónico no es válido.");
        }

        if (contacto === "") {
            errorMessages.push("El número de contacto no puede estar vacío.");
        } else if (!/^[0-9]{10}$/.test(contacto)) {
            errorMessages.push("El número de contacto debe tener 10 dígitos.");
        }

        if (pais === "") {
            errorMessages.push("Debe seleccionar un país.");
        }

        if (password === "") {
            errorMessages.push("La contraseña no puede estar vacía.");
        } else if (password !== confirmPassword) {
            errorMessages.push("Las contraseñas no coinciden.");
        }

        if (!acceptTerms) {
            errorMessages.push("Debe aceptar los términos y condiciones.");
        }

        if (errorMessages.length > 0) {
            errorMessage.innerHTML = errorMessages.join('<br>');
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';

            // Guardar datos en localStorage
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);

            // Simula la redirección a la página de login después de registrar
            window.location.href = 'index.html';
        }
    });
});