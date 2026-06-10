import { state, elements, productsDb } from './state.js';
import { toggleCartItem } from './cart.js';

export const renderProducts = () => {
  const isSearchActive = state.searchQuery.trim().length > 0;
  let filteredProducts = [];
  
  if (isSearchActive) {
    const query = state.searchQuery.toLowerCase().trim();
    filteredProducts = productsDb.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
    
    elements.currentCategoryTitle.textContent = `Resultados para "${state.searchQuery}"`;
    elements.abarrotesSubtabs.classList.add('hidden');
    
    if (filteredProducts.length === 0) {
      elements.productsGrid.innerHTML = `
        <div class="empty-search-state">
          <i class="fa-regular fa-face-frown-open"></i>
          <h4>No encontramos productos</h4>
          <p>Prueba buscando con palabras como: t-bone, bistec, papa, chorizo, jamón, etc.</p>
        </div>
      `;
      elements.productsCount.textContent = `0 productos`;
      return;
    }
  } else {
    // Si no se está buscando y no hay categoría seleccionada, se muestra la pantalla de inicio limpia de categorías vacías
    if (!state.currentCategory) {
      elements.productsGrid.innerHTML = `
        <div class="empty-category-state">
          <div class="empty-cat-icon">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <h4>Elige una categoría</h4>
          <p>Selecciona una categoría arriba para descubrir nuestros cortes premium y abarrotes frescos de la mejor calidad.</p>
          <div class="category-hint-arrows">
            <i class="fa-solid fa-arrow-up-long bounce-arrow"></i>
          </div>
        </div>
      `;
      elements.currentCategoryTitle.textContent = "Nuestros Productos";
      elements.productsCount.textContent = "0 productos";
      elements.abarrotesSubtabs.classList.add('hidden');
      return;
    }
    
    // Si hay una categoría seleccionada, se filtran los productos
    filteredProducts = productsDb.filter(p => p.category === state.currentCategory);
    
    const catNames = {
      res: 'Cortes de Res',
      puerco: 'Carne de Puerco',
      pollo: 'Pollo y Milanesas',
      chorizo: 'Chorizo Artesanal',
      otros: 'Otros y Complementos',
      abarrotes: 'Abarrotes y Verduras'
    };
    elements.currentCategoryTitle.textContent = catNames[state.currentCategory] || 'Catálogo';
    
    // Sub-pestañas especiales para Abarrotes / Verduras
    if (state.currentCategory === 'abarrotes') {
      elements.abarrotesSubtabs.classList.remove('hidden');
      
      // Filtrar por subtab
      if (state.currentSubtab !== 'todos') {
        filteredProducts = filteredProducts.filter(p => p.subCategory === state.currentSubtab);
      }
    } else {
      elements.abarrotesSubtabs.classList.add('hidden');
    }
  }
  
  // Actualizar contador
  elements.productsCount.textContent = `${filteredProducts.length} productos`;
  
  // Renderizar tarjetas de producto
  elements.productsGrid.innerHTML = filteredProducts.map(product => {
    const cartItem = state.cart.find(item => item.productId === product.id);
    const addedClass = cartItem ? 'added' : '';
    const addedIcon = cartItem ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-plus"></i>';
    
    let availClass = 'badge-available';
    if (product.available === 'Pocas unidades') availClass = 'badge-low';
    if (product.available === 'Agotado') availClass = 'badge-soldout';
    
    const premiumSeal = (product.price >= 200 || product.id.includes('premium')) 
      ? `<div class="premium-seal-badge" title="Calidad Certificada"><i class="fa-solid fa-star"></i></div>` 
      : '';
      
    return `
      <div class="product-card" id="card-${product.id}">
        ${premiumSeal}
        <span class="availability-badge ${availClass}">${product.available}</span>
        <div class="product-image-container">
          <img src="${product.image}" class="product-img" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h4 class="product-title">${product.name}</h4>
          <p class="product-desc" title="${product.description}">${product.description}</p>
          <div class="product-price-row">
            <div class="product-price">
              <span class="price-num">$${product.price}</span>
              <span class="price-unit">por ${product.unit}</span>
            </div>
            <button class="add-btn ${addedClass}" data-id="${product.id}" title="Agregar al Carrito">
              ${addedIcon}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Registrar eventos de agregar
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.getAttribute('data-id');
      toggleCartItem(productId, btn);
    });
  });
};

export const initCatalog = () => {
  // Botones de Categorías Grandes del Catálogo
  elements.categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      state.currentCategory = btn.getAttribute('data-category');
      state.currentSubtab = 'todos'; // Resetear sub-pestaña
      
      // Reiniciar filtros de subtabs
      elements.subtabBtns.forEach(b => {
        if (b.getAttribute('data-subtab') === 'todos') b.classList.add('active');
        else b.classList.remove('active');
      });
      
      // Limpiar buscador al cambiar categoría para evitar confusión
      state.searchQuery = '';
      elements.searchInput.value = '';
      elements.clearSearchBtn.classList.add('hidden');
      
      renderProducts();
    });
  });

  // Botones de Subtabs Abarrotes / Verduras
  elements.subtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.subtabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      state.currentSubtab = btn.getAttribute('data-subtab');
      renderProducts();
    });
  });

  // Buscador de Productos (Búsqueda en tiempo real)
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    
    if (state.searchQuery.trim().length > 0) {
      elements.clearSearchBtn.classList.remove('hidden');
    } else {
      elements.clearSearchBtn.classList.add('hidden');
    }
    
    renderProducts();
  });
  
  elements.clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    elements.searchInput.value = '';
    elements.clearSearchBtn.classList.add('hidden');
    renderProducts();
  });

  // Escuchar eventos de cambio en el carrito para refrescar la interfaz
  document.addEventListener('cart-updated', renderProducts);
};
