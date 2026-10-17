// Validaciones - Integrante 3

function validarFormulario() {
  const errores = [];

  const nombre = document.getElementById("nombre").value.trim();
  if (nombre === "") {
    errores.push("Escribe el nombre del estudiante.");
  }

  const idsNotas = ["nota1", "nota2", "nota3"];
  idsNotas.forEach(function (id, posicion) {
    const texto = document.getElementById(id).value.trim();
    const numeroNota = posicion + 1;

    if (texto === "") {
      errores.push("La nota " + numeroNota + " está vacía.");
      return;
    }

    const valor = Number(texto);
    if (isNaN(valor) || valor < 0 || valor > 5) {
      errores.push("La nota " + numeroNota + " debe estar entre 0 y 5.");
    }
  });

  mostrarErrores(errores);
  return errores.length === 0;
}

function mostrarErrores(errores) {
  const contenedor = document.getElementById("errores");
  contenedor.textContent = "";

  errores.forEach(function (mensaje) {
    const parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    contenedor.appendChild(parrafo);
  });
}
