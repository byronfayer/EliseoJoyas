

// Logo de la marca (proporcionado por el cliente): la "E" coronada.
export default function Hallmark({ size = 40, className = "" }) {
  return (
    <img
      src="/images/logo-mark.png"
      alt="Eliseo"
      width={size}
      height={size}
      className={`hallmark ${className}`}
      style={{ objectFit: "contain" }}
    />
  );
}
