// Lógica de cálculo - Integrante 2

// Nota mínima para aprobar (se puede cambiar si el instituto usa otra)
const NOTA_MINIMA_APROBAR = 3.0;

const formulario = document.getElementById("formNotas");
const divResultado = document.getElementById("resultado");

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function mostrarResultado(nombre, promedio) {
  const aprobo = promedio >= NOTA_MINIMA_APROBAR;

  const etiqueta = document.createElement("p");
  etiqueta.className = "etiqueta";
  etiqueta.textContent = "Promedio de " + nombre;

  const numero = document.createElement("p");
  numero.className = "promedio";
  numero.textContent = promedio.toFixed(2);

  const estado = document.createElement("p");
  estado.className = "estado";
  estado.textContent = aprobo ? "Aprobó" : "No aprobó";

  divResultado.className = "resultado " + (aprobo ? "aprobado" : "reprobado");
  divResultado.replaceChildren(etiqueta, numero, estado);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  divResultado.textContent = "";
  divResultado.className = "resultado";

  // validarFormulario() está en validaciones.js (Integrante 3)
  if (!validarFormulario()) {
    return;
  }

  const nombre = document.getElementById("nombre").value.trim();
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  const promedio = calcularPromedio(nota1, nota2, nota3);
  mostrarResultado(nombre, promedio);
});
