// Grabados de línea usados como reemplazo visual mientras no
// haya fotografía real de producto. Cada tipo de pieza tiene
// su propio trazo, dibujado como si fuera un boceto de taller.

function RingArt() {
  return (
    <svg viewBox="0 0 200 200" className="piece-art">
      <circle cx="100" cy="120" r="52" />
      <path d="M78 70 L100 34 L122 70" />
      <circle cx="100" cy="66" r="8" />
    </svg>
  );
}

function NecklaceArt() {
  return (
    <svg viewBox="0 0 200 200" className="piece-art">
      <path d="M40 40 C40 110 160 110 160 40" />
      <path d="M100 108 L100 150 L84 168 L116 168 Z" />
    </svg>
  );
}

function EarringArt() {
  return (
    <svg viewBox="0 0 200 200" className="piece-art">
      <circle cx="72" cy="56" r="10" />
      <path d="M72 66 L72 110 L58 150" />
      <circle cx="130" cy="56" r="10" />
      <path d="M130 66 L130 96 L146 126" />
    </svg>
  );
}

function BraceletArt() {
  return (
    <svg viewBox="0 0 200 200" className="piece-art">
      <ellipse cx="100" cy="100" rx="70" ry="34" />
      <path d="M46 92 L60 108 M84 84 L96 112 M120 84 L132 112 M154 92 L142 108" />
    </svg>
  );
}

function DefaultArt() {
  return (
    <svg viewBox="0 0 200 200" className="piece-art">
      <path d="M60 50 L140 50 L100 150 Z" />
      <path d="M60 50 L100 90 L140 50" />
      <path d="M100 90 L100 150" />
    </svg>
  );
}

const artByType = {
  anillo: RingArt,
  collar: NecklaceArt,
  aro: EarringArt,
  pulsera: BraceletArt,
};

export default function PieceArt({ type }) {
  const Art = artByType[type] || DefaultArt;
  return (
    <div className="piece-art-wrap">
      <Art />
    </div>
  );
}
