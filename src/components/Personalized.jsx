import { whatsappForCustom } from "../utils/whatsapp";
import "./Personalized.css";

const steps = [
  {
    label: "Contanos la idea",
    text: "Un material, una fecha, una inicial, una foto de referencia. No hace falta que esté definido: partimos de lo que tengas.",
  },
  {
    label: "Diseñamos la pieza",
    text: "Te proponemos boceto, materiales posibles y tiempos antes de forjar nada.",
  },
  {
    label: "Se forja a mano",
    text: "Cada pieza se hace una por una. Vas a poder ver el avance antes de la entrega final.",
  },
];

export default function Personalized() {
  return (
    <section id="personalizados" className="custom">
      <div className="custom-bg" aria-hidden="true" />
      <div className="container custom-inner">
        <div className="custom-copy">
          <span className="eyebrow">Piezas personalizadas</span>
          <h2>Diseñada para una sola persona: vos.</h2>
          <p>
            En Eliseo Joyas no partimos de un molde. Cada encargo se piensa
            desde cero según lo que quieras contar: una fecha grabada por
            dentro, una piedra elegida, una forma que no existe en ningún
            otro lado. Contanos qué tenés en mente y lo construimos juntos.
          </p>
          <a
            href={whatsappForCustom()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <ol className="custom-steps">
          {steps.map((step, i) => (
            <li key={step.label} className="custom-step">
              <span className="custom-step-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.label}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
