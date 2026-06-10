import { state, elements, productsDb } from './state.js';
import { triggerNotificationSoundShort } from './audio.js';

// Notificador decoupled para evitar dependencias circulares con renderProducts
export const notifyCartUpdated = () => {
  document.dispatchEvent(new CustomEvent('cart-updated'));
};

export const toggleCartItem = (productId, btnElement) => {
  const existingItemIndex = state.cart.findIndex(item => item.productId === productId);
  const product = productsDb.find(p => p.id === productId);
  
  if (!product) return;
  
  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].quantity += 1;
    triggerNotificationSoundShort();
  } else {
    state.cart.push({
      productId: productId,
      quantity: 1
    });
    
    if (btnElement) {
      btnElement.classList.add('added');
      btnElement.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
  }
  
  updateCartBadge();
  calculateTotals();
  renderCartItems();
  notifyCartUpdated(); // Notificar cambio al catálogo y más vendidos
};

export const updateCartBadge = () => {
  const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
  
  if (totalItems > 0) {
    elements.openCartBadge.textContent = totalItems;
    elements.openCartBadge.classList.remove('hidden');
  } else {
    elements.openCartBadge.classList.add('hidden');
  }
};

export const calculateTotals = () => {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = productsDb.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  
  const formattedSubtotal = `$${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
  
  elements.cartSubtotal.textContent = formattedSubtotal;
  elements.cartTotal.textContent = formattedSubtotal; // Envío gratis
};

export const renderCartItems = () => {
  if (state.cart.length === 0) {
    elements.emptyCartView.classList.remove('hidden');
    elements.filledCartView.classList.add('hidden');
    return;
  }
  
  elements.emptyCartView.classList.add('hidden');
  elements.filledCartView.classList.remove('hidden');
  
  elements.cartItemsList.innerHTML = state.cart.map(item => {
    const product = productsDb.find(p => p.id === item.productId);
    if (!product) return '';
    
    return `
      <div class="cart-item-row" id="cart-row-${product.id}">
        <img src="${product.image}" class="cart-item-img" alt="${product.name}">
        <div class="cart-item-details">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-desc">Unidad: por ${product.unit}</div>
          <div class="cart-item-price">$${product.price}</div>
        </div>
        
        <div class="quantity-controls">
          <button class="q-btn btn-minus" data-id="${product.id}">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="q-num">${item.quantity}</span>
          <button class="q-btn btn-plus" data-id="${product.id}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        
        <button class="cart-item-delete" data-id="${product.id}" title="Eliminar del pedido">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');
  
  // Registrar eventos de controles
  document.querySelectorAll('.btn-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      changeCartQuantity(id, -1);
    });
  });
  
  document.querySelectorAll('.btn-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      changeCartQuantity(id, 1);
    });
  });
  
  document.querySelectorAll('.cart-item-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      removeCartItem(id);
    });
  });
};

export const changeCartQuantity = (productId, delta) => {
  const index = state.cart.findIndex(item => item.productId === productId);
  if (index === -1) return;
  
  state.cart[index].quantity += delta;
  
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  
  updateCartBadge();
  calculateTotals();
  renderCartItems();
  notifyCartUpdated();
};

export const removeCartItem = (productId) => {
  state.cart = state.cart.filter(item => item.productId !== productId);
  
  updateCartBadge();
  calculateTotals();
  renderCartItems();
  notifyCartUpdated();
};

export const loadClientData = () => {
  try {
    const savedName = localStorage.getItem('margaritas_client_name');
    const savedAddress = localStorage.getItem('margaritas_client_address');
    const savedRef = localStorage.getItem('margaritas_client_ref');
    
    // Buscar todos los elementos con los IDs correspondientes, ya que pueden haber duplicados
    const nameEls = document.querySelectorAll('#client-name');
    const addressEls = document.querySelectorAll('#client-address');
    const referenceEls = document.querySelectorAll('#client-reference');
    
    if (savedName) {
      nameEls.forEach(el => { el.value = savedName; });
    }
    if (savedAddress) {
      addressEls.forEach(el => { el.value = savedAddress; });
    }
    if (savedRef) {
      referenceEls.forEach(el => { el.value = savedRef; });
    }
  } catch (e) {
    console.warn("LocalStorage access is restricted or elements are missing:", e);
  }
};

export const saveClientData = (name, address, reference) => {
  try {
    localStorage.setItem('margaritas_client_name', name);
    localStorage.setItem('margaritas_client_address', address);
    localStorage.setItem('margaritas_client_ref', reference);
  } catch (e) {
    console.warn("Could not save client data to LocalStorage:", e);
  }
};

export const clearCart = () => {
  if (confirm('¿Estás seguro que deseas vaciar tu carrito de compras?')) {
    state.cart = [];
    updateCartBadge();
    renderCartItems();
    notifyCartUpdated();
  }
};

export const submitOrder = (e) => {
  e.preventDefault();
  
  const name = document.getElementById('client-name').value.trim();
  const address = document.getElementById('client-address').value.trim();
  const reference = document.getElementById('client-reference').value.trim();
  
  if (!name || !address || !reference || state.cart.length === 0) return;
  
  saveClientData(name, address, reference);
  
  let message = `🥩 *PEDIDO - CARNICERÍA LAS MARGAITAS* 🥩\n`;
  message += `===================================\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📍 *Dirección:* ${address}\n`;
  message += `💬 *Referencia:* ${reference}\n`;
  message += `===================================\n\n`;
  message += `🛒 *DETALLE DEL PEDIDO:*\n`;
  
  let total = 0;
  
  state.cart.forEach((item, index) => {
    const product = productsDb.find(p => p.id === item.productId);
    if (product) {
      const subtotal = product.price * item.quantity;
      total += subtotal;
      message += `*${index + 1}.* _${product.name}_ (${item.quantity} ${product.unit} x $${product.price})\n`;
      message += `   👉 *Subtotal:* $${subtotal.toFixed(2)}\n`;
    }
  });
  
  message += `\n===================================\n`;
  message += `🚚 *Costo de Envío:* ¡GRATIS!\n`;
  message += `💰 *TOTAL A PAGAR:* *$${total.toFixed(2)} MXN*\n`;
  message += `===================================\n\n`;
  message += `*¡Muchas gracias por su preferencia!* Quedo en espera del tiempo estimado de entrega. 🙏🏻🥩`;
  
  const phoneNumber = '523312345678'; 
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  state.cart = [];
  updateCartBadge();
  renderCartItems();
  notifyCartUpdated();
  
  // Cerrar el Drawer al enviar
  closeCart();
  
  window.open(whatsappUrl, '_blank');
};

export const openCart = () => {
  elements.cartDrawer.classList.add('open');
  elements.cartOverlay.classList.add('active');
  renderCartItems();
};

export const closeCart = () => {
  elements.cartDrawer.classList.remove('open');
  elements.cartOverlay.classList.remove('active');
};

export const initCart = () => {
  // Eventos de apertura/cierre del Drawer del Carrito
  if (elements.openCartBtn) {
    elements.openCartBtn.addEventListener('click', openCart);
  }
  if (elements.closeCartBtn) {
    elements.closeCartBtn.addEventListener('click', closeCart);
  }
  if (elements.cartOverlay) {
    elements.cartOverlay.addEventListener('click', closeCart);
  }
  
  // Botones internos
  if (elements.emptyCartBtn) {
    elements.emptyCartBtn.addEventListener('click', clearCart);
  }
  if (elements.backToShopBtn) {
    elements.backToShopBtn.addEventListener('click', () => {
      closeCart();
    });
  }
  
  // Formulario
  if (elements.checkoutForm) {
    elements.checkoutForm.addEventListener('submit', submitOrder);
  }
};
