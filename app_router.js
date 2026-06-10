import { elements } from './state.js';

export const switchView = (targetViewId) => {
  // Desactivar todas las vistas principales
  // Nota: cart-view ya no está en las vistas del bottom-nav porque ahora es un Drawer lateral
  const views = [
    elements.catalogView,
    elements.bestsellersView,
    elements.promosView,
    elements.contactView
  ];
  
  views.forEach(view => {
    if (view) view.classList.remove('active');
  });
  
  elements.navItems.forEach(item => item.classList.remove('active'));
  
  // Activar la vista seleccionada
  const targetView = document.getElementById(targetViewId);
  if (targetView) {
    targetView.classList.add('active');
    
    // Resaltar nav item correspondiente
    const activeNavItem = Array.from(elements.navItems).find(item => item.getAttribute('data-view') === targetViewId);
    if (activeNavItem) {
      activeNavItem.classList.add('active');
    }
    
    // Scroll arriba suave del viewport interno de la app al cambiar pestaña
    if (elements.phoneScreen) {
      elements.phoneScreen.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
