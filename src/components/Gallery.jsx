import { gallery } from "../data/gallery";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Galería</span>
          <h2>Trabajos realizados</h2>
          <p>
            Una muestra de piezas entregadas y encargos personalizados.
            Cada una tiene su propia historia detrás.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className={`gallery-item gallery-${item.size}`} key={item.id}>
              <div className="gallery-media">
                {item.image ? (
                  <img src={item.image} alt={item.caption} loading="lazy" />
                ) : (
                  <div className="gallery-placeholder" aria-hidden="true" />
                )}
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
