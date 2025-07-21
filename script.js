const mallaData = {
  ingreso: ["Curso de ingreso"],
  años: [
    {
      año: 1,
      cuatrimestres: [
        {
          cuatri: 1,
          materias: [
            {
              nombre: "Álgebra",
              codigo: "MATH101",
              estado: "aprobada",
              prerrequisitos: []
            },
            {
              nombre: "Física I",
              codigo: "PHYS101",
              estado: "regular",
              prerrequisitos: [
                {
                  codigo: "MATH101",
                  tipo: "aprobada"
                }
              ]
            }
          ]
        },
        {
          cuatri: 2,
          materias: [
            {
              nombre: "Análisis Matemático I",
              codigo: "MATH102",
              estado: "pendiente",
              prerrequisitos: [
                { codigo: "MATH101", tipo: "aprobada" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function crearMateria(materia) {
  const div = document.createElement("div");
  div.className = `materia ${materia.estado}`;
  div.textContent = materia.nombre;

  if (materia.prerrequisitos.length > 0) {
    const reqs = materia.prerrequisitos.map(req => `${req.codigo} (${req.tipo})`).join(", ");
    div.title = `Prerrequisitos: ${reqs}`;
  } else {
    div.title = "Sin prerrequisitos";
  }

  // (opcional) cambiar estado al hacer click
  div.addEventListener("click", () => {
    const estados = ["pendiente", "regular", "aprobada"];
    const index = estados.indexOf(materia.estado);
    materia.estado = estados[(index + 1) % estados.length];
    div.className = `materia ${materia.estado}`;
  });

  return div;
}

function renderMalla(data) {
  const container = document.getElementById("malla-container");

  data.años.forEach(año => {
    const añoDiv = document.createElement("div");
    añoDiv.className = "año";
    añoDiv.innerHTML = `<h2>Año ${año.año}</h2>`;

    año.cuatrimestres.forEach(cuatri => {
      const cuatriDiv = document.createElement("div");
      cuatriDiv.className = "cuatrimestre";
      cuatriDiv.innerHTML = `<h3>Cuatrimestre ${cuatri.cuatri}</h3>`;

      cuatri.materias.forEach(materia => {
        const materiaDiv = crearMateria(materia);
        cuatriDiv.appendChild(materiaDiv);
      });

      añoDiv.appendChild(cuatriDiv);
    });

    container.appendChild(añoDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMalla(mallaData);
});
