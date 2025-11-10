const form = document.getElementById('formMatricula');
const mensaje = document.getElementById('mensaje');
const tabla = document.querySelector('#tablaEstudiantes tbody');

let contador = 1;

form.addEventListener('submit', e => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const cedula = document.getElementById('cedula').value.trim();
  const nacimiento = document.getElementById('nacimiento').value;
  const grado = document.getElementById('grado').value;
  const encargado = document.getElementById('encargado').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const seccion = document.querySelector('input[name="seccion"]:checked');

  if (!nombre || !cedula || !encargado || !telefono || !seccion || !grado) {
    mensaje.textContent = " Debe completar todos los campos obligatorios.";
    mensaje.style.color = "red";
    return;
  }

  mensaje.textContent = "";

  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${contador++}</td>
    <td>${nombre}</td>
    <td>${cedula}</td>
    <td>${nacimiento || '-'}</td>
    <td>${grado}</td>
    <td>${encargado}</td>
    <td>${telefono}</td>
    <td>${correo || '-'}</td>
    <td>${seccion.value}</td>
  `;

  tabla.appendChild(fila);

  form.reset();
  mensaje.style.color = "green";
  mensaje.textContent = " Estudiante matriculado correctamente.";
});
