const formRegistro = document.getElementById('formRegistro');
const mensajeRegistro = document.getElementById('mensajeRegistro');

formRegistro.addEventListener('submit', e => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!nombre || !usuario || !password) {
    mensajeRegistro.textContent = " Todos los campos son obligatorios.";
    mensajeRegistro.style.color = "red";
    return;
  }

  if (password.length < 4) {
    mensajeRegistro.textContent = " La contraseña debe tener al menos 4 caracteres.";
    mensajeRegistro.style.color = "red";
    return;
  }

  // Obtener usuarios ya registrados
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Validar si el usuario ya existe
  const existe = usuarios.some(u => u.usuario === usuario);
  if (existe) {
    mensajeRegistro.textContent = "❌ El usuario ya existe. Elija otro nombre.";
    mensajeRegistro.style.color = "red";
    return;
  }

  // Guardar nuevo usuario
  usuarios.push({ nombre, usuario, password });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  mensajeRegistro.style.color = "green";
  mensajeRegistro.textContent = "✅ Usuario registrado correctamente.";

  formRegistro.reset();

  // Redirigir al login después de 1.5 segundos
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});
