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
        { id: "lab1", nombre: "Laboratorio I", requisitosAprobada: [], requisitosRegular: ["prog1"] } // Requiere regular
      ]
    ]
  },
  {
    año: "2° Año",
    cuatrimestres: [
      [
        { id: "prog2", nombre: "Programación II", requisitosAprobada: ["prog1"], requisitosRegular: [] },
        { id: "mat3", nombre: "Matemática III", requisitosAprobada: ["mat2"], requisitosRegular: [] }
      ],
      [
        { id: "fis2", nombre: "Física II", requisitosAprobada: ["fis1"], requisitosRegular: ["mat2"] },
        { id: "lab2", nombre: "Laboratorio II", requisitosAprobada: [], requisitosRegular: ["lab1", "TyL"] } // Dos prereqs regulares
      ]
    ]
  },
  // Agregá 3, 4 y 5° años con similar estructura
  {
    año: "3° Año",
    cuatrimestres: [
      [
        { id: "matec", nombre: "Matemática Aplicada", requisitosAprobada: ["mat3"], requisitosRegular: [] },
        { id: "prog3", nombre: "Programación III", requisitosAprobada: ["prog2"], requisitosRegular: [] }
      ],
      [
        { id: "fis3", nombre: "Física III", requisitosAprobada: ["fis2"], requisitosRegular: ["matec"] }
      ]
    ]
  },
  {
    año: "4° Año",
    cuatrimestres: [
      [
        { id: "ingSoft", nombre: "Ingeniería de Software", requisitosAprobada: ["prog3"], requisitosRegular: [] }
      ],
      [
        { id: "proy", nombre: "Proyecto Final", requisitosAprobada: ["ingSoft"], requisitosRegular: ["fis3"] }
      ]
    ]
  },
  {
    año: "5° Año",
    cuatrimestres: [
      [
        { id: "tesis", nombre: "Tesis", requisitosAprobada: ["proy"], requisitosRegular: [] }
      ],
      [
        { id: "optativa", nombre: "Materia Optativa", requisitosAprobada: [], requisitosRegular: [] }
      ]
    ]
  }
];
