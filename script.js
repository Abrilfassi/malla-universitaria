const materias = [
  { id: "mat1", nombre: "Matemática I", requisitos: [] },
  { id: "fis1", nombre: "Física I", requisitos: ["mat1"] },
  { id: "prog1", nombre: "Programación I", requisitos: [] },
  { id: "mat2", nombre: "Matemática II", requisitos: ["mat1"] },
  { id: "fis2", nombre: "Física II", requisitos: ["fis1", "mat2"] }
];

const estados = JSON.parse(localStorage.getItem("estados")) || {};

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
  return materia.requisitos.every(req => estados[req] === "aprobada");
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  materias.forEach(m => {
    const estado = estados[m.id] || "nada";
    const div = document.createElement("div");
    div.className = "materia";
    if (estado) div.classList.add(estado);
    if (!desbloqueada(m)) div.classList.add("bloqueada");

    div.innerHTML = `<strong>${m.nombre}</strong><div class="estado">${estado || "no cursada"}</div>`;
    if (desbloqueada(m)) {
      div.onclick = () => cambiarEstado(m.id);
    }
    contenedor.appendChild(div);
  });
}

renderMalla();
