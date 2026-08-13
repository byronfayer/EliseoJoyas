import { pieces } from "../data/pieces";
import PieceArt from "./PieceArt";
import { whatsappForPiece } from "../utils/whatsapp";
import "./Catalog.css";

export default function Catalog() {
  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Catálogo</span>
          <h2>Piezas de referencia</h2>
          <p>
            Un punto de partida, no un límite. Cada pieza se puede ajustar en
            medida, material y detalle según lo que estés buscando —
            consultanos y lo conversamos.
          </p>
        </div>

        <div className="catalog-grid">
          {pieces.map((piece) => (
            <article className="piece-card" key={piece.id}>
              <div className="piece-media">
                {piece.image ? (
                  <img src={piece.image} alt={piece.name} loading="lazy" />
                ) : (
                  <PieceArt type={piece.type} />
                )}
              </div>
              <div className="piece-body">
                <div className="piece-heading">
                  <h3>{piece.name}</h3>
                  <span className="piece-type">{piece.typeLabel}</span>
                </div>
                <p className="piece-desc">{piece.description}</p>
                <a
                  href={whatsappForPiece(piece.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn piece-btn"
                >
                  Consultar
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
