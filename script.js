const materias = [
  {
    semestre: "1° semestre",
    materias: [
      { nombre: "Introducción a la Biología Celular y Molecular", estado: "pendiente" },
      { nombre: "Introducción a la Bioestadística", estado: "pendiente" },
      { nombre: "Salud y Humanidades y Bioética", estado: "pendiente" },
      { nombre: "Aprendizaje en Territorio 1", estado: "pendiente" }
    ]
  },
  {
    semestre: "2° semestre",
    materias: [
      { nombre: "Biología Celular y Molecular", estado: "pendiente" },
      { nombre: "Aprendizaje en Territorio 2", estado: "pendiente" }
    ]
  },
  {
    semestre: "3° semestre",
    materias: [
      { nombre: "Anatomía", estado: "pendiente" },
      { nombre: "Histología y Embriología", estado: "pendiente" }
    ]
  },
  {
    semestre: "4° semestre",
    materias: [
      { nombre: "Histología II", estado: "pendiente" },
      { nombre: "Neurociencias", estado: "pendiente" },
      { nombre: "Cardiovascular", estado: "pendiente" }
    ]
  }
];

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  materias.forEach(bloque => {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";

    const title = document.createElement("h2");
    title.textContent = bloque.semestre;
    semDiv.appendChild(title);

    bloque.materias.forEach(materia => {
      const matDiv = document.createElement("div");
      matDiv.className = `materia ${materia.estado}`;
      matDiv.textContent = materia.nombre;

      matDiv.addEventListener("click", () => {
        const estados = ["pendiente", "regular", "aprobada"];
        const i = estados.indexOf(materia.estado);
        materia.estado = estados[(i + 1) % estados.length];
        renderMalla();
      });

      semDiv.appendChild(matDiv);
    });

    container.appendChild(semDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderMalla);
