import { config } from "../data/config";

/**
 * Genera un link de WhatsApp con un mensaje pre-cargado.
 * @param {string} message - Texto del mensaje.
 * @returns {string} URL de wa.me lista para usar en href.
 */
export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${config.whatsappNumber}?text=${encoded}`;
}

export function whatsappForPiece(pieceName) {
  return buildWhatsAppLink(
    `Hola! Vi "${pieceName}" en el catálogo de Eliseo Joyas y quiero consultar por esta pieza.`
  );
}

export function whatsappForCustom() {
  return buildWhatsAppLink(
    "Hola! Quiero consultar por una pieza personalizada de Eliseo Joyas."
  );
}

export function whatsappGeneral() {
  return buildWhatsAppLink("Hola! Quiero hacer una consulta a Eliseo Joyas.");
}
