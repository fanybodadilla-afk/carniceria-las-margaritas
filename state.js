import { resProducts } from './db/res.js';
import { puercoProducts } from './db/puerco.js';
import { polloProducts } from './db/pollo.js';
import { chorizoProducts } from './db/chorizo.js';
import { otrosProducts } from './db/otros.js';
import { abarrotesProducts } from './db/abarrotes.js';

// Consolidado de Base de Datos de Productos
export const productsDb = [
  ...resProducts,
  ...puercoProducts,
  ...polloProducts,
  ...chorizoProducts,
  ...otrosProducts,
  ...abarrotesProducts
];

// Promociones Activas
export const promotions = [
  {
    id: 'promo-1',
    title: 'Fin de Semana Parrillero',
    desc: 'El Diezmillo tiene hoy un 10% de descuento. ¡Festeja con la familia!',
    discount: '10% OFF',
    tag: 'Diezmillo de Res',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop&q=80',
    targetCategory: 'res',
    targetProduct: 'res-diezmillo',
    expiry: 'Válido hoy'
  },
  {
    id: 'promo-2',
    title: 'Miércoles de Verdura Fresca',
    desc: 'Disfruta de un 15% de descuento directo en toda la categoría de Verduras.',
    discount: '15% OFF',
    tag: 'Verduras del Campo',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500&auto=format&fit=crop&q=80',
    targetCategory: 'abarrotes',
    targetSub: 'verduras',
    expiry: 'Hasta el Miércoles'
  },
  {
    id: 'promo-3',
    title: 'Combo Chorizo & Queso',
    desc: 'Llevando 1kg de Chorizo para Asar, obtén un 20% de descuento en el Queso para Fundir.',
    discount: 'Especial',
    tag: 'Chorizo y Queso',
    image: 'https://images.unsplash.com/photo-1593001874117-1f9dbd6f19bb?w=500&auto=format&fit=crop&q=80',
    targetCategory: 'chorizo',
    expiry: 'Vence esta Semana'
  }
];

// Datos de los más vendidos (Bestsellers)
export const bestSellersData = {
  day: [
    { rank: 1, productId: 'res-molida', salesText: '42 pedidos hoy' },
    { rank: 2, productId: 'chorizo-asar', salesText: '35 pedidos hoy' },
    { rank: 3, productId: 'ver-jitomate', salesText: '29 pedidos hoy' },
    { rank: 4, productId: 'puerco-chuleta', salesText: '25 pedidos hoy' }
  ],
  week: [
    { rank: 1, productId: 'res-diezmillo', salesText: '210 pedidos esta semana' },
    { rank: 2, productId: 'res-arrachera', salesText: '185 pedidos esta semana' },
    { rank: 3, productId: 'otros-chicharron', salesText: '142 pedidos esta semana' },
    { rank: 4, productId: 'pollo-milanesa', salesText: '130 pedidos esta semana' }
  ],
  month: [
    { rank: 1, productId: 'res-filete', salesText: '620 pedidos este mes' },
    { rank: 2, productId: 'res-tbone', salesText: '540 pedidos este mes' },
    { rank: 3, productId: 'puerco-lomo', salesText: '480 pedidos este mes' },
    { rank: 4, productId: 'ver-aguacate', salesText: '410 pedidos este mes' }
  ]
};

// Estado Reactivo de la Aplicación
// Se inicializa 'currentCategory' como vacío para que no cargue productos por defecto en la carga inicial
export const state = {
  currentCategory: '', 
  currentSubtab: 'todos',
  searchQuery: '',
  cart: [],
  notifications: [
    {
      id: 'init-notif',
      title: '¡Bienvenidos!',
      body: 'Gracias por descargar nuestra app. Disfruta de la mejor calidad y servicio directo a tu hogar.',
      time: 'Hace un momento',
      unread: true
    }
  ],
  notifBadgeCount: 1,
  audioContext: null
};

// Utilidades para manejar elementos del DOM de uso global
export const elements = {
  get phoneScreen() { return document.getElementById('phone-screen'); },
  get welcomeScreen() { return document.getElementById('welcome-screen'); },
  get startAppBtn() { return document.getElementById('start-app-btn'); },
  get appShell() { return document.getElementById('app-shell'); },
  get appContent() { return document.getElementById('app-content'); },
  get notifBtn() { return document.getElementById('notif-btn'); },
  get notifBadge() { return document.getElementById('notif-badge'); },
  get notifHistoryList() { return document.getElementById('notif-history-list'); },
  get clearNotifsBtn() { return document.getElementById('clear-notifs-btn'); },
  get pushNotification() { return document.getElementById('push-notification'); },
  get notifTitle() { return document.getElementById('notif-title'); },
  get notifBody() { return document.getElementById('notif-body'); },
  get notifCloseBtn() { return document.getElementById('notif-close-btn'); },
  get backToTopBtn() { return document.getElementById('back-to-top-btn'); },
  
  // Vistas
  get catalogView() { return document.getElementById('catalog-view'); },
  get bestsellersView() { return document.getElementById('bestsellers-view'); },
  get promosView() { return document.getElementById('promos-view'); },
  get contactView() { return document.getElementById('contact-view'); },
  
  // Drawer del Carrito de Compras (Modificado)
  get cartDrawer() { return document.getElementById('cart-drawer'); },
  get cartOverlay() { return document.getElementById('cart-overlay'); },
  get closeCartBtn() { return document.getElementById('close-cart-btn'); },
  get openCartBtn() { return document.getElementById('open-cart-btn'); },
  get openCartBadge() { return document.getElementById('open-cart-badge'); },
  
  // Navegación Inferior
  get navItems() { return document.querySelectorAll('.nav-item'); },
  
  // Elementos del Catálogo
  get promoSlider() { return document.getElementById('promo-slider'); },
  get sliderDots() { return document.getElementById('slider-dots'); },
  get searchInput() { return document.getElementById('search-input'); },
  get clearSearchBtn() { return document.getElementById('clear-search-btn'); },
  get categoryBtns() { return document.querySelectorAll('.category-btn'); },
  get currentCategoryTitle() { return document.getElementById('current-category-title'); },
  get productsCount() { return document.getElementById('products-count'); },
  get productsGrid() { return document.getElementById('products-grid'); },
  get abarrotesSubtabs() { return document.getElementById('abarrotes-subtabs'); },
  get subtabBtns() { return document.querySelectorAll('.subtab-btn'); },
  
  // Elementos de Más Vendidos
  get statsTabs() { return document.querySelectorAll('.stats-tab'); },
  get bestsellersGrid() { return document.getElementById('bestsellers-grid'); },
  get statsPeriodDesc() { return document.getElementById('stats-period-desc'); },
  
  // Elementos de Promos
  get promosList() { return document.getElementById('promos-list'); },
  
  // Elementos de Carrito (Con soporte para drawer vs main view)
  get emptyCartView() { return document.querySelector('#cart-drawer #cart-empty-view') || document.getElementById('cart-empty-view'); },
  get filledCartView() { return document.querySelector('#cart-drawer #cart-filled-view') || document.getElementById('cart-filled-view'); },
  get cartItemsList() { return document.querySelector('#cart-drawer #cart-items-list') || document.getElementById('cart-items-list'); },
  get cartSubtotal() { return document.querySelector('#cart-drawer #cart-subtotal') || document.getElementById('cart-subtotal'); },
  get cartTotal() { return document.querySelector('#cart-drawer #cart-total') || document.getElementById('cart-total'); },
  get backToShopBtn() { return document.querySelector('#cart-drawer #back-to-shop-btn') || document.getElementById('back-to-shop-btn'); },
  get emptyCartBtn() { return document.querySelector('#cart-drawer #empty-cart-btn') || document.getElementById('empty-cart-btn'); },
  get checkoutForm() { return document.querySelector('#cart-drawer #checkout-form') || document.getElementById('checkout-form'); },
  
  // Modal de Contacto
  get addressCard() { return document.getElementById('address-card'); },
  get mapModal() { return document.getElementById('map-modal'); },
  get closeMapModal() { return document.getElementById('close-map-modal'); }
};
