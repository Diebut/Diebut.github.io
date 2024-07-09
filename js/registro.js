function togglePasswordVisibility(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldType = field.getAttribute('type') === 'password' ? 'text' : 'password';
  field.setAttribute('type', fieldType);
}

document.querySelector("#registroForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const contacto = document.querySelector("#tel").value;/* agrega */
  const pais = document.querySelector("#pais").select; /* agrego */
  const password = document.querySelector("#password").value;
  const check = document.querySelector("#checkbox").Checked; /* agrego */
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = Users.find((user) => user.email === email);

  if (isUserRegistered) {
    return alert("El usuario ya está registrado!");
  }

  Users.push({ name, email, contacto, pais, password, check });
  localStorage.setItem("users", JSON.stringify(Users));
  alert("Registro Exitoso!");
  window.location.href = "index.html";
});
