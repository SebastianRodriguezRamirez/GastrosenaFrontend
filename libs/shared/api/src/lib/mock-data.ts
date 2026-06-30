export const MOCK_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VySWQiOiIxIiwibm9tYnJlUm9sIjoiQURNSU5JU1RSQURPUiIsImV4cCI9NDEwMjQ0NDgwMH0.SzgK_qvP4FW8EBJq_vjv4PcBkYzVF5_6ypl2eRvHpuo';

export const USUARIOS = [
  { id: '1',  documento: '123456789',  nombre: 'Admin',            apellidos: 'Sistema',        email: 'admin@gmail.com',        telefono: '3001112233', estado: true,  rol: 'ADMINISTRADOR',  permisos: ['*'], fichas: [] },
  { id: '2',  documento: '987654321',  nombre: 'María',            apellidos: 'García Rincón',  email: 'maria@gmail.com',        telefono: '3002223344', estado: true,  rol: 'CONTADORA',      permisos: ['reportes.ver','reportes.generar'], fichas: [] },
  { id: '3',  documento: '111222333',  nombre: 'Carlos',           apellidos: 'Ruiz Pérez',     email: 'carlos@gmail.com',       telefono: '3003334455', estado: true,  rol: 'INSTRUCTOR',     permisos: ['inventario.ver','inventario.editar'], fichas: ['FICHA-001'] },
  { id: '4',  documento: '444555666',  nombre: 'Ana',              apellidos: 'Martínez López',  email: 'ana@gmail.com',          telefono: '3004445566', estado: true,  rol: 'MESERO',         permisos: ['pedidos.crear','caja.abrir'], fichas: [] },
  { id: '5',  documento: '777888999',  nombre: 'Roberto',          apellidos: 'Jaramillo Soto',  email: 'roberto@gmail.com',      telefono: '3005556677', estado: true,  rol: 'CHEF',           permisos: ['cocina.ver','cocina.gestionar'], fichas: [] },
  { id: '6',  documento: '222333444',  nombre: 'Lucía',            apellidos: 'Prada Mejía',     email: 'lucia@gmail.com',        telefono: '3006667788', estado: true,  rol: 'APRENDIZ',       permisos: [], fichas: ['FICHA-001'] },
  { id: '7',  documento: '555666777',  nombre: 'Pedro',            apellidos: 'Infante Vega',    email: 'pedro@gmail.com',         telefono: '3007778899', estado: true,  rol: 'APRENDIZ',        permisos: [], fichas: ['FICHA-001'] },
  { id: '8',  documento: '888999000',  nombre: 'Sofía',            apellidos: 'Mendoza Ruiz',    email: 'sofia@gmail.com',        telefono: '3008889900', estado: true,  rol: 'APRENDIZ',       permisos: [], fichas: ['FICHA-002'] },
  { id: '9',  documento: '666777888',  nombre: 'Diego',            apellidos: 'Ramírez Gil',     email: 'diego@gmail.com',         telefono: '3009990011', estado: true,  rol: 'APRENDIZ',        permisos: [], fichas: ['FICHA-002'] },
  { id: '10', documento: '123123123',  nombre: 'Jefe',             apellidos: 'Oficina Compras', email: 'jefe@gmail.com',          telefono: '3001110001', estado: true,  rol: 'ADMINISTRADOR',  permisos: ['*'], fichas: [] },
];

export const FICHAS = [
  { id: 'FICHA-001', codigo: '2670687',  nombre: 'ADSO 2670687',            programa: 'Análisis y Desarrollo de Software', estado: 'ACTIVA' },
  { id: 'FICHA-002', codigo: '2899341',  nombre: 'GESTIÓN EMPRESARIAL 2025', programa: 'Gestión Empresarial',               estado: 'ACTIVA' },
];

export const CATEGORIAS_COCINA = [
  { id: 1, nombre: 'Entradas',     descripcion: 'Platos de entrada' },
  { id: 2, nombre: 'Platos Fuertes', descripcion: 'Plato principal del menú' },
  { id: 3, nombre: 'Bebidas',      descripcion: 'Bebidas calientes y frías' },
  { id: 4, nombre: 'Postres',      descripcion: 'Postres y dulces' },
  { id: 5, nombre: 'Guarniciones', descripcion: 'Acompañamientos' },
];

export const CATEGORIAS_BAR = [
  { id: 1, nombre: 'Cócteles Clásicos', descripcion: 'Cócteles tradicionales' },
  { id: 2, nombre: 'Tragos Largos',     descripcion: 'Bebidas largas' },
  { id: 3, nombre: 'Cervezas',          descripcion: 'Cervezas nacionales e importadas' },
  { id: 4, nombre: 'Vinos',             descripcion: 'Vinos tintos y blancos' },
  { id: 5, nombre: 'Mocktails',         descripcion: 'Cócteles sin alcohol' },
];

export const INGREDIENTES_COCINA = [
  { id: 1,  nombre: 'Pechuga de pollo',     unidadMedida: 'kg',  stock: 25 },
  { id: 2,  nombre: 'Arroz blanco',          unidadMedida: 'kg',  stock: 80 },
  { id: 3,  nombre: 'Tomate',                unidadMedida: 'kg',  stock: 30 },
  { id: 4,  nombre: 'Cebolla cabezona',      unidadMedida: 'kg',  stock: 20 },
  { id: 5,  nombre: 'Cilantro',              unidadMedida: 'kg',  stock: 5 },
  { id: 6,  nombre: 'Aceite vegetal',        unidadMedida: 'L',   stock: 15 },
  { id: 7,  nombre: 'Sal',                   unidadMedida: 'kg',  stock: 10 },
  { id: 8,  nombre: 'Pimienta',              unidadMedida: 'kg',  stock: 3 },
  { id: 9,  nombre: 'Comino',                unidadMedida: 'kg',  stock: 2 },
  { id: 10, nombre: 'Papas criollas',        unidadMedida: 'kg',  stock: 40 },
  { id: 11, nombre: 'Huevos',                unidadMedida: 'und', stock: 120 },
  { id: 12, nombre: 'Leche entera',          unidadMedida: 'L',   stock: 30 },
];

export const INGREDIENTES_BAR = [
  { id: 1,  nombre: 'Ron blanco',      unidadMedida: 'L',  stock: 12 },
  { id: 2,  nombre: 'Tequila',          unidadMedida: 'L',  stock: 8 },
  { id: 3,  nombre: 'Vodka',            unidadMedida: 'L',  stock: 10 },
  { id: 4,  nombre: 'Ginebra',          unidadMedida: 'L',  stock: 6 },
  { id: 5,  nombre: 'Whisky',           unidadMedida: 'L',  stock: 5 },
  { id: 6,  nombre: 'Coca-Cola',        unidadMedida: 'L',  stock: 48 },
  { id: 7,  nombre: 'Jugo de naranja',  unidadMedida: 'L',  stock: 20 },
  { id: 8,  nombre: 'Limón',            unidadMedida: 'kg', stock: 15 },
  { id: 9,  nombre: 'Hielo',            unidadMedida: 'kg', stock: 100 },
  { id: 10, nombre: 'Menta',            unidadMedida: 'kg', stock: 3 },
];

export const RECETAS_COCINA = [
  { id: 1,  idCategoria: 2, nombre: 'Bandeja Paisa',          descripcion: 'Frijoles, arroz, carne molida, chicharrón, huevo, plátano, aguacate',           precio: 28000,  tiempoPrep: 25, imagen: '', activo: true,  ingredientes: [{ idIngrediente: 1, cantidad: 0.2 }, { idIngrediente: 2, cantidad: 0.3 }] },
  { id: 2,  idCategoria: 1, nombre: 'Arepas de Queso',        descripcion: 'Arepa blanca rellena de queso costeño derretido',                             precio: 8000,   tiempoPrep: 10, imagen: '', activo: true,  ingredientes: [] },
  { id: 3,  idCategoria: 2, nombre: 'Ajiaco Santafereño',     descripcion: 'Sopa de pollo con tres papas, mazorca, guasca, alcaparras y crema de leche',  precio: 22000,  tiempoPrep: 40, imagen: '', activo: true,  ingredientes: [] },
  { id: 4,  idCategoria: 2, nombre: 'Sobrebarringa',          descripcion: 'Carne desmechada con yuca frita y hogao',                                    precio: 25000,  tiempoPrep: 35, imagen: '', activo: true,  ingredientes: [] },
  { id: 5,  idCategoria: 4, nombre: 'Postre de Natas',        descripcion: 'Natas con arequipe, brevas y queso',                                         precio: 12000,  tiempoPrep: 15, imagen: '', activo: true,  ingredientes: [] },
  { id: 6,  idCategoria: 1, nombre: 'Empanadas Antioqueñas',  descripcion: 'Empanadas de carne y papa con hogao y ají',                                  precio: 6000,   tiempoPrep: 20, imagen: '', activo: true,  ingredientes: [] },
  { id: 7,  idCategoria: 3, nombre: 'Chocolate Santafereño',  descripcion: 'Chocolate caliente con queso y almojábana',                                  precio: 7000,   tiempoPrep: 10, imagen: '', activo: true,  ingredientes: [] },
  { id: 8,  idCategoria: 5, nombre: 'Patacones con Hogao',    descripcion: 'Patacones verdes fritos con hogao de tomate y cebolla',                      precio: 9000,   tiempoPrep: 15, imagen: '', activo: false, ingredientes: [] },
];

export const RECETAS_BAR = [
  { id: 1,  idCategoria: 1, nombre: 'Margarita Clásica',       descripcion: 'Tequila, triple sec, jugo de limón, sal en el borde',                    precio: 22000, tiempoPrep: 5,  imagen: '', activo: true,  ingredientes: [] },
  { id: 2,  idCategoria: 1, nombre: 'Mojito Cubano',           descripcion: 'Ron blanco, hierbabuena, limón, azúcar, soda',                          precio: 20000, tiempoPrep: 5,  imagen: '', activo: true,  ingredientes: [] },
  { id: 3,  idCategoria: 2, nombre: 'Cuba Libre',              descripcion: 'Ron, Coca-Cola, limón',                                                    precio: 15000, tiempoPrep: 3,  imagen: '', activo: true,  ingredientes: [] },
  { id: 4,  idCategoria: 1, nombre: 'Piña Colada',             descripcion: 'Ron blanco, crema de coco, jugo de piña, hielo',                          precio: 25000, tiempoPrep: 7,  imagen: '', activo: true,  ingredientes: [] },
  { id: 5,  idCategoria: 3, nombre: 'Club Colombia Dorada',     descripcion: 'Cerveza rubia premium',                                                    precio: 8000,  tiempoPrep: 1,  imagen: '', activo: true,  ingredientes: [] },
  { id: 6,  idCategoria: 5, nombre: 'Limonada de Coco',        descripcion: 'Limonada natural con leche de coco y hierbabuena',                         precio: 12000, tiempoPrep: 5,  imagen: '', activo: true,  ingredientes: [] },
  { id: 7,  idCategoria: 4, nombre: 'Vino Tinto de la Casa',   descripcion: 'Copa de vino tinto Malbec',                                                 precio: 18000, tiempoPrep: 2,  imagen: '', activo: true,  ingredientes: [] },
  { id: 8,  idCategoria: 5, nombre: 'Soda Tropical',           descripcion: 'Agua saborizada natural con frutas de temporada',                           precio: 10000, tiempoPrep: 4,  imagen: '', activo: false, ingredientes: [] },
];

export const MENU_RECETAS = RECETAS_COCINA.filter(r => r.activo).map(r => ({
  id: r.id,
  nombre: r.nombre,
  descripcion: r.descripcion,
  precio: r.precio,
  categoria: CATEGORIAS_COCINA.find(c => c.id === r.idCategoria)?.nombre ?? '',
  imagen: r.imagen,
}));

export const MENU_BAR = RECETAS_BAR.filter(r => r.activo).map(r => ({
  id: r.id,
  nombre: r.nombre,
  descripcion: r.descripcion,
  precio: r.precio,
  categoria: CATEGORIAS_BAR.find(c => c.id === r.idCategoria)?.nombre ?? '',
  imagen: r.imagen,
}));

export const MESAS = [
  { id: 1,  numero: 'M-01', capacidad: 2,  ubicacion: 'Terraza',       estado: 'DISPONIBLE' },
  { id: 2,  numero: 'M-02', capacidad: 4,  ubicacion: 'Terraza',       estado: 'OCUPADA' },
  { id: 3,  numero: 'M-03', capacidad: 6,  ubicacion: 'Salón Principal', estado: 'RESERVADA' },
  { id: 4,  numero: 'M-04', capacidad: 4,  ubicacion: 'Salón Principal', estado: 'DISPONIBLE' },
  { id: 5,  numero: 'M-05', capacidad: 2,  ubicacion: 'VIP',            estado: 'OCUPADA' },
  { id: 6,  numero: 'M-06', capacidad: 8,  ubicacion: 'Salón Principal', estado: 'DISPONIBLE' },
  { id: 7,  numero: 'M-07', capacidad: 4,  ubicacion: 'VIP',            estado: 'INACTIVA' },
  { id: 8,  numero: 'M-08', capacidad: 2,  ubicacion: 'Terraza',       estado: 'DISPONIBLE' },
];

export const PEDIDOS = [
  { id: 1,  mesaId: 2,  mesero: 'Ana Martínez',    fecha: '2026-06-30T12:15:00', estado: 'EN_PREPARACION', total: 62000,  items: [{ id: 1, receta: 'Bandeja Paisa', cantidad: 2, precio: 28000, estado: 'EN_PREPARACION' }, { id: 2, receta: 'Mojito Cubano', cantidad: 1, precio: 20000, estado: 'LISTO' }] },
  { id: 2,  mesaId: 5,  mesero: 'Ana Martínez',    fecha: '2026-06-30T12:30:00', estado: 'ENTREGADO',      total: 45000,  items: [{ id: 1, receta: 'Ajiaco Santafereño', cantidad: 1, precio: 22000, estado: 'ENTREGADO' }, { id: 2, receta: 'Limonada de Coco', cantidad: 1, precio: 12000, estado: 'ENTREGADO' }] },
  { id: 3,  mesaId: 1,  mesero: 'Pedro Infante',   fecha: '2026-06-30T13:00:00', estado: 'PENDIENTE',       total: 28000,  items: [{ id: 1, receta: 'Arepas de Queso', cantidad: 2, precio: 8000, estado: 'PENDIENTE' }] },
  { id: 4,  mesaId: 3,  mesero: 'Ana Martínez',    fecha: '2026-06-30T11:45:00', estado: 'CANCELADO',       total: 34000,  items: [] },
];

export const SESION_CAJA = {
  id: 1,
  mesero: 'Ana Martínez',
  apertura: '2026-06-30T07:00:00',
  cierre: null,
  montoApertura: 500000,
  ventas: 62000,
  estado: 'ABIERTA',
};

export const FACTURAS_RESTAURANTE = [
  { id: 1, numero: 'FEL-0001', pedidoId: 2, mesa: 'M-05', mesero: 'Ana Martínez', total: 45000, fecha: '2026-06-30T12:45:00', estado: 'PAGADA', metodo: 'EFECTIVO' },
  { id: 2, numero: 'FEL-0002', pedidoId: 1, mesa: 'M-02', mesero: 'Ana Martínez', total: 62000, fecha: '2026-06-30T13:00:00', estado: 'CAUSADA', metodo: 'TARJETA' },
];

export const ROLES = [
  { id: 1, codigo: 'ADMINISTRADOR',  nombre: 'Administrador',  descripcion: 'Acceso total al sistema' },
  { id: 2, codigo: 'CONTADORA',      nombre: 'Contador',       descripcion: 'Gestión de reportes y finanzas' },
  { id: 3, codigo: 'INSTRUCTOR',     nombre: 'Instructor',     descripcion: 'Gestión de formación y bienes' },
  { id: 4, codigo: 'MESERO',         nombre: 'Mesero',         descripcion: 'Atención al cliente y pedidos' },
  { id: 5, codigo: 'CHEF',           nombre: 'Chef',           descripcion: 'Gestión de cocina y recetas' },
  { id: 6, codigo: 'APRENDIZ',       nombre: 'Aprendiz',       descripcion: 'Roles de formación' },
];

export const PRODUCTOS_CATALOGO = [
  { id: 'PROD-001', codigoSena: 'EQU-2024-001',  descripcion: 'Core i7, 16GB RAM, 512GB SSD',  codigoProveedor: 'PRV-992-B',  categoria: 'Equipos de Cómputo', categoriaColor: 'blue',    stockActual: 15, stockMinimo: 5,  unidadMedida: 'UND', valorNeto: 3781512,  iva: 19, estado: 'Activo',    estadoStock: 'DISPONIBLE',  proveedor: 'Dell Colombia S.A.S.',      fechaCompra: '2024-01-10', activo: true },
  { id: 'PROD-002', codigoSena: 'PAP-2024-042',  descripcion: 'Caja x 10 resmas',               codigoProveedor: 'PRV-118-P',  categoria: 'Papelería',        categoriaColor: 'amber',  stockActual: 4,  stockMinimo: 10, unidadMedida: 'UND', valorNeto: 100840,   iva: 19, estado: 'Bajo Stock', estadoStock: 'BAJO_STOCK',  proveedor: 'Papelería Nacional S.A.',   fechaCompra: '2024-03-15', activo: true },
  { id: 'PROD-003', codigoSena: 'MOB-2024-015',  descripcion: 'Respaldo en malla, ajuste lumbar', codigoProveedor: 'PRV-445-M', categoria: 'Mobiliario',       categoriaColor: 'green',  stockActual: 32, stockMinimo: 10, unidadMedida: 'UND', valorNeto: 714286,   iva: 19, estado: 'Activo',    estadoStock: 'DISPONIBLE',  proveedor: 'Muebles y Más S.A.S.',      fechaCompra: '2024-02-20', activo: true },
  { id: 'PROD-004', codigoSena: 'COC-2024-088',  descripcion: 'Olla a presión 8L',               codigoProveedor: 'PRV-221-C',  categoria: 'Cocina',          categoriaColor: 'purple', stockActual: 6,  stockMinimo: 8,  unidadMedida: 'UND', valorNeto: 1008403,  iva: 19, estado: 'Bajo Stock', estadoStock: 'BAJO_STOCK',  proveedor: 'Equipo Chef Colombia',      fechaCompra: '2024-01-25', activo: true },
  { id: 'PROD-005', codigoSena: 'INS-2024-012',  descripcion: 'Guantes de nitrilo caja x100',    codigoProveedor: 'PRV-556-G',  categoria: 'Insumos',         categoriaColor: 'red',    stockActual: 2,  stockMinimo: 20, unidadMedida: 'CAJ', valorNeto: 42000,    iva: 19, estado: 'Crítico',   estadoStock: 'AGOTADO',     proveedor: 'Insumos Médicos SAS',       fechaCompra: '2024-04-01', activo: true },
  { id: 'PROD-006', codigoSena: 'LIM-2024-007',  descripcion: 'Detergente líquido 5L',           codigoProveedor: 'PRV-778-L',  categoria: 'Limpieza',        categoriaColor: 'cyan',   stockActual: 50, stockMinimo: 10, unidadMedida: 'UND', valorNeto: 25000,    iva: 19, estado: 'Activo',    estadoStock: 'DISPONIBLE',  proveedor: 'Limpieza Total S.A.S.',     fechaCompra: '2024-05-10', activo: true },
  { id: 'PROD-007', codigoSena: 'ELE-2024-003',  descripcion: 'Multímetro digital',              codigoProveedor: 'PRV-332-E',  categoria: 'Equipos Eléctricos', categoriaColor: 'orange', stockActual: 18, stockMinimo: 5,  unidadMedida: 'UND', valorNeto: 156000,   iva: 19, estado: 'Activo',    estadoStock: 'DISPONIBLE',  proveedor: 'ElectroTools SAS',          fechaCompra: '2024-06-20', activo: true },
  { id: 'PROD-008', codigoSena: 'ALI-2024-091',  descripcion: 'Harina de Trigo x 50kg',          codigoProveedor: 'PRV-889-A',  categoria: 'Alimentos',       categoriaColor: 'brown',  stockActual: 0,  stockMinimo: 15, unidadMedida: 'BTO', valorNeto: 150000,   iva: 0,  estado: 'Agotado',   estadoStock: 'AGOTADO',     proveedor: 'Molinos del Quindío',       fechaCompra: '2024-05-30', activo: true },
];

export const EXISTENCIAS = PRODUCTOS_CATALOGO.map(p => ({
  productoId: p.id,
  codigoSena: p.codigoSena,
  descripcion: p.descripcion,
  stockActual: p.stockActual,
  stockMinimo: p.stockMinimo,
  unidadMedida: p.unidadMedida,
  estado: p.estadoStock,
  ubicacion: 'Almacén Principal',
}));

export const INVENTORY_KPIS = {
  totalProductos: PRODUCTOS_CATALOGO.length,
  valorTotal: 458240000,
  totalAlertas: 3,
  movimientosHoy: 42,
  tendenciaValor: 12,
  productosBajoStock: 2,
  productosAgotados: 2,
};

export const PROVEEDORES = [
  { id: 1, nombre: 'Dell Colombia S.A.S.',       nit: '900123456-1',  telefono: '6012345678', email: 'ventas@dell.co',   ciudad: 'Bogotá',    estado: 'ACTIVO' },
  { id: 2, nombre: 'Papelería Nacional S.A.',     nit: '800789012-3',  telefono: '6045678901', email: 'info@papeleria.co', ciudad: 'Medellín',  estado: 'ACTIVO' },
  { id: 3, nombre: 'Equipo Chef Colombia',        nit: '900345678-5',  telefono: '6023456789', email: 'ventas@equipochef.co', ciudad: 'Cali',   estado: 'ACTIVO' },
  { id: 4, nombre: 'Insumos Médicos SAS',         nit: '800567890-7',  telefono: '6056789012', email: 'ventas@insumos.co',  ciudad: 'Barranquilla', estado: 'ACTIVO' },
  { id: 5, nombre: 'Molinos del Quindío',         nit: '800123456-9',  telefono: '6067890123', email: 'ventas@molinos.com', ciudad: 'Armenia', estado: 'ACTIVO' },
];

export const SOLICITUDES_GIL = [
  { id: 1,  numeroGil: 'GIL-F-014-2026-001', fechaSolicitud: '2026-06-25', regionalCodigo: 63, regionalNombre: 'Quindío', centroCostosCodigo: 953810, centroCostosNombre: 'Comercio y Turismo', area: 'Gastronomía', destinoBienes: 'FORMACION', jefeOficinaCoordinador: 'María García Rincón', cuentadantes: [{ id: 1, nombre: 'Carlos Ruiz', cedula: '1234567890' }], solicitante: 'Ricardo Sarmiento', codigoGrupo: 'ADSO-2670687', estado: 'BORRADOR', bienes: [{ codigoSena: 'ALI-2024-091', descripcion: 'Harina de Trigo x 50kg', unidadMedida: 'BTO', cantidad: 2, valorUnitario: 150000, subtotal: 300000 }] },
  { id: 2,  numeroGil: 'GIL-F-014-2026-002', fechaSolicitud: '2026-06-22', regionalCodigo: 63, regionalNombre: 'Quindío', centroCostosCodigo: 953810, centroCostosNombre: 'Comercio y Turismo', area: 'Mantenimiento', destinoBienes: 'LABORATORIO', jefeOficinaCoordinador: 'María García Rincón', cuentadantes: [{ id: 2, nombre: 'Martha Gomez', cedula: '9876543210' }], solicitante: 'Martha Lucía Peña', codigoGrupo: 'MANT-2550122', estado: 'EMITIDO', bienes: [{ codigoSena: 'ELE-2024-003', descripcion: 'Multímetro digital', unidadMedida: 'UND', cantidad: 5, valorUnitario: 156000, subtotal: 780000 }] },
  { id: 3,  numeroGil: 'GIL-F-014-2026-003', fechaSolicitud: '2026-06-20', regionalCodigo: 63, regionalNombre: 'Quindío', centroCostosCodigo: 953810, centroCostosNombre: 'Comercio y Turismo', area: 'Gestión Empresarial', destinoBienes: 'AULA', jefeOficinaCoordinador: 'María García Rincón', cuentadantes: [{ id: 3, nombre: 'Fernando Vallejo', cedula: '5551234567' }], solicitante: 'Ricardo Sarmiento', codigoGrupo: 'GEST-2899341', estado: 'ENVIADO_PROVEEDOR', bienes: [{ codigoSena: 'PAP-2024-042', descripcion: 'Caja x 10 resmas', unidadMedida: 'UND', cantidad: 10, valorUnitario: 100840, subtotal: 1008400 }] },
  { id: 4,  numeroGil: 'GIL-F-014-2026-004', fechaSolicitud: '2026-06-18', regionalCodigo: 63, regionalNombre: 'Quindío', centroCostosCodigo: 953810, centroCostosNombre: 'Comercio y Turismo', area: 'Gastronomía', destinoBienes: 'FORMACION', jefeOficinaCoordinador: 'María García Rincón', cuentadantes: [{ id: 4, nombre: 'Lucía Prada', cedula: '3334445556' }], solicitante: 'Martha Lucía Peña', codigoGrupo: 'ADSO-2670687', estado: 'VERIFICADO', bienes: [{ codigoSena: 'COC-2024-088', descripcion: 'Olla a presión 8L', unidadMedida: 'UND', cantidad: 4, valorUnitario: 1200000, subtotal: 4800000 }] },
  { id: 5,  numeroGil: 'GIL-F-014-2026-005', fechaSolicitud: '2026-06-15', regionalCodigo: 63, regionalNombre: 'Quindío', centroCostosCodigo: 953810, centroCostosNombre: 'Comercio y Turismo', area: 'Mantenimiento', destinoBienes: 'LABORATORIO', jefeOficinaCoordinador: 'María García Rincón', cuentadantes: [{ id: 5, nombre: 'Roberto Jaramillo', cedula: '7778889990' }], solicitante: 'Ricardo Sarmiento', codigoGrupo: 'MANT-2550122', estado: 'CERRADO', bienes: [{ codigoSena: 'LIM-2024-007', descripcion: 'Detergente líquido 5L', unidadMedida: 'UND', cantidad: 20, valorUnitario: 25000, subtotal: 500000 }] },
];

export const SOLICITUDES_SESION = [
  { id: 1, instructora: 'Carlos Ruiz',  fichaId: 'FICHA-001', ficha: 'ADSO 2670687',  programa: 'ADSO',  trimestre: 1, fechaInicio: '2026-06-10', fechaFin: '2026-06-14', horasPlan: 40, estado: 'APROBADA',  tipo: 'PRESENCIAL' },
  { id: 2, instructora: 'Lucía Prada',  fichaId: 'FICHA-002', ficha: 'GESTIÓN 2025',   programa: 'Gestión Empresarial', trimestre: 2, fechaInicio: '2026-06-17', fechaFin: '2026-06-21', horasPlan: 30, estado: 'PENDIENTE', tipo: 'PRESENCIAL' },
];

export const PRESUPUESTOS = [
  { id: 1,  fichaId: 'FICHA-001', ficha: 'ADSO 2670687',  vigencia: 2026, presupuestoAsignado: 15000000, presupuestoEjecutado: 8200000,  disponible: 6800000,   estado: 'ACTIVO',   fechaInicio: '2026-01-01', fechaFin: '2026-12-31' },
  { id: 2,  fichaId: 'FICHA-002', ficha: 'GESTIÓN 2025',   vigencia: 2026, presupuestoAsignado: 8000000,  presupuestoEjecutado: 3500000,  disponible: 4500000,   estado: 'ACTIVO',   fechaInicio: '2026-01-01', fechaFin: '2026-12-31' },
  { id: 3,  fichaId: 'FICHA-001', ficha: 'ADSO 2670687',  vigencia: 2025, presupuestoAsignado: 12000000, presupuestoEjecutado: 12000000, disponible: 0,          estado: 'CERRADO',  fechaInicio: '2025-01-01', fechaFin: '2025-12-31' },
];

export const COMPROMISOS = [
  { id: 1,  presupuestoId: 1,  descripcion: 'Compra de insumos de cocina',     monto: 2500000,  estado: 'COMPROMETIDO',  fecha: '2026-03-15', proveedor: 'Equipo Chef Colombia' },
  { id: 2,  presupuestoId: 1,  descripcion: 'Material papelería',               monto: 800000,   estado: 'PAGADO',       fecha: '2026-04-20', proveedor: 'Papelería Nacional S.A.' },
  { id: 3,  presupuestoId: 2,  descripcion: 'Equipos de cómputo',               monto: 4500000,  estado: 'COMPROMETIDO',  fecha: '2026-05-10', proveedor: 'Dell Colombia S.A.S.' },
];

export const RESUMEN_PRESUPUESTOS = {
  totalVigencia: 2026,
  presupuestoTotal: 23000000,
  ejecutadoTotal: 11700000,
  disponibleTotal: 11300000,
  presupuestosActivos: 2,
  presupuestosCerrados: 1,
  porcentajeEjecucion: 50.87,
};

export const FACTURAS_COMPRA = [
  { id: 1,  numeroFactura: 'FEL-99281',  proveedor: 'Dell Colombia S.A.S.',     fechaEmision: '2026-01-10', fechaVencimiento: '2026-02-10',  montoTotal: 4500000,  estado: 'PAGADA',   tipo: 'COMPRA',  metodoPago: 'TRANSFERENCIA' },
  { id: 2,  numeroFactura: 'FEL-98745',  proveedor: 'Papelería Nacional S.A.',  fechaEmision: '2026-03-15', fechaVencimiento: '2026-04-15',  montoTotal: 120000,   estado: 'CAUSADA',  tipo: 'COMPRA',  metodoPago: 'EFECTIVO' },
  { id: 3,  numeroFactura: 'FNC-00123',  proveedor: 'Equipo Chef Colombia',     fechaEmision: '2026-05-20', fechaVencimiento: '2026-06-20',  montoTotal: 1200000,  estado: 'VERIFICADA', tipo: 'COMPRA', metodoPago: null },
  { id: 4,  numeroFactura: 'FEL-99812',  proveedor: 'Dell Colombia S.A.S.',     fechaEmision: '2026-06-01', fechaVencimiento: '2026-07-01',  montoTotal: 3800000,  estado: 'EMITIDA',  tipo: 'COMPRA',  metodoPago: null },
];

export const FACTURAS_RESUMEN = {
  totalFacturas: FACTURAS_COMPRA.length,
  montoTotalFacturado: 9620000,
  montoPendientePago: 5000000,
  facturasVencidas: 0,
  facturasPorVencer: 2,
};

export const CONCILIACIONES_INVENTARIO = [
  { id: 1,  codigo: 'CON-2026-001', fecha: '2026-06-15', responsable: 'Carlos Ruiz',      estado: 'ABIERTA',   tipo: 'PARCIAL',  observacion: 'Conciliación de cocina' },
  { id: 2,  codigo: 'CON-2026-002', fecha: '2026-05-20', responsable: 'María García',      estado: 'CERRADA',   tipo: 'TOTAL',    observacion: 'Cierre de mes' },
  { id: 3,  codigo: 'CON-2026-003', fecha: '2026-06-28', responsable: 'Martha Gomez',     estado: 'ABIERTA',   tipo: 'PARCIAL',  observacion: 'Revisión de almacén' },
];

export const CONCILIACIONES_GIL = [
  { id: 1,  facturaId: 1,  gilId: 1,  numeroGil: 'GIL-F-014-2026-001', estado: 'CONCILIADA', fecha: '2026-06-26', montoFactura: 300000, montoGil: 300000, diferencia: 0 },
  { id: 2,  facturaId: 2,  gilId: 2,  numeroGil: 'GIL-F-014-2026-002', estado: 'CONCILIADA', fecha: '2026-06-23', montoFactura: 780000, montoGil: 780000, diferencia: 0 },
  { id: 3,  facturaId: 3,  gilId: 3,  numeroGil: 'GIL-F-014-2026-003', estado: 'CON_DIFERENCIA', fecha: '2026-06-21', montoFactura: 1000000, montoGil: 1008400, diferencia: -8400 },
];

export const ALERTAS = [
  { id: 1,  tipo: 'STOCK_BAJO',     mensaje: 'Papelería - Caja x 10 resmas está por debajo del mínimo', severidad: 'MEDIA',   leida: false, fecha: '2026-06-29', productoId: 'PROD-002' },
  { id: 2,  tipo: 'STOCK_CRITICO',  mensaje: 'Guantes de nitrilo están críticos (quedan 2 cajas)',       severidad: 'ALTA',    leida: false, fecha: '2026-06-30', productoId: 'PROD-005' },
  { id: 3,  tipo: 'STOCK_AGOTADO',  mensaje: 'Harina de Trigo agotada en el inventario',                  severidad: 'ALTA',    leida: false, fecha: '2026-06-30', productoId: 'PROD-008' },
  { id: 4,  tipo: 'VENCIMIENTO',    mensaje: 'Factura FNC-00123 vence en 5 días',                        severidad: 'BAJA',    leida: true,  fecha: '2026-06-25' },
];

export const RESUMEN_ALERTAS = {
  total: ALERTAS.length,
  noLeidas: ALERTAS.filter(a => !a.leida).length,
  criticas: ALERTAS.filter(a => a.severidad === 'ALTA').length,
  medias: ALERTAS.filter(a => a.severidad === 'MEDIA').length,
  bajas: ALERTAS.filter(a => a.severidad === 'BAJA').length,
};

export const REQUISICIONES = [
  { id: 1,  codigo: 'REQ-2026-001', solicitante: 'Carlos Ruiz',     fecha: '2026-06-20', estado: 'PENDIENTE',  tipo: 'INSUMO',   prioridad: 'ALTA',   descripcion: 'Solicitud de ingredientes para taller de cocina' },
  { id: 2,  codigo: 'REQ-2026-002', solicitante: 'Martha Gomez',    fecha: '2026-06-18', estado: 'DESPACHADA', tipo: 'HERRAMIENTA', prioridad: 'MEDIA', descripcion: 'Herramientas para mantenimiento' },
  { id: 3,  codigo: 'REQ-2026-003', solicitante: 'Lucía Prada',     fecha: '2026-06-15', estado: 'FIRMADA',    tipo: 'PAPELERIA', prioridad: 'BAJA',  descripcion: 'Resmas de papel y carpetas' },
  { id: 4,  codigo: 'REQ-2026-004', solicitante: 'Roberto Jaramillo', fecha: '2026-06-10', estado: 'ENVIADA', tipo: 'INSUMO',   prioridad: 'URGENTE', descripcion: 'Insumos de limpieza urgentes' },
];

export const ACTAS = [
  { id: 1,  codigo: 'ACTA-2026-001', titulo: 'Entrega de equipos cómputo',        fecha: '2026-06-25', estado: 'BORRADOR',  tipo: 'ENTREGA',  responsable: 'Carlos Ruiz',  beneficiario: 'ADSO 2670687' },
  { id: 2,  codigo: 'ACTA-2026-002', titulo: 'Recepción de insumos cocina',       fecha: '2026-06-20', estado: 'FIRMADO',   tipo: 'RECEPCION', responsable: 'María García',  beneficiario: 'Cocina' },
  { id: 3,  codigo: 'ACTA-2026-003', titulo: 'Acta de destrucción de inventario', fecha: '2026-06-10', estado: 'ARCHIVADO', tipo: 'DESTRUCCION', responsable: 'Martha Gomez', beneficiario: 'N/A' },
];

export const PAQUETES = [
  { id: 1,  codigo: 'PAQ-2026-001', fichaId: 'FICHA-001', ficha: 'ADSO 2670687',  fechaCreacion: '2026-06-01', estado: 'EN_REVISION',  tipo: 'GIL',      montoTotal: 1500000,  periodicidad: 'MENSUAL' },
  { id: 2,  codigo: 'PAQ-2026-002', fichaId: 'FICHA-002', ficha: 'GESTIÓN 2025',   fechaCreacion: '2026-06-05', estado: 'COMPLETADO', tipo: 'FORMACION', montoTotal: 2500000,  periodicidad: 'TRIMESTRAL' },
  { id: 3,  codigo: 'PAQ-2026-003', fichaId: 'FICHA-001', ficha: 'ADSO 2670687',  fechaCreacion: '2026-05-01', estado: 'ARCHIVADO',  tipo: 'GIL',      montoTotal: 800000,    periodicidad: 'MENSUAL' },
];

export const CONSOLIDADOS = [
  { id: 1,  numero: 'CONS-2026-001', fichaId: 'FICHA-001', ficha: 'ADSO 2670687',  vigencia: 2026, montoTotal: 5200000, estado: 'ACTIVO',  fechaCreacion: '2026-06-01', periodoSemestre: 1 },
  { id: 2,  numero: 'CONS-2026-002', fichaId: 'FICHA-002', ficha: 'GESTIÓN 2025',   vigencia: 2026, montoTotal: 3800000, estado: 'ACTIVO',  fechaCreacion: '2026-06-15', periodoSemestre: 1 },
];

export const PROGRAMAS = [
  { id: 1, codigo: 'ADSO',         nombre: 'Análisis y Desarrollo de Software',  modalidad: 'PRESENCIAL', duracionMeses: 24 },
  { id: 2, codigo: 'GESTION',      nombre: 'Gestión Empresarial',                modalidad: 'VIRTUAL',    duracionMeses: 18 },
  { id: 3, codigo: 'COCINA',       nombre: 'Cocina y Gastronomía',               modalidad: 'PRESENCIAL', duracionMeses: 12 },
  { id: 4, codigo: 'MANTENIMIENTO', nombre: 'Mantenimiento Industrial',          modalidad: 'PRESENCIAL', duracionMeses: 18 },
];

export const CONTRATOS = [
  { id: 1,  numero: 'CTO-2026-001',  proveedor: 'Dell Colombia S.A.S.',          vigencia: 2026, objeto: 'Suministro de equipos de cómputo',                         valor: 15000000, estado: 'ACTIVO',   fechaInicio: '2026-01-01', fechaFin: '2026-12-31' },
  { id: 2,  numero: 'CTO-2026-002',  proveedor: 'Papelería Nacional S.A.',       vigencia: 2026, objeto: 'Suministro de papelería y útiles de oficina',                valor: 5000000,  estado: 'ACTIVO',   fechaInicio: '2026-02-01', fechaFin: '2026-12-31' },
  { id: 3,  numero: 'CTO-2025-001',  proveedor: 'Equipo Chef Colombia',          vigencia: 2025, objeto: 'Equipamiento de cocina',                                     valor: 12000000, estado: 'CERRADO', fechaInicio: '2025-01-01', fechaFin: '2025-12-31' },
];

export const MOVIMIENTOS_INVENTARIO = [
  { id: 1,  fecha: '2026-06-29', tipo: 'ENTRADA', responsable: 'Admin Central',     ubicacion: 'Almacén General',  cantidad: 50,   productoId: 'PROD-006', observacion: 'Compra de detergente' },
  { id: 2,  fecha: '2026-06-28', tipo: 'SALIDA',  responsable: 'Carlos Ruiz',       ubicacion: 'Cocina',           cantidad: -5,   productoId: 'PROD-004', observacion: 'Asignación a taller gastronómico' },
  { id: 3,  fecha: '2026-06-27', tipo: 'ENTRADA', responsable: 'Proveedor',         ubicacion: 'Almacén General',  cantidad: 10,   productoId: 'PROD-001', observacion: 'Ingreso de nuevos equipos' },
  { id: 4,  fecha: '2026-06-26', tipo: 'SALIDA',  responsable: 'Martha Gomez',     ubicacion: 'Lab. 302',          cantidad: -2,   productoId: 'PROD-007', observacion: 'Préstamo para prácticas' },
  { id: 5,  fecha: '2026-06-25', tipo: 'AJUSTE',  responsable: 'Inventario',       ubicacion: 'Almacén General',  cantidad: -1,   productoId: 'PROD-005', observacion: 'Ajuste por diferencia de inventario' },
];

export const NOTIFICACIONES = [
  { id: 1,  titulo: 'Nuevo pedido',         mensaje: 'Mesa M-02 tiene un nuevo pedido #1',           leida: false, fecha: '2026-06-30T12:15:00', tipo: 'PEDIDO',      referencia: '1' },
  { id: 2,  titulo: 'Alerta de stock',      mensaje: 'Harina de Trigo agotada',                       leida: false, fecha: '2026-06-30T08:00:00', tipo: 'ALERTA',     referencia: 'PROD-008' },
  { id: 3,  titulo: 'Conciliación pendiente', mensaje: 'GIL-F-014-2026-003 pendiente de conciliar',  leida: true,  fecha: '2026-06-29T10:00:00', tipo: 'CONCILIACION', referencia: '3' },
  { id: 4,  titulo: 'Factura vencida',      mensaje: 'FEL-98745 está próxima a vencer',               leida: false, fecha: '2026-06-28T09:00:00', tipo: 'FACTURA',     referencia: '2' },
];

export const COMANDA_COCINA = [
  { id: 1,  mesa: 'M-02',    pedidoId: 1,  items: [{ idDetalle: 1, receta: 'Bandeja Paisa',    cantidad: 2, estado: 'EN_PREPARACION' }, { idDetalle: 2, receta: 'Mojito Cubano',   cantidad: 1, estado: 'PENDIENTE' }],  fecha: '2026-06-30T12:15:00', estado: 'EN_PROCESO' },
  { id: 3,  mesa: 'M-01',    pedidoId: 3,  items: [{ idDetalle: 3, receta: 'Arepas de Queso',  cantidad: 2, estado: 'PENDIENTE' }],                           fecha: '2026-06-30T13:00:00', estado: 'PENDIENTE' },
];

export const COMANDA_BAR = [
  { id: 2,  mesa: 'M-05',    pedidoId: 2,  items: [{ idDetalle: 4, receta: 'Limonada de Coco', cantidad: 1, estado: 'LISTO' }],                                fecha: '2026-06-30T12:30:00', estado: 'LISTO' },
];

export const ESTADISTICAS_COCINA_KPI = {
  totalComandas: COMANDA_COCINA.length,
  pendientes: COMANDA_COCINA.filter(c => c.estado === 'PENDIENTE').length,
  enProceso: COMANDA_COCINA.filter(c => c.estado === 'EN_PROCESO').length,
  completadasHoy: 15,
  tiempoPromedio: 18,
  platillosMasVendidos: [
    { nombre: 'Bandeja Paisa', cantidad: 12 },
    { nombre: 'Ajiaco Santafereño', cantidad: 8 },
    { nombre: 'Arepas de Queso', cantidad: 6 },
  ],
};

export const ESTADISTICAS_BAR_KPI = {
  totalComandas: COMANDA_BAR.length,
  pendientes: 0,
  enProceso: 0,
  completadasHoy: 8,
  tiempoPromedio: 4,
  bebidasMasVendidas: [
    { nombre: 'Limonada de Coco', cantidad: 10 },
    { nombre: 'Mojito Cubano', cantidad: 6 },
    { nombre: 'Club Colombia Dorada', cantidad: 5 },
  ],
};

export const PROMEDIO_PLATOS = [
  { plato: 'Bandeja Paisa',         promedio: 22 },
  { plato: 'Ajiaco Santafereño',    promedio: 35 },
  { plato: 'Arepas de Queso',       promedio: 8 },
  { plato: 'Postre de Natas',       promedio: 12 },
];

export const CARGA_TRABAJO_COCINA = [
  { hora: '07:00', comandas: 2, platos: 3 },
  { hora: '08:00', comandas: 0, platos: 0 },
  { hora: '09:00', comandas: 1, platos: 2 },
  { hora: '10:00', comandas: 0, platos: 0 },
  { hora: '11:00', comandas: 1, platos: 4 },
  { hora: '12:00', comandas: 5, platos: 12 },
  { hora: '13:00', comandas: 3, platos: 8 },
  { hora: '14:00', comandas: 2, platos: 5 },
];

export const REPORTES_RECIENTES = [
  { id: 1,  nombre: 'Gestión de Bienes',          tipo: 'bienes',         periodicidad: 'MENSUAL',  fechaGeneracion: '2026-06-28', estado: 'COMPLETADO', url: '/api/reportes/1/pdf' },
  { id: 2,  nombre: 'Presupuesto General',        tipo: 'presupuesto',    periodicidad: 'MENSUAL',  fechaGeneracion: '2026-06-25', estado: 'COMPLETADO', url: '/api/reportes/2/pdf' },
  { id: 3,  nombre: 'Conciliación',               tipo: 'conciliacion',   periodicidad: 'MENSUAL',  fechaGeneracion: '2026-06-20', estado: 'COMPLETADO', url: '/api/reportes/3/pdf' },
];

export const COMENTARIOS_APROBADOS = [
  { id: 1,  usuario: 'Carlos Ruiz',     puntuacion: 5, comentario: 'Excelente servicio, la comida deliciosa',               fecha: '2026-06-29', estado: 'APROBADO' },
  { id: 2,  usuario: 'Ana López',       puntuacion: 4, comentario: 'Muy buena atención, volveré pronto',                    fecha: '2026-06-28', estado: 'APROBADO' },
  { id: 3,  usuario: 'Pedro Martínez',  puntuacion: 5, comentario: 'La bandeja paisa espectacular, como en casa',           fecha: '2026-06-27', estado: 'APROBADO' },
  { id: 4,  usuario: 'Sofía Ramírez',   puntuacion: 3, comentario: 'Buen ambiente, pero el postre tardó mucho',             fecha: '2026-06-26', estado: 'APROBADO' },
];

export const COMENTARIOS_PENDIENTES = [
  { id: 5,  usuario: 'Andrés Gil',      puntuacion: 2, comentario: 'La sopa llegó fría, no me gustó',                      fecha: '2026-06-30', estado: 'PENDIENTE' },
  { id: 6,  usuario: 'Laura Vega',      puntuacion: 4, comentario: 'Buenos cócteles, el mojito muy rico',                   fecha: '2026-06-30', estado: 'PENDIENTE' },
];

export const CONFIGURACION_SISTEMA = {
  seguridad: {
    intentosMaximos: 3,
    tiempoBloqueoMinutos: 30,
    requerirMayusculas: true,
    requerirEspeciales: true,
    longitudMinima: 8,
    expiracionPasswordDias: 90,
  },
  notificaciones: {
    emailServidor: 'smtp.gmail.com',
    emailPuerto: 587,
    emailOrigen: 'notificaciones@gastrosena.edu.co',
  },
  preferencias: {
    idioma: 'es',
    zonaHoraria: 'America/Bogota',
  },
};

export const ACTIVIDADES = [
  { id: 1,  nombre: 'Taller de Cocina Básica',         fecha: '2026-06-30', jornada: 'MAÑANA', ficha: '2670687',  trimestre: '1', estado: 'Activa' },
  { id: 2,  nombre: 'Práctica de Repostería',           fecha: '2026-06-30', jornada: 'TARDE',  ficha: '2670687',  trimestre: '1', estado: 'Activa' },
  { id: 3,  nombre: 'Evaluación de Técnicas de Corte',  fecha: '2026-06-28', jornada: 'MAÑANA', ficha: '2670687',  trimestre: '1', estado: 'Finalizada' },
  { id: 4,  nombre: 'Introducción a la Gastronomía',    fecha: '2026-07-01', jornada: 'MAÑANA', ficha: '2899341',  trimestre: '1', estado: 'Pendiente' },
];

export const EVALUACIONES_EJEMPLO = [
  { aprendizId: 1,  estado: 'Aprobó',     observaciones: 'Buen desempeño en la práctica' },
  { aprendizId: 2,  estado: 'Aprobó',     observaciones: 'Cumplió con los estándares' },
  { aprendizId: 3,  estado: 'No Aprobó',  observaciones: 'Debe mejorar técnicas básicas' },
];

export const INCIDENCIAS_COCINA = {
  canceladas: [
    { id: 1, pedidoId: 4, motivo: 'Cliente canceló', mesa: 'M-03', fecha: '2026-06-30T11:45:00', responsable: 'Ana Martínez' },
  ],
  devueltas: [
    { id: 1, pedidoId: 2, motivo: 'Plato incompleto', mesa: 'M-05', fecha: '2026-06-30T12:35:00', responsable: 'Ana Martínez', item: 'Ajiaco Santafereño' },
  ],
};

export const HISTORIAL_USUARIO = [
  { id: 1,  usuario: 'Admin Sistema',  accion: 'Inicio de sesión',          fecha: '2026-06-30T07:00:00', detalle: 'Acceso al sistema' },
  { id: 2,  usuario: 'Ana Martínez',   accion: 'Apertura de caja',          fecha: '2026-06-30T07:05:00', detalle: 'Caja #1 apertura con $500.000' },
  { id: 3,  usuario: 'Carlos Ruiz',    accion: 'Creación de solicitud GIL', fecha: '2026-06-29T10:30:00', detalle: 'GIL-F-014-2026-001 creado' },
  { id: 4,  usuario: 'María García',   accion: 'Generación de reporte',     fecha: '2026-06-28T15:00:00', detalle: 'Reporte de conciliación generado' },
];

export const KARDEX_MOVIMIENTOS = [
  { id: 1,  fecha: '2026-06-01', tipo: 'ENTRADA',       cantidad: 20,  saldo: 35,  valorUnitario: 150000,  valorTotal: 3000000,  documento: 'FEL-99281',      observacion: 'Compra inicial' },
  { id: 2,  fecha: '2026-06-10', tipo: 'SALIDA',        cantidad: -5,  saldo: 30,  valorUnitario: 150000,  valorTotal: -750000,  documento: 'REQ-2026-001',   observacion: 'Taller de cocina' },
  { id: 3,  fecha: '2026-06-20', tipo: 'SALIDA',        cantidad: -3,  saldo: 27,  valorUnitario: 150000,  valorTotal: -450000,  documento: 'REQ-2026-004',   observacion: 'Insumos urgentes' },
  { id: 4,  fecha: '2026-06-25', tipo: 'AJUSTE',        cantidad: -1,  saldo: 26,  valorUnitario: 150000,  valorTotal: -150000,  documento: 'AJU-2026-001',   observacion: 'Ajuste por merma' },
  { id: 5,  fecha: '2026-06-28', tipo: 'ENTRADA',       cantidad: 15,  saldo: 41,  valorUnitario: 155000,  valorTotal: 2325000,  documento: 'FEL-99812',      observacion: 'Nuevo lote' },
];

export const EJECUCION_MENSUAL = [
  { mes: 'Enero',   presupuestado: 2000000, ejecutado: 1800000 },
  { mes: 'Febrero', presupuestado: 2000000, ejecutado: 1500000 },
  { mes: 'Marzo',   presupuestado: 2000000, ejecutado: 2200000 },
  { mes: 'Abril',   presupuestado: 2000000, ejecutado: 1400000 },
  { mes: 'Mayo',    presupuestado: 2000000, ejecutado: 1900000 },
  { mes: 'Junio',   presupuestado: 2000000, ejecutado: 2400000 },
];

export const VENCIMIENTOS = [
  { id: 1,  tipo: 'FACTURA',       referencia: 'FNC-00123',  descripcion: 'Factura Equipo Chef',  fechaVencimiento: '2026-07-05',  diasRestantes: 5,  monto: 1200000,  proveedor: 'Equipo Chef Colombia' },
  { id: 2,  tipo: 'CONTRATO',      referencia: 'CTO-2026-001', descripcion: 'Contrato Dell',        fechaVencimiento: '2026-12-31',  diasRestantes: 184, monto: 15000000, proveedor: 'Dell Colombia S.A.S.' },
];

export const CONSUMO_REPORTE = [
  { ficha: 'ADSO 2670687', instructor: 'Carlos Ruiz',     producto: 'Harina de Trigo',      cantidad: 10,  valorTotal: 1500000,  periodo: '2026-06' },
  { ficha: 'ADSO 2670687', instructor: 'Carlos Ruiz',     producto: 'Aceite Vegetal',        cantidad: 5,   valorTotal: 125000,   periodo: '2026-06' },
  { ficha: 'GESTIÓN 2025',  instructor: 'Lucía Prada',     producto: 'Papelería',             cantidad: 3,   valorTotal: 302520,   periodo: '2026-06' },
];

export const TRAZABILIDAD_DOCUMENTAL = [
  { id: 1,  tipo: 'GIL',         referencia: 'GIL-F-014-2026-001',  estado: 'BORRADOR',       fecha: '2026-06-25', area: 'Gastronomía',       responsable: 'Carlos Ruiz' },
  { id: 2,  tipo: 'REQUISICION', referencia: 'REQ-2026-001',        estado: 'DESPACHADA',     fecha: '2026-06-22', area: 'Cocina',            responsable: 'Carlos Ruiz' },
  { id: 3,  tipo: 'ACTA',        referencia: 'ACTA-2026-001',       estado: 'FIRMADO',        fecha: '2026-06-20', area: 'Almacén',           responsable: 'María García' },
  { id: 4,  tipo: 'FACTURA',     referencia: 'FEL-99281',           estado: 'PAGADA',         fecha: '2026-06-15', area: 'Contabilidad',      responsable: 'María García' },
];

export const CONCILIACIONES_CATALOGO = [
  { id: 1,  codigoSena: 'EQU-2024-001', descripcion: 'Core i7, 16GB RAM',      categoria: 'Equipos de Cómputo', stockEsperado: 15, stockReal: 15, diferencia: 0 },
  { id: 2,  codigoSena: 'COC-2024-088', descripcion: 'Olla a presión 8L',      categoria: 'Cocina',             stockEsperado: 6,  stockReal: 5,  diferencia: -1 },
  { id: 3,  codigoSena: 'PAP-2024-042', descripcion: 'Caja x 10 resmas',       categoria: 'Papelería',          stockEsperado: 4,  stockReal: 4,  diferencia: 0 },
  { id: 4,  codigoSena: 'INS-2024-012', descripcion: 'Guantes de nitrilo',     categoria: 'Insumos',            stockEsperado: 2,  stockReal: 1,  diferencia: -1 },
];

export const CONFIGURACION_SEGURIDAD = {
  intentosMaximos: 3,
  tiempoBloqueoMinutos: 30,
  requerirMayusculas: true,
  requerirEspeciales: true,
  longitudMinima: 8,
  expiracionPasswordDias: 90,
};

export const UMBRALES_STOCK = [
  { productoId: 'PROD-001', codigoSena: 'EQU-2024-001', descripcion: 'Core i7',       stockMinimo: 5,  stockMaximo: 50 },
  { productoId: 'PROD-002', codigoSena: 'PAP-2024-042', descripcion: 'Caja resmas',    stockMinimo: 10, stockMaximo: 100 },
  { productoId: 'PROD-005', codigoSena: 'INS-2024-012', descripcion: 'Guantes nitrilo', stockMinimo: 20, stockMaximo: 200 },
];

export const BIENES_LIMPIEZA_INACTIVOS = [
  { id: 'PROD-009', codigoSena: 'OBS-2023-001', descripcion: 'Mobiliario obsoleto', categoria: 'Mobiliario', stockActual: 0, fechaDesactivacion: '2025-12-01' },
  { id: 'PROD-010', codigoSena: 'EQU-2023-055', descripcion: 'Monitor CRT 17"',      categoria: 'Equipos de Cómputo', stockActual: 3, fechaDesactivacion: '2025-06-15' },
];

export const PRECIOS_VIGENTES = [
  { codigoSena: 'EQU-2024-001', descripcion: 'Core i7, 16GB RAM',  precioUnitario: 4500000,  vigencia: 2026, contrato: 'CTO-2026-001' },
  { codigoSena: 'PAP-2024-042', descripcion: 'Caja x 10 resmas',   precioUnitario: 120000,   vigencia: 2026, contrato: 'CTO-2026-002' },
];
