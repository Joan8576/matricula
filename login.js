const formLogin = document.getElementById('formLogin');
const mensajeLogin = document.getElementById('mensajeLogin');

formLogin.addEventListener('submit', e => {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!usuario || !password) {
    mensajeLogin.textContent = "⚠️ Debe ingresar usuario y contraseña.";
    mensajeLogin.style.color = "red";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const user = usuarios.find(u => u.usuario === usuario && u.password === password);

  if (user) {
    mensajeLogin.textContent = "✅ Bienvenido, " + user.nombre + "!";
    mensajeLogin.style.color = "green";

    // Guardar sesión activa
    localStorage.setItem('usuarioActivo', JSON.stringify(user));

    setTimeout(() => {
      window.location.href = "matricula.html";
    }, 1000);
  } else {
    mensajeLogin.textContent = "❌ Usuario o contraseña incorrectos.";
    mensajeLogin.style.color = "red";
  }
});
