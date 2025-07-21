const plan = [
  {
    año: "1° Año",
    cuatrimestres: [
      [
        { id: "mat1", nombre: "Matemática I" },
        { id: "prog1", nombre: "Programación I" }
      ],
      [
        { id: "fis1", nombre: "Física I", requisitosRegular: ["mat1"] },
        { id: "alg1", nombre: "Álgebra I" }
      ]
    ]
  },
  {
    año: "2° Año",
    cuatrimestres: [
      [
        { id: "mat2", nombre: "Matemática II", requisitosAprobada: ["mat1"] },
        { id: "prog2", nombre: "Programación II", requisitosAprobada: ["prog1"] }
      ],
      [
        { id: "fis2", nombre: "Física II", requisitosAprobada: ["fis1"], requisitosRegular: ["mat2"] }
      ]
    ]
  }
];


    container.appendChild(semDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderMalla);
