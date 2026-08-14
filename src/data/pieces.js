// ─────────────────────────────────────────────────────────
// CATÁLOGO — cada objeto es una pieza.
// "image" es opcional: si no existe, se muestra un grabado
// de línea generado (ver PieceArt.jsx). Para usar una foto
// real, poné la ruta en "image" (ej: "/images/anillo-01.jpg").
// "type" acepta: "anillo" | "collar" | "aro" | "pulsera" | "otro"
// ─────────────────────────────────────────────────────────

export const pieces = [
  {
    id: "p1",
    name: "Vestigio",
    type: "anillo",
    typeLabel: "Anillo",
    description:
      "Anillo de línea angosta con textura martillada a mano. Pensado para combinarse en capas o llevarse solo.",
image: "/images/Anillo1.jpg",  },
  {
    id: "p2",
    name: "Umbral",
    type: "collar",
    typeLabel: "Collar",
    description:
      "Cadena fina con dije geométrico suspendido en ángulo. Un punto de silencio sobre la piel.",
    image: "/images/Anillo2.jpg",
  },
  {
    id: "p3",
    name: "Nocturna",
    type: "aro",
    typeLabel: "Aros",
    description:
      "Par de aros asimétricos en distintas alturas. Una pieza para quien no busca simetría, sino carácter.",
    image: "/images/Anillo3.jpg",
  },
  {
    id: "p4",
    name: "Cauce",
    type: "pulsera",
    typeLabel: "Pulsera",
    description:
      "Pulsera de eslabones irregulares, cada uno forjado por separado y ensamblado a mano.",
    image: null,
  },
  {
    id: "p5",
    name: "Reliquia",
    type: "collar",
    typeLabel: "Collar",
    description:
      "Colgante macizo con grabado interior invisible, reservado para una fecha o una palabra propia.",
    image: null,
  },
  {
    id: "p6",
    name: "Filo",
    type: "anillo",
    typeLabel: "Anillo",
    description:
      "Anillo ancho de perfil recto, superficie mate con un corte pulido al centro.",
    image: null,
  },
];

export default pieces;
