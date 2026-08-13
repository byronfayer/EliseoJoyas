// Sello / hallmark de la marca: un monograma E+J dentro de un
// sello circular, al estilo de la marca de contraste que los
// joyeros graban en sus piezas. Es el elemento firma del sitio:
// aparece en el nav, el hero, los separadores y el footer.

export default function Hallmark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`hallmark ${className}`}
      role="img"
      aria-label="Sello Eliseo Joyas"
    >
      <circle cx="32" cy="32" r="30" className="hallmark-ring" />
      <circle cx="32" cy="32" r="25" className="hallmark-ring-inner" />
      <path
        d="M22 21 H31 M22 21 V43 M22 32 H29 M22 43 H31"
        className="hallmark-mark"
        strokeLinecap="square"
      />
      <path
        d="M35 21 C42 21 44 26 44 32 C44 38 42 43 35 43"
        className="hallmark-mark"
        strokeLinecap="square"
      />
    </svg>
  );
}
