import { state, elements } from './state.js';
import { initWelcome } from './welcome.js';
import { initCatalog, renderProducts } from './catalog.js';
import { initCart } from './cart.js';
import { initBestsellers } from './bestsellers.js';
import { initPromos } from './promos.js';
import { initContact } from './contact.js';
import { switchView } from './app_router.js';

const registerGeneralEvents = () => {
  // Click en el Logo superior regresa al catálogo restablecido en su estado inicial (vacío)
  const miniLogo = document.querySelector('.mini-logo');
  if (miniLogo) {
    miniLogo.addEventListener('click', () => {
      state.currentCategory = '';
      state.currentSubtab = 'todos';
      state.searchQuery = '';
      if (elements.searchInput) {
        elements.searchInput.value = '';
      }
      if (elements.clearSearchBtn) {
        elements.clearSearchBtn.classList.add('hidden');
      }
      
      // Remover selección de todos los botones de categoría
      elements.categoryBtns.forEach(btn => btn.classList.remove('active'));
      
      renderProducts();
      switchView('catalog-view');
    });
  }

  // Barra de navegación inferior
  elements.navItems.forEach(item => {
    item.addEventListener('click', () => {
      const viewId = item.getAttribute('data-view');
      switchView(viewId);
    });
  });

  // Botón "Volver Arriba" (Scroll to Top) en la esquina inferior derecha
  if (elements.phoneScreen && elements.backToTopBtn) {
    elements.phoneScreen.addEventListener('scroll', () => {
      if (elements.phoneScreen.scrollTop > 320) {
        elements.backToTopBtn.classList.remove('hidden');
      } else {
        elements.backToTopBtn.classList.add('hidden');
      }
    });

    elements.backToTopBtn.addEventListener('click', () => {
      elements.phoneScreen.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initWelcome();
  initCatalog();
  initCart();
  initBestsellers();
  initPromos();
  initContact();
  registerGeneralEvents();
});
export { switchView };
