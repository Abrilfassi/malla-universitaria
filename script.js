// MATERIAS ORDENADAS POR AÑO Y CUATRIMESTRE
const plan = [
  {
    año: "1° Año",
    cuatrimestres: [
      [
        { id: "mat1", nombre: "Matemática I", requisitos: [] },
        { id: "prog1", nombre: "Programación I", requisitos: [] }
      ],
      [
        { id: "fis1", nombre: "Física I", requisitos: ["mat1"] },
        { id: "alg1", nombre: "Álgebra I", requisitos: [] }
      ]
    ]
  },
  {
    año: "2° Año",
    cuatrimestres: [
      [
        { id: "mat2", nombre: "Matemática II", requisitos: ["mat1"] },
        { id: "prog2", nombre: "Programación II", requisitos: ["prog1"] }
      ],
      [
        { id: "fis2", nombre: "Física II", requisitos: ["fis1", "mat2"] }
      ]
    ]
  }
];

// ESTADOS GUARDADOS
const estados = JSON.parse(localStorage.getItem("estados")) || {};

// FUNCIONES
function guardarEstado() {
  localStorage.setItem("estados", JSON.stringify(estados));
}

function cambiarEstado(id) {
  const actual = estados[id] || "nada";
  const nuevo = actual === "nada" ? "regular" : actual === "regular" ? "aprobada" : "nada";
  estados[id] = nuevo;
  guardarEstado();
  renderMalla();
}

function desbloqueada(materia) {
  return materia.requisitos.every(id => estados[id] === "aprobada");
}

// RENDER
function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  plan.forEach(bloque => {
    const divAño = document.createElement("div");
    divAño.className = "año";
    const titulo = document.createElement("h2");
    titulo.className = "titulo-año";
    titulo.textContent = bloque.año;
    divAño.appendChild(titulo);

    bloque.cuatrimestres.forEach((cuatri, index) => {
      const divCuatri = document.createElement("div");
      divCuatri.className = "cuatrimestre";
      const label = document.createElement("p");
      label.innerHTML = `<strong>${index + 1}° Cuatrimestre</strong>`;
      divAño.appendChild(label);

      cuatri.forEach(m => {
        const estado = estados[m.id] || "nada";
        const divMateria = document.createElement("div");
        divMateria.className = "materia";
        if (estado) divMateria.classList.add(estado);
        if (!desbloqueada(m)) divMateria.classList.add("bloqueada");

        divMateria.innerHTML = `<strong>${m.nombre}</strong><div class="estado">${estado || "no cursada"}</div>`;
        if (desbloqueada(m)) {
          divMateria.onclick = () => cambiarEstado(m.id);
        }
        divCuatri.appendChild(divMateria);
      });

      divAño.appendChild(divCuatri);
    });

    contenedor.appendChild(divAño);
  });
}

renderMalla();
