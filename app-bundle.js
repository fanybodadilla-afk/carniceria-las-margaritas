/*
  BUNDLED SINGLE SCRIPT FOR CARNICERÍA LAS MARGAITAS
  Este archivo contiene todo el código de la aplicación
  consolidado en un solo script sin usar módulos ES (sin import/export)
  para que funcione localmente con el protocolo file:// (doble clic en index.html)
*/


// ==================== INICIO ARCHIVO: js/db/res.js ====================
const resProducts = [
  {
    id: 'res-tbone',
    name: 'Tibón',
    price: 250,
    unit: 'kg',
    description: 'Corte premium con hueso en forma de T que combina filete y New York. Ideal para asar al carbón.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-peonesillo',
    name: 'Peonesillo',
    price: 250,
    unit: 'kg',
    description: 'Corte clásico extremadamente tierno y de textura suave, perfecto para plancha o asador.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-diezmillo',
    name: 'Diezmillo',
    price: 250,
    unit: 'kg',
    description: 'Excelente marmoleo y jugosidad. El favorito indiscutible para las carnes asadas del fin de semana.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop&q=80',
    available: 'Pocas unidades'
  },
  {
    id: 'res-pulpanegra',
    name: 'Pulpa Negra',
    price: 230,
    unit: 'kg',
    description: 'Carne magra y limpia, excelente para bistec, milanesa o guisados del día a día.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-aguallon',
    name: 'Aguallón',
    price: 230,
    unit: 'kg',
    description: 'Corte jugoso del lomo de res con una capa ideal de grasa exterior que aporta un sabor inigualable.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-brazofilete',
    name: 'Brazo de Filete',
    price: 230,
    unit: 'kg',
    description: 'Carne suave y con un gran sabor, perfecta para preparar brochetas, tacos o estofados premium.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-filete',
    name: 'Filete',
    price: 280,
    unit: 'kg',
    description: 'El corte más blando y premium de la res. Magro, elegante y de sabor sutil. Calidad de restaurante.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-arrachera',
    name: 'Arrachera',
    price: 230,
    unit: 'kg',
    description: 'Arrachera fresquísima marinada con nuestra receta especial de la casa. Super tierna y jugosa.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-pescadito',
    name: 'Pescadito de Arrachera',
    price: 230,
    unit: 'kg',
    description: 'Subcorte especial de arrachera, conocido por su forma alargada y su excelente suavidad al asar.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-pancita',
    name: 'Pancita',
    price: 230,
    unit: 'kg',
    description: 'Menudo/Pancita de res limpia de primera calidad. Tradicional para caldos domingueros.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Pocas unidades'
  },
  {
    id: 'res-chuleta',
    name: 'Chuleta',
    price: 240,
    unit: 'kg',
    description: 'Chuleta de res fresca con hueso, ideal para asar a fuego lento y disfrutar su sabor característico.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-chambarete',
    name: 'Chambarete',
    price: 160,
    unit: 'kg',
    description: 'Con hueso y tuétano. Ideal para caldos y cocidos que requieren un consomé espeso y nutritivo.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-costillacargada',
    name: 'Costilla Cargada',
    price: 160,
    unit: 'kg',
    description: 'Costilla de res carnosa con la cantidad ideal de grasa para obtener la mejor jugosidad en caldos o asada.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-azotillo',
    name: 'Azotillo',
    price: 150,
    unit: 'kg',
    description: 'Corte económico y tradicional con mucho sabor, perfecto para deshebrar, cocido o deshebrada.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'res-molida',
    name: 'Carne Molida',
    price: 200,
    unit: 'kg',
    description: 'Carne molida 90/10 de res fresca molida al día. Suave, nutritiva y baja en grasa.',
    category: 'res',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  }
];

// ==================== FIN ARCHIVO: js/db/res.js ====================

// ==================== INICIO ARCHIVO: js/db/puerco.js ====================
const puercoProducts = [
  {
    id: 'puerco-pierna',
    name: 'Pierna de Puerco',
    price: 160,
    unit: 'kg',
    description: 'Carne de pierna de cerdo seleccionada, muy magra y jugosa, excelente para hornear, guisados o pozole.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-chuleta',
    name: 'Chuleta Fresca',
    price: 150,
    unit: 'kg',
    description: 'Chuletas de lomo de cerdo frescas con hueso. Tiernas, jugosas y rápidas de cocinar a la plancha.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-lomo',
    name: 'Lomo de Puerco',
    price: 160,
    unit: 'kg',
    description: 'El corte más limpio y magro del cerdo. Ideal para rellenar, hornear o cortar en medallones premium.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-espaldilla',
    name: 'Espaldilla',
    price: 150,
    unit: 'kg',
    description: 'Carne jugosa y suave con excelente grasa intermuscular, ideal para unas ricas carnitas o tamales.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-cabezalomo',
    name: 'Cabeza de Lomo',
    price: 150,
    unit: 'kg',
    description: 'Corte muy jugoso que combina carne magra y vetas de grasa que le dan una textura suave única.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-costilla',
    name: 'Costilla de Puerco',
    price: 140,
    unit: 'kg',
    description: 'Costilla carnosa y terna, excelente para preparar en salsa verde con nopales o a la BBQ.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-chamorro',
    name: 'Chamorro',
    price: 60,
    unit: 'kg',
    description: 'Chamorro de cerdo de buen tamaño, perfecto para adobar o cocinar lentamente al horno o vapor.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-espinazo',
    name: 'Espinazo',
    price: 60,
    unit: 'kg',
    description: 'Espinazo fresco de puerco, ideal para caldos con un gran aporte de colágeno y sabor tradicional.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-chuletaahumada',
    name: 'Chuleta Ahumada',
    price: 170,
    unit: 'kg',
    description: 'Chuletas de puerco curadas y ahumadas artesanalmente con un toque dulce y salado riquísimo.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'puerco-molida',
    name: 'Carne Molida Puerco',
    price: 160,
    unit: 'kg',
    description: 'Carne de pierna de puerco limpia molida fresca del día. Suave y con sabor ideal.',
    category: 'puerco',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  }
];

// ==================== FIN ARCHIVO: js/db/puerco.js ====================

// ==================== INICIO ARCHIVO: js/db/pollo.js ====================
const polloProducts = [
  {
    id: 'pollo-entero',
    name: 'Pollo Entero',
    price: 95,
    unit: 'kg',
    description: 'Pollo entero fresco de primera calidad, limpio y listo para preparar caldos, rostizar o deshebrar.',
    category: 'pollo',
    image: 'https://images.unsplash.com/photo-1587593817642-5999cd15f4c0?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'pollo-milanesa',
    name: 'Milanesa de Pollo',
    price: 170,
    unit: 'kg',
    description: 'Pechuga de pollo fresca rebanada en filetes delgados y limpios, sumamente suave y sin grasa.',
    category: 'pollo',
    image: 'https://images.unsplash.com/photo-1587593817642-5999cd15f4c0?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  }
];

// ==================== FIN ARCHIVO: js/db/pollo.js ====================

// ==================== INICIO ARCHIVO: js/db/chorizo.js ====================
const chorizoProducts = [
  {
    id: 'chorizo-asar',
    name: 'Chorizo para Asar',
    price: 130,
    unit: 'kg',
    description: 'Chorizo artesanal elaborado en casa con carne de cerdo de primera calidad, chiles secos y especias.',
    category: 'chorizo',
    image: 'https://images.unsplash.com/photo-1593001874117-1f9dbd6f19bb?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  }
];

// ==================== FIN ARCHIVO: js/db/chorizo.js ====================

// ==================== INICIO ARCHIVO: js/db/otros.js ====================
const otrosProducts = [
  {
    id: 'otros-hamburguesa',
    name: 'Carne para Hamburguesa',
    price: 16,
    unit: 'c/u',
    description: 'Prácticas piezas de carne de res molida preparadas con cebolla y especias listas para asar o freír.',
    category: 'otros',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'otros-papas',
    name: 'Papa para Freír',
    price: 90,
    unit: 'kg',
    description: 'Papas cortadas a la francesa prefritas y congeladas, listas para dorarse en aceite o freidora de aire.',
    category: 'otros',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'otros-chicharron',
    name: 'Chicharrón Crujiente',
    price: 350,
    unit: 'kg',
    description: 'Chicharrón de cerdo frito al estilo tradicional en cazo. Mega crujiente y saladito, hecho en el día.',
    category: 'otros',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'otros-queso',
    name: 'Queso para Fundir',
    price: 180,
    unit: 'kg',
    description: 'Queso asadero/oaxaca de primera calidad, hebra suave y excelente fundido para quesadillas o alambres.',
    category: 'otros',
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'otros-cuero',
    name: 'Cuero para Brevas',
    price: 85,
    unit: 'kg',
    description: 'Cuero de cerdo curtido y limpio de grasa, ideal para preparar brevas, chicharrones preparados o botanas.',
    category: 'otros',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  }
];

// ==================== FIN ARCHIVO: js/db/otros.js ====================

// ==================== INICIO ARCHIVO: js/db/abarrotes.js ====================
const abarrotesProducts = [
  // === CATEGORÍA: ABARROTES (SECOS) ===
  {
    id: 'aba-arroz',
    name: 'Arroz Súper Extra',
    price: 35,
    unit: 'paquete',
    description: 'Arroz blanco grano entero súper extra (900g), ideal para acompañar tus guisados y carnes.',
    category: 'abarrotes',
    subCategory: 'abarrotes',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'aba-frijol',
    name: 'Frijol Negro',
    price: 45,
    unit: 'paquete',
    description: 'Frijol negro seleccionado de primera calidad (900g). Suave y con excelente sazón al cocerse.',
    category: 'abarrotes',
    subCategory: 'abarrotes',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'aba-aceite',
    name: 'Aceite Vegetal Premium',
    price: 48,
    unit: 'L',
    description: 'Aceite vegetal comestible de primera calidad, ideal para todo tipo de guisados y freír papas.',
    category: 'abarrotes',
    subCategory: 'abarrotes',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'aba-salsa',
    name: 'Salsa Casera Picante',
    price: 25,
    unit: 'c/u',
    description: 'Salsa roja tatemada casera de la casa, picor ideal para acompañar tacos y quesadillas.',
    category: 'abarrotes',
    subCategory: 'abarrotes',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },

  // === CATEGORÍA: ABARROTES (SUB-CATEGORÍA VERDURAS) ===
  {
    id: 'ver-jitomate',
    name: 'Jitomate Saladet',
    price: 36,
    unit: 'kg',
    description: 'Jitomates maduros de huerto, firmes, frescos y súper limpios. Excelente para caldillos o ensaladas.',
    category: 'abarrotes',
    subCategory: 'verduras',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'ver-cebolla',
    name: 'Cebolla Blanca',
    price: 28,
    unit: 'kg',
    description: 'Cebollas blancas frescas de buen tamaño, limpias y crujientes. Aporte de sabor para tus caldos.',
    category: 'abarrotes',
    subCategory: 'verduras',
    image: 'https://images.unsplash.com/photo-1580145600600-a27b89280d4c?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'ver-aguacate',
    name: 'Aguacate Hass',
    price: 75,
    unit: 'kg',
    description: 'Aguacate Hass seleccionado en su punto de madurez, cremoso y listo para un guacamole parrillero.',
    category: 'abarrotes',
    subCategory: 'verduras',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=80',
    available: 'Pocas unidades'
  },
  {
    id: 'ver-limon',
    name: 'Limón Colima',
    price: 32,
    unit: 'kg',
    description: 'Limón con semilla jugoso de Colima, ideal para sazonar tus caldos, pancita y carnes asadas.',
    category: 'abarrotes',
    subCategory: 'verduras',
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'ver-papa',
    name: 'Papa Blanca',
    price: 38,
    unit: 'kg',
    description: 'Papas blancas grandes y frescas de campo, ideales para guisar, freír o puré de papa suave.',
    category: 'abarrotes',
    subCategory: 'verduras',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  },
  {
    id: 'ver-cilantro',
    name: 'Cilantro Fresco',
    price: 15,
    unit: 'manojo',
    description: 'Manojo de cilantro verde y aromático del día, lavado y desinfectado para taquiza.',
    category: 'abarrotes',
    subCategory: 'verduras',
    image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?w=500&auto=format&fit=crop&q=80',
    available: 'Disponible'
  }
];

// ==================== FIN ARCHIVO: js/db/abarrotes.js ====================

// ==================== INICIO ARCHIVO: js/state.js ====================







// Consolidado de Base de Datos de Productos
const productsDb = [
  ...resProducts,
  ...puercoProducts,
  ...polloProducts,
  ...chorizoProducts,
  ...otrosProducts,
  ...abarrotesProducts
];

// Promociones Activas
const promotions = [
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
const bestSellersData = {
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
const state = {
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
const elements = {
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

// ==================== FIN ARCHIVO: js/state.js ====================

// ==================== INICIO ARCHIVO: js/audio.js ====================


const initAudioContext = () => {
  if (!state.audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      try {
        state.audioContext = new AudioCtx();
      } catch (e) {
        console.warn("Failed to create AudioContext:", e);
      }
    }
  }
};

const playChimeSound = () => {
  try {
    initAudioContext();
    if (!state.audioContext) return;
    
    // Si está pausado por políticas del navegador, reanudar
    if (state.audioContext.state === 'suspended') {
      state.audioContext.resume();
    }
    
    const ctx = state.audioContext;
    const now = ctx.currentTime;
    
    // Nota 1 (Campana alta y resonante - C6)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1046.50, now);
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.15, now + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    
    // Nota 2 (Armónico afinado para calidez - E6)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(1318.51, now + 0.12);
    gain2.gain.setValueAtTime(0, now + 0.12);
    gain2.gain.linearRampToValueAtTime(0.1, now + 0.17);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc1.start(now);
    osc1.stop(now + 0.8);
    osc2.start(now + 0.12);
    osc2.stop(now + 1.0);
  } catch (e) {
    console.warn("La reproducción de sonido no fue permitida por restricciones de interacción.", e);
  }
};

const triggerNotificationSoundShort = () => {
  try {
    initAudioContext();
    if (!state.audioContext) return;
    const ctx = state.audioContext;
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5 (La)
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch (e) {}
};

// ==================== FIN ARCHIVO: js/audio.js ====================

// ==================== INICIO ARCHIVO: js/app_router.js ====================


const switchView = (targetViewId) => {
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

// ==================== FIN ARCHIVO: js/app_router.js ====================

// ==================== INICIO ARCHIVO: js/cart.js ====================



// Notificador decoupled para evitar dependencias circulares con renderProducts
const notifyCartUpdated = () => {
  document.dispatchEvent(new CustomEvent('cart-updated'));
};

const toggleCartItem = (productId, btnElement) => {
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

const updateCartBadge = () => {
  const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
  
  if (totalItems > 0) {
    elements.openCartBadge.textContent = totalItems;
    elements.openCartBadge.classList.remove('hidden');
  } else {
    elements.openCartBadge.classList.add('hidden');
  }
};

const calculateTotals = () => {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = productsDb.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  
  const formattedSubtotal = `$${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
  
  elements.cartSubtotal.textContent = formattedSubtotal;
  elements.cartTotal.textContent = formattedSubtotal; // Envío gratis
};

const renderCartItems = () => {
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

const changeCartQuantity = (productId, delta) => {
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

const removeCartItem = (productId) => {
  state.cart = state.cart.filter(item => item.productId !== productId);
  
  updateCartBadge();
  calculateTotals();
  renderCartItems();
  notifyCartUpdated();
};

const loadClientData = () => {
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

const saveClientData = (name, address, reference) => {
  try {
    localStorage.setItem('margaritas_client_name', name);
    localStorage.setItem('margaritas_client_address', address);
    localStorage.setItem('margaritas_client_ref', reference);
  } catch (e) {
    console.warn("Could not save client data to LocalStorage:", e);
  }
};

const clearCart = () => {
  if (confirm('¿Estás seguro que deseas vaciar tu carrito de compras?')) {
    state.cart = [];
    updateCartBadge();
    renderCartItems();
    notifyCartUpdated();
  }
};

const submitOrder = (e) => {
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

const openCart = () => {
  elements.cartDrawer.classList.add('open');
  elements.cartOverlay.classList.add('active');
  renderCartItems();
};

const closeCart = () => {
  elements.cartDrawer.classList.remove('open');
  elements.cartOverlay.classList.remove('active');
};

const initCart = () => {
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

// ==================== FIN ARCHIVO: js/cart.js ====================

// ==================== INICIO ARCHIVO: js/catalog.js ====================



const renderProducts = () => {
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

const initCatalog = () => {
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

// ==================== FIN ARCHIVO: js/catalog.js ====================

// ==================== INICIO ARCHIVO: js/bestsellers.js ====================




const renderBestsellers = (period = 'day') => {
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

const initBestsellers = () => {
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

// ==================== FIN ARCHIVO: js/bestsellers.js ====================

// ==================== INICIO ARCHIVO: js/promos.js ====================





// Slider de Promociones (Carrusel en Inicio)
let activeSlideIndex = 0;
let slideInterval;

const renderPromoSlider = () => {
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

const startSliderAutoPlay = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    activeSlideIndex = (activeSlideIndex + 1) % promotions.length;
    goToSlide(activeSlideIndex);
  }, 4500);
};

const goToSlide = (idx) => {
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

const triggerPushNotification = (title, body, promoId = '') => {
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

const updateNotifBadge = () => {
  if (state.notifBadgeCount > 0) {
    elements.notifBadge.textContent = state.notifBadgeCount;
    elements.notifBadge.classList.remove('hidden');
  } else {
    elements.notifBadge.classList.add('hidden');
    elements.notifBtn.classList.remove('new-alert');
  }
};

const renderNotifHistory = () => {
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

const renderPromotions = () => {
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

const initPromos = () => {
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

// ==================== FIN ARCHIVO: js/promos.js ====================

// ==================== INICIO ARCHIVO: js/contact.js ====================


const initContact = () => {
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

// ==================== FIN ARCHIVO: js/contact.js ====================

// ==================== INICIO ARCHIVO: js/welcome.js ====================







const enterApplication = () => {
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

const initWelcome = () => {
  if (elements.startAppBtn) {
    elements.startAppBtn.addEventListener('click', enterApplication);
  }
};

// ==================== FIN ARCHIVO: js/welcome.js ====================

// ==================== INICIO ARCHIVO: js/app.js ====================









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


// ==================== FIN ARCHIVO: js/app.js ====================
