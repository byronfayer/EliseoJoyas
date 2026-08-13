import { config } from "../data/config";
import { whatsappGeneral } from "../utils/whatsapp";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact-inner">
        <div className="section-head contact-head">
          <span className="eyebrow">Contacto</span>
          <h2>Empecemos una pieza.</h2>
          <p>
            Escribinos y contanos qué tenés en mente. Respondemos por
            WhatsApp o Instagram, lo que te resulte más cómodo.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href={whatsappGeneral()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-label">WhatsApp</span>
            <span className="contact-value">Escribir directo</span>
          </a>

          <a
            className="contact-card"
            href={config.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-label">Instagram</span>
            <span className="contact-value">{config.instagram.handle}</span>
          </a>

          {config.location && (
            <div className="contact-card contact-card-static">
              <span className="contact-label">Ubicación</span>
              <span className="contact-value">{config.location}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
