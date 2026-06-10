import { elements } from './state.js';

export const initContact = () => {
  // Acciones de Contacto Interactivos (celular y fijo directo a WhatsApp)
  document.querySelectorAll('.whatsapp-action').forEach(card => {
    card.addEventListener('click', () => {
      const phone = card.getAttribute('data-phone');
      const text = card.getAttribute('data-text');
      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  });

  // Modal del mapa de la carnicería sucursal física
  if (elements.addressCard && elements.mapModal) {
    elements.addressCard.addEventListener('click', () => {
      elements.mapModal.classList.remove('hidden');
    });
  }
  
  if (elements.closeMapModal && elements.mapModal) {
    elements.closeMapModal.addEventListener('click', () => {
      elements.mapModal.classList.add('hidden');
    });
  }
  
  if (elements.mapModal) {
    elements.mapModal.addEventListener('click', (e) => {
      if (e.target === elements.mapModal) {
        elements.mapModal.classList.add('hidden');
      }
    });
  }
};
