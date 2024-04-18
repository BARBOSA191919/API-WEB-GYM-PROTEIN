// Arreglos para almacenar datos de ejercicios, días de la semana y zonas del cuerpo
const regEjercicios = [];
const regSemana = [];
const regZonaCuerpo = [];
const contenedor = document.getElementById("ejercicios-container");
// Id del ejercicio actualmente seleccionado
let ejercicioId = 0;

// Solicita y almacena datos de ejercicios
const fetchEjercicios = fetch("http://localhost:8080/ejercicio/listar")
  .then((response) => response.json())
  .then((data) => {
    regEjercicios.push(...data);
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos de ejercicios:", error);
  });

// Solicita y almacena datos de días de la semana
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

// Solicita y almacena datos de zonas del cuerpo
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

// Espera a que todas las solicitudes se completen
Promise.all([fetchEjercicios, fetchSemana, fetchZonaCuerpo])
  .then(() => {
    // Procesa cada ejercicio obtenido
    regEjercicios.forEach((ejercicio) => {
      // Encuentra la zona del cuerpo correspondiente al ejercicio
      const zonaCuerpo = regZonaCuerpo.find(
        (zonaCuerpo) => zonaCuerpo.id === ejercicio.idZonaCuerpo
      );

      // Crea la tarjeta de ejercicio con información y botones de actualizar y eliminar
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

      // Agrega la tarjeta al contenedor
      contenedor.insertAdjacentHTML("beforeend", card);
    });
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos:", error);
  });

// Espera a que todas las solicitudes se completen y luego asigna eventos a los botones de actualizar
Promise.all([fetchEjercicios, fetchSemana, fetchZonaCuerpo]).then(() => {
  const updateButtons = document.querySelectorAll(".update-ejercicio");
  updateButtons.forEach((button) => {
    button.addEventListener("click", handleUpdateClick);
  });
});

// Espera a que todas las solicitudes se completen y luego asigna eventos a los botones de eliminar
Promise.all([fetchEjercicios, fetchSemana, fetchZonaCuerpo]).then(() => {
  const deleteButtons = document.querySelectorAll(".delete-ejercicio");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDeleteClick);
  });
});

// Función para manejar el evento de clic en el botón de eliminar ejercicio
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

// Función para manejar el evento de clic en el botón de actualizar ejercicio
function handleUpdateClick(event) {
  ejercicioId = event.target.getAttribute("data-id");
  const selectedEjercicio = regEjercicios.find(
    (ejercicio) => ejercicio.id == ejercicioId
  );

  // Obtiene los elementos del formulario de edición de ejercicio
  const InputnombreEjercicioEditar = document.getElementById(
    "nombreEjercicioEditar"
  );

  const InputdescripcionEjercicioEditar = document.getElementById(
    "descripcionEjercicioEditar"
  );

  const InputidZonaCuerpoEditar = document.getElementById("idZonaCuerpoEditar");

  // Llena el formulario con los datos del ejercicio seleccionado
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

  // Agrega un evento de envío al formulario de edición
  document
    .getElementById("formEditarEjercicio")
    .addEventListener("submit", () => {
      const nombreEjercicio = InputnombreEjercicioEditar.value;
      const descripcionEjercicio = InputdescripcionEjercicioEditar.value;
      const idZonaCuerpo = InputidZonaCuerpoEditar.value;

      // Crea el objeto con los datos actualizados del ejercicio
      const updatedEjercicio = {
        nombre: nombreEjercicio,
        descripcion: descripcionEjercicio,
        idZonaCuerpo: idZonaCuerpo,
      };

      // Envia la solicitud de actualización al servidor
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

// Agrega un evento de clic al botón de crear nuevo ejercicio
const botonCrear = document.getElementById("btnNuevoEjercicio");

botonCrear.addEventListener("click", () => {
  const InputnombreEjercicio = document.getElementById("nombreEjercicio");

  const InputdescripcionEjercicio = document.getElementById(
    "descripcionEjercicio"
  );

  const InputidZonaCuerpo = document.getElementById("idZonaCuerpo");

  // Llena el select con las opciones de zonas del cuerpo
  regZonaCuerpo.forEach((zonaCuerpo) => {
    const option = document.createElement("option");
    option.value = zonaCuerpo.id;
    option.textContent = zonaCuerpo.nombre;
    InputidZonaCuerpo.appendChild(option);
  });

  // Agrega un evento de envío al formulario de creación de ejercicio
  document
    .getElementById("formNuevoEjercicio")
    .addEventListener("submit", () => {
      const nombreEjercicio = InputnombreEjercicio.value;
      const descripcionEjercicio = InputdescripcionEjercicio.value;
      const idZonaCuerpo = InputidZonaCuerpo.value;

      // Crea el objeto con los datos del nuevo ejercicio
      const updatedEjercicio = {
        nombre: nombreEjercicio,
        descripcion: descripcionEjercicio,
        idZonaCuerpo: idZonaCuerpo,
      };

      // Envia la solicitud de creación al servidor
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
