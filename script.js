const plan = [
  {
    año: "Ingreso",
    cuatrimestres: [
      [
        { id: "mat", nombre: "Matemática", requisitosAprobada: [], requisitosRegular: [] },
        { id: "FyQ", nombre: "Física y Química", requisitosAprobada: [], requisitosRegular: [] },
        { id: "AU", nombre: "Ambientación Universitaria", requisitosAprobada: [], requisitosRegular: [] }
      ],
      [
        { id: "AM1", nombre: "Análisis Matemático 1", requisitosAprobada: ["mat"], requisitosRegular: [] },
        { id: "Quim", nombre: "Química", requisitosAprobada: ["FyQ"], requisitosRegular: [] },
        { id: "TyL", nombre: "Taller y Laboratorio", requisitosAprobada: ["mat","AU"], requisitosRegular: [] }
      ]
    ]
  },
  {
    año: "1° Año",
    cuatrimestres: [
      [
        { id: "prog1", nombre: "Programación I", requisitosAprobada: [], requisitosRegular: [] },
        { id: "mat2", nombre: "Matemática II", requisitosAprobada: ["AM1"], requisitosRegular: [] }
      ],
      [
        { id: "fis1", nombre: "Física I", requisitosAprobada: [], requisitosRegular: [] },
        { id: "lab1", nombre: "Laboratorio I", requisitosAprobada: [], requisitosRegular: ["prog1"] }
      ]
    ]
  },
  // resto de años igual...
  {
    año: "2° Año",
    cuatrimestres: [
      [
        { id: "prog2", nombre: "Programación II", requisitosAprobada: ["prog1"], requisitosRegular: [] },
        { id: "mat3", nombre: "Matemática III", requisitosAprobada: ["mat2"], requisitosRegular: [] }
      ],
      [
        { id: "fis2", nombre: "Física II", requisitosAprobada: ["fis1"], requisitosRegular: ["mat2"] },
        { id: "lab2", nombre: "Laboratorio II", requisitosAprobada: [], requisitosRegular: ["lab1", "TyL"] }
      ]
    ]
  }
  // y así seguís con 3°, 4°, 5°
];

function renderMalla() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  plan.forEach(anioObj => {
    const divAnio = document.createElement("div");
    divAnio.className = "anio";

    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = anioObj.año;
    divAnio.appendChild(tituloAnio);

    if (anioObj.año.toLowerCase().includes("ingreso")) {
      anioObj.cuatrimestres.forEach((bloque, index) => {
        const divBloque = document.createElement("div");
        divBloque.className = "bloque-ingreso";

        const tituloBloque = document.createElement("h3");
        tituloBloque.textContent = `Bloque ${index + 1}`;
        divBloque.appendChild(tituloBloque);

        const ulMaterias = document.createElement("ul");

        bloque.forEach(materia => {
          const li = document.createElement("li");
          const requisitosA = materia.requisitosAprobada.length ? `Aprobada: ${materia.requisitosAprobada.join(", ")}` : "";
          const requisitosR = materia.requisitosRegular.length ? `Regular: ${materia.requisitosRegular.join(", ")}` : "";
          const textoReq = [requisitosA, requisitosR].filter(Boolean).join(" / ");

          li.textContent = `${materia.nombre} ${textoReq ? `(${textoReq})` : ""}`;
          ulMaterias.appendChild(li);
        });

        divBloque.appendChild(ulMaterias);
        divAnio.appendChild(divBloque);
      });
    } else {
      anioObj.cuatrimestres.forEach((cuatri, index) => {
        const divCuatri = document.createElement("div");
        divCuatri.className = "cuatrimestre";

        const tituloCuatri = document.createElement("h3");
        tituloCuatri.textContent = `Cuatrimestre ${index + 1}`;
        divCuatri.appendChild(tituloCuatri);

        const ulMaterias = document.createElement("ul");

        cuatri.forEach(materia => {
          const li = document.createElement("li");
          const requisitosA = materia.requisitosAprobada.length ? `Aprobada: ${materia.requisitosAprobada.join(", ")}` : "";
          const requisitosR = materia.requisitosRegular.length ? `Regular: ${materia.requisitosRegular.join(", ")}` : "";
          const textoReq = [requisitosA, requisitosR].filter(Boolean).join(" / ");

          li.textContent = `${materia.nombre} ${textoReq ? `(${textoReq})` : ""}`;
          ulMaterias.appendChild(li);
        });

        divCuatri.appendChild(ulMaterias);
        divAnio.appendChild(divCuatri);
      });
    }

    contenedor.appendChild(divAnio);
  });
}

renderMalla();
