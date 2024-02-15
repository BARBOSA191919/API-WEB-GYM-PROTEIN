const registros = [];
const tablaActividad = document.getElementById("tablaActividad");

async function obtenerNombreDiaSemana(idDiaSemana) {
    const response = await fetch(
        `http://localhost:8080/diaSemana/listar/${idDiaSemana}`
    );
    const data = await response.json();
    return data.nombre;
}

async function obtenerNombreEjercicio(idEjercicio) {
    const response = await fetch(
        `http://localhost:8080/ejercicio/listar/${idEjercicio}`
    );
    const data = await response.json();
    console.log("data", data);
    return data !== null ? data.nombre : null;
}

fetch("http://localhost:8080/actividad/listar")
    .then((response) => response.json())
    .then(async (data) => {
        registros.push(...data);

        for (const actividad of registros) {
            const row = document.createElement("tr");

            const nombreDiaSemana = await obtenerNombreDiaSemana(
                actividad.idDiaSemana
            );
            const nombreEjercicio = await obtenerNombreEjercicio(
                actividad.idEjercicio
            );
            console.log(nombreEjercicio);
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