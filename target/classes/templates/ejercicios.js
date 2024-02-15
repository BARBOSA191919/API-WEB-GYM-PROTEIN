const regEjercicios = [];
const regSemana = [];
const regZonaCuerpo = [];
const contenedor = document.getElementById("ejercicios-container");
let ejercicioId = 0;

const fetchEjercicios = fetch("http://localhost:8080/ejercicio/listar")
  .then((response) => response.json())
  .then((data) => {
    regEjercicios.push(...data);
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos de ejercicios:", error);
  });

const fetchSemana = fetch("http://localhost:8080/diaSemana/listar")
  .then((response) => response.json())
  .then((data) => {
    regSemana.push(...data);
  })
  .catch((error) => {
    console.error(
      "Hubo un error al obtener los datos de días de la semana:",
      error
    );
  });

const fetchZonaCuerpo = fetch("http://localhost:8080/zonaCuerpo/listar")
  .then((response) => response.json())
  .then((data) => {
    regZonaCuerpo.push(...data);
  })
  .catch((error) => {
    console.error(
      "Hubo un error al obtener los datos de zonas del cuerpo:",
      error
    );
  });

Promise.all([fetchEjercicios, fetchSemana, fetchZonaCuerpo])
  .then(() => {
    regEjercicios.forEach((ejercicio) => {
      const zonaCuerpo = regZonaCuerpo.find(
        (zonaCuerpo) => zonaCuerpo.id === ejercicio.idZonaCuerpo
      );

      const card = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${ejercicio.nombre}</h5>
          <p class="card-text">${ejercicio.descripcion}</p>
          <p class="card-text">${`Zona del Cuerpo: ${zonaCuerpo.nombre}`}</p>
          <button class="btn btn-primary update-ejercicio" data-id="${
            ejercicio.id
          }" data-toggle="modal" data-target="#editarEjercicio">Actualizar</button>
          <button class="btn btn-danger delete-ejercicio" data-id="${
            ejercicio.id
          }">Eliminar</button>
        </div>
      </div>
    `;

      contenedor.insertAdjacentHTML("beforeend", card);
    });
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos:", error);
  });

Promise.all([fetchEjercicios, fetchSemana, fetchZonaCuerpo]).then(() => {
  const updateButtons = document.querySelectorAll(".update-ejercicio");
  updateButtons.forEach((button) => {
    button.addEventListener("click", handleUpdateClick);
  });
});

Promise.all([fetchEjercicios, fetchSemana, fetchZonaCuerpo]).then(() => {
  const deleteButtons = document.querySelectorAll(".delete-ejercicio");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDeleteClick);
  });
});

function handleDeleteClick(event) {
  const ejercicioId = event.target.getAttribute("data-id");
  fetch(`http://localhost:8080/ejercicio/eliminar/${ejercicioId}`, {
    method: "DELETE",
  })
    .then((data) => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Hubo un error al eliminar el ejercicio:", error);
    });
}

function handleUpdateClick(event) {
  ejercicioId = event.target.getAttribute("data-id");
  const selectedEjercicio = regEjercicios.find(
    (ejercicio) => ejercicio.id == ejercicioId
  );

  const InputnombreEjercicioEditar = document.getElementById(
    "nombreEjercicioEditar"
  );

  const InputdescripcionEjercicioEditar = document.getElementById(
    "descripcionEjercicioEditar"
  );

  const InputidZonaCuerpoEditar = document.getElementById("idZonaCuerpoEditar");

  InputidZonaCuerpoEditar.innerHTML = "";

  regZonaCuerpo.forEach((zonaCuerpo) => {
    const option = document.createElement("option");
    option.value = zonaCuerpo.id;
    option.textContent = zonaCuerpo.nombre;
    InputidZonaCuerpoEditar.appendChild(option);
  });

  InputnombreEjercicioEditar.value = selectedEjercicio.nombre;
  InputdescripcionEjercicioEditar.value = selectedEjercicio.descripcion;
  InputidZonaCuerpoEditar.value = selectedEjercicio.idZonaCuerpo;

  document
    .getElementById("formEditarEjercicio")
    .addEventListener("submit", () => {
      const nombreEjercicio = InputnombreEjercicioEditar.value;
      const descripcionEjercicio = InputdescripcionEjercicioEditar.value;
      const idZonaCuerpo = InputidZonaCuerpoEditar.value;

      const updatedEjercicio = {
        nombre: nombreEjercicio,
        descripcion: descripcionEjercicio,
        idZonaCuerpo: idZonaCuerpo,
      };

      fetch(`http://localhost:8080/ejercicio/actualizar/${ejercicioId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEjercicio),
      }).then((data) => {
        window.location.reload();
      });
    });
}

const botonCrear = document.getElementById("btnNuevoEjercicio");

botonCrear.addEventListener("click", () => {
  const InputnombreEjercicio = document.getElementById("nombreEjercicio");

  const InputdescripcionEjercicio = document.getElementById(
    "descripcionEjercicio"
  );

  const InputidZonaCuerpo = document.getElementById("idZonaCuerpo");

  regZonaCuerpo.forEach((zonaCuerpo) => {
    const option = document.createElement("option");
    option.value = zonaCuerpo.id;
    option.textContent = zonaCuerpo.nombre;
    InputidZonaCuerpo.appendChild(option);
  });

  document
    .getElementById("formNuevoEjercicio")
    .addEventListener("submit", () => {
      const nombreEjercicio = InputnombreEjercicio.value;
      const descripcionEjercicio = InputdescripcionEjercicio.value;
      const idZonaCuerpo = InputidZonaCuerpo.value;

      const updatedEjercicio = {
        nombre: nombreEjercicio,
        descripcion: descripcionEjercicio,
        idZonaCuerpo: idZonaCuerpo,
      };

      fetch(`http://localhost:8080/ejercicio/crear`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEjercicio),
      }).then((data) => {
        window.location.reload();
      });
    });
});
