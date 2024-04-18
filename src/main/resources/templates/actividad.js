// Arreglo para almacenar los registros de actividad
const registros = [];
// Elemento de la tabla de actividad
const tablaActividad = document.getElementById("tablaActividad");

// Función asincrónica para obtener el nombre del día de la semana a partir de su ID
async function obtenerNombreDiaSemana(idDiaSemana) {
  const response = await fetch(
    `http://localhost:8080/diaSemana/listar/${idDiaSemana}`
  );
  const data = await response.json();
  return data.nombre;
}

// Función asincrónica para obtener el nombre del ejercicio a partir de su ID
async function obtenerNombreEjercicio(idEjercicio) {
  const response = await fetch(
    `http://localhost:8080/ejercicio/listar/${idEjercicio}`
  );
  const data = await response.json();
  console.log("data", data);
  return data !== null ? data.nombre : null;
}

// Obtiene los registros de actividad y los procesa
fetch("http://localhost:8080/actividad/listar")
  .then((response) => response.json())
  .then(async (data) => {
    // Almacena los registros de actividad en el arreglo 'registros'
    registros.push(...data);

    // Itera sobre cada actividad y agrega una fila a la tabla de actividad
    for (const actividad of registros) {
      const row = document.createElement("tr");

      // Obtiene el nombre del día de la semana y del ejercicio de manera asincrónica
      const nombreDiaSemana = await obtenerNombreDiaSemana(
        actividad.idDiaSemana
      );
      const nombreEjercicio = await obtenerNombreEjercicio(
        actividad.idEjercicio
      );
      console.log(nombreEjercicio);
      // Si el nombre del ejercicio no es nulo, agrega una fila a la tabla
      if (nombreEjercicio !== null) {
        row.innerHTML = `
        <td>${actividad.id}</td>
        <td>${actividad.estado}</td>
        <td>${new Date(actividad.fecha).toLocaleString()}</td>
        <td>${nombreDiaSemana}</td>
        <td>${nombreEjercicio}</td>
        <td>${actividad.tiempoTotal}</td>
      `;

        tablaActividad.appendChild(row);
      }
    }

    console.log(registros);
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos:", error);
  });
