import { elements } from './state.js';
import { initAudioContext } from './audio.js';
import { renderPromoSlider, renderPromotions, triggerPushNotification } from './promos.js';
import { renderProducts } from './catalog.js';
import { renderBestsellers } from './bestsellers.js';
import { loadClientData } from './cart.js';

export const enterApplication = () => {
  try {
    initAudioContext();
  } catch (e) {
    console.warn("Could not initialize AudioContext:", e);
  }
  
  const welcome = elements.welcomeScreen;
  const shell = elements.appShell;
  
  if (welcome) welcome.classList.remove('active');
  if (shell) shell.classList.remove('hidden');
  
  // Renderizar vistas iniciales de manera robusta
  try { renderPromoSlider(); } catch (e) { console.error("Error in renderPromoSlider:", e); }
  try { renderProducts(); } catch (e) { console.error("Error in renderProducts:", e); }
  try { renderBestsellers('day'); } catch (e) { console.error("Error in renderBestsellers:", e); }
  try { renderPromotions(); } catch (e) { console.error("Error in renderPromotions:", e); }
  try { loadClientData(); } catch (e) { console.error("Error in loadClientData:", e); }
  
  // Agendar simulación de Notificación Push a los 5 segundos
  setTimeout(() => {
    try {
      triggerPushNotification(
        '🔥 Oferta de Diezmillo Especial',
        '¡El Diezmillo hoy tiene un 10% de descuento! Ve a la pestaña Promos para aprovechar.',
        'promo-1'
      );
    } catch (e) { console.error("Error in triggerPushNotification 1:", e); }
  }, 5000);
  
  // Agendar otra notificación a los 25 segundos
  setTimeout(() => {
    try {
      triggerPushNotification(
        '🥕 Miércoles de Verdura Fresca',
        '¡Aprovecha el 15% de descuento en Jitomate, Aguacate y cebolla hoy!',
        'promo-2'
      );
    } catch (e) { console.error("Error in triggerPushNotification 2:", e); }
  }, 25000);
};

export const initWelcome = () => {
  if (elements.startAppBtn) {
    elements.startAppBtn.addEventListener('click', enterApplication);
  }
};
