function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldType = field.getAttribute('type') === 'password' ? 'text' : 'password';
    field.setAttribute('type', fieldType);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.getElementById('error-message');

        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === "" || password === "") {
            errorMessage.innerText = "Todos los campos son obligatorios.";
            errorMessage.style.display = 'block';
        } else if (email !== storedEmail || password !== storedPassword) {
            errorMessage.innerText = "Correo electrónico o contraseña incorrectos.";
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Aquí puedes redirigir al usuario a otra página
            window.location.href = 'blog.html';
        }
    });
});
