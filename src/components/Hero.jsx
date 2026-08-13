import Hallmark from "./Hallmark";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-vignette" />
        <div className="hero-grain" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Joyería personalizada · Córdoba</span>
          <h1 className="hero-title">Eliseo Joyas</h1>
          <p className="hero-tagline">Joyas creadas para vos.</p>
          <p className="hero-sub">
            Cada pieza se piensa, se dibuja y se forja a partir de un pedido
            propio. Sin catálogos repetidos, sin precios de vidriera: una
            joya que no existía antes de que la pidieras.
          </p>
          <div className="hero-actions">
            <a href="#catalogo" className="btn btn-primary">
              Ver catálogo
            </a>
            <a href="#personalizados" className="btn">
              Crear una pieza propia
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-ring" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="hero-ring-svg">
              <circle cx="200" cy="230" r="118" className="hr-band" />
              <path d="M150 130 L200 40 L250 130" className="hr-prong" />
              <circle cx="200" cy="122" r="22" className="hr-stone" />
              <circle cx="200" cy="122" r="22" className="hr-stone-facet" />
            </svg>
          </div>
          <div className="hero-visual-frame">
            <Hallmark size={54} className="hero-hallmark" />
            <span className="hero-visual-caption">
              Pieza a medida — boceto de taller
            </span>
          </div>
        </div>
      </div>

      <a href="#catalogo" className="hero-scroll" aria-label="Bajar al catálogo">
        <span />
      </a>
    </section>
  );
}
