const plan = [
  {
    año: "Ingreso ",
     [
      [
        { id: "mat", nombre: "Matemática " },
        { id: "FyQ", nombre: "Física y Química " }
        { id: "AU", nombre: "Ambientación Universitaria " }
      ],
      [
        { id: "AM1", nombre: "Análisis Matemático 1", requisitosAprobada: ["mat"] },
        { id: "Química", nombre: "Química", requisitosAprobada: ["FyQ"] },
        { id: "TyL", nombre: "Taller y Laboratorio", requisitosAprobada: ["mat","AU"] },
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


    contenedor.appendChild(divAño);
  });
}

renderMalla();
