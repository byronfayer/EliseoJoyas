import wordmark from "../assets/logo-wordmark.png";
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
          <img src={wordmark} alt="Eliseo" className="hero-title-img" />
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
      </div>

      <a href="#catalogo" className="hero-scroll" aria-label="Bajar al catálogo">
        <span />
      </a>
    </section>
  );
}
