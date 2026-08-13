import Hallmark from "./Hallmark";
import { config } from "../data/config";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Hallmark size={26} />
          <span>{config.brand}</span>
        </div>
        <p className="footer-note">
          Piezas hechas a pedido. {year} © {config.brand}.
        </p>
      </div>
    </footer>
  );
}
