import { state, elements, promotions } from './state.js';
import { playChimeSound } from './audio.js';
import { renderProducts } from './catalog.js';
import { switchView } from './app_router.js';

// Slider de Promociones (Carrusel en Inicio)
let activeSlideIndex = 0;
let slideInterval;

export const renderPromoSlider = () => {
  if (!elements.promoSlider) return;
  
  elements.promoSlider.innerHTML = promotions.map((promo, idx) => `
    <div class="promo-slide" data-promo="${promo.id}">
      <div class="promo-slide-overlay"></div>
      <img src="${promo.image}" class="promo-slide-img" alt="${promo.title}">
      <div class="promo-slide-content">
        <span class="promo-tag">${promo.discount}</span>
        <h4 class="promo-title">${promo.title}</h4>
        <p class="promo-desc">${promo.desc}</p>
      </div>
    </div>
  `).join('');
  
  elements.sliderDots.innerHTML = promotions.map((_, idx) => `
    <div class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
  `).join('');
  
  startSliderAutoPlay();
  
  document.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'));
      goToSlide(idx);
    });
  });
  
  document.querySelectorAll('.promo-slide').forEach(slide => {
    slide.addEventListener('click', () => {
      switchView('promos-view');
    });
  });
};

export const startSliderAutoPlay = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    activeSlideIndex = (activeSlideIndex + 1) % promotions.length;
    goToSlide(activeSlideIndex);
  }, 4500);
};

export const goToSlide = (idx) => {
  activeSlideIndex = idx;
  if (elements.promoSlider) {
    elements.promoSlider.style.transform = `translateX(-${idx * 100}%)`;
  }
  
  document.querySelectorAll('.slider-dot').forEach((dot, dotIdx) => {
    if (dotIdx === idx) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};

export const triggerPushNotification = (title, body, promoId = '') => {
  elements.notifTitle.textContent = title;
  elements.notifBody.textContent = body;
  
  elements.pushNotification.classList.add('show');
  playChimeSound();
  elements.notifBtn.classList.add('new-alert');
  
  const newNotif = {
    id: 'notif-' + Date.now(),
    title: title,
    body: body,
    time: 'Hace 1 min',
    unread: true,
    promoId: promoId
  };
  state.notifications.unshift(newNotif);
  state.notifBadgeCount++;
  
  updateNotifBadge();
  renderNotifHistory();
  
  setTimeout(() => {
    elements.pushNotification.classList.remove('show');
  }, 7000);
};

export const updateNotifBadge = () => {
  if (state.notifBadgeCount > 0) {
    elements.notifBadge.textContent = state.notifBadgeCount;
    elements.notifBadge.classList.remove('hidden');
  } else {
    elements.notifBadge.classList.add('hidden');
    elements.notifBtn.classList.remove('new-alert');
  }
};

export const renderNotifHistory = () => {
  if (!elements.notifHistoryList) return;
  
  if (state.notifications.length === 0) {
    elements.notifHistoryList.innerHTML = `
      <div class="empty-history-message">
        <i class="fa-regular fa-bell-slash"></i>
        <p>No tienes alertas acumuladas por el momento.</p>
      </div>
    `;
    return;
  }
  
  elements.notifHistoryList.innerHTML = state.notifications.map(notif => `
    <div class="notif-history-item ${notif.unread ? 'unread' : ''}" data-promo="${notif.promoId || ''}" data-id="${notif.id}">
      <div class="notif-item-icon">
        <i class="fa-solid fa-bell"></i>
      </div>
      <div class="notif-item-details">
        <div class="notif-item-title">${notif.title}</div>
        <div class="notif-item-body">${notif.body}</div>
        <span class="notif-item-time">${notif.time}</span>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.notif-history-item').forEach(item => {
    item.addEventListener('click', () => {
      const notifId = item.getAttribute('data-id');
      const promoId = item.getAttribute('data-promo');
      
      const notif = state.notifications.find(n => n.id === notifId);
      if (notif && notif.unread) {
        notif.unread = false;
        state.notifBadgeCount = Math.max(0, state.notifBadgeCount - 1);
        updateNotifBadge();
        renderNotifHistory();
      }
      
      if (promoId) {
        switchView('promos-view');
      }
    });
  });
};

export const renderPromotions = () => {
  if (!elements.promosList) return;
  
  elements.promosList.innerHTML = promotions.map(promo => `
    <div class="promo-card" id="promo-card-${promo.id}">
      <div class="promo-img-wrapper">
        <span class="promo-percent-badge">${promo.discount}</span>
        <img src="${promo.image}" alt="${promo.title}">
      </div>
      <div class="promo-card-info">
        <h3 class="promo-card-title">${promo.title}</h3>
        <p class="promo-card-desc">${promo.desc}</p>
        <div class="promo-action-row">
          <span class="promo-validity">${promo.expiry}</span>
          <button class="promo-apply-btn" data-category="${promo.targetCategory}" data-sub="${promo.targetSub || ''}">
            Ver Oferta
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.promo-apply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      const sub = btn.getAttribute('data-sub');
      
      state.currentCategory = cat;
      if (sub) {
        state.currentSubtab = sub;
        
        document.querySelectorAll('.subtab-btn').forEach(b => {
          if (b.getAttribute('data-subtab') === sub) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      } else {
        state.currentSubtab = 'todos';
      }
      
      document.querySelectorAll('.category-btn').forEach(b => {
        if (b.getAttribute('data-category') === cat) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      
      renderProducts();
      switchView('catalog-view');
    });
  });
};

export const initPromos = () => {
  if (elements.notifCloseBtn) {
    elements.notifCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      elements.pushNotification.classList.remove('show');
    });
  }
  
  if (elements.pushNotification) {
    elements.pushNotification.addEventListener('click', () => {
      elements.pushNotification.classList.remove('show');
      switchView('promos-view');
    });
  }
  
  if (elements.notifBtn) {
    elements.notifBtn.addEventListener('click', () => {
      state.notifBadgeCount = 0;
      updateNotifBadge();
      switchView('promos-view');
    });
  }
  
  if (elements.clearNotifsBtn) {
    elements.clearNotifsBtn.addEventListener('click', () => {
      state.notifications = [];
      state.notifBadgeCount = 0;
      updateNotifBadge();
      renderNotifHistory();
    });
  }
};
