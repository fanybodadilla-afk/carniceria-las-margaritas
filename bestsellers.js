import { state, elements, productsDb, bestSellersData } from './state.js';
import { toggleCartItem } from './cart.js';
import { renderProducts } from './catalog.js';

export const renderBestsellers = (period = 'day') => {
  const list = bestSellersData[period] || [];
  
  const periodDescriptions = {
    day: 'Los productos preferidos por nuestros clientes hoy.',
    week: 'Los cortes más populares de toda esta semana.',
    month: 'La selección premium más solicitada de este mes.'
  };
  
  if (elements.statsPeriodDesc) {
    elements.statsPeriodDesc.textContent = periodDescriptions[period];
  }
  
  if (elements.bestsellersGrid) {
    elements.bestsellersGrid.innerHTML = list.map(item => {
      const product = productsDb.find(p => p.id === item.productId);
      if (!product) return '';
      
      const cartItem = state.cart.some(c => c.productId === product.id);
      const addedClass = cartItem ? 'added' : '';
      const addedIcon = cartItem ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-plus"></i>';
      
      return `
        <div class="bestseller-item" id="best-${product.id}">
          <div class="bestseller-rank">#${item.rank}</div>
          <div class="bestseller-img-container">
            <img src="${product.image}" class="bestseller-img" alt="${product.name}">
          </div>
          <div class="bestseller-details">
            <h4 class="bestseller-title">${product.name}</h4>
            <span class="bestseller-sales"><i class="fa-solid fa-chart-line"></i> ${item.salesText}</span>
            <div class="bestseller-price">$${product.price} / ${product.unit}</div>
          </div>
          <button class="add-btn ${addedClass}" data-id="${product.id}">
            ${addedIcon}
          </button>
        </div>
      `;
    }).join('');
    
    // Registrar eventos
    document.querySelectorAll('.bestseller-item .add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = btn.getAttribute('data-id');
        toggleCartItem(productId, btn);
        renderProducts(); // Sincronizar catálogo principal
      });
    });
  }
};

export const initBestsellers = () => {
  // Tabs de Estadísticas de Más Vendidos
  elements.statsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elements.statsTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const period = tab.getAttribute('data-period');
      renderBestsellers(period);
    });
  });
};
