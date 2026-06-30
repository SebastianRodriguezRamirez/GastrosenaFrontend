import { HttpInterceptorFn, HttpRequest, HttpEvent, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import * as MOCK from './mock-data';

type MockHandler = (req: HttpRequest<unknown>) => object | null | HttpResponse<unknown>;

const findById = <T extends { id: number | string }>(arr: T[], id: string | number): T | undefined =>
  arr.find(x => String(x.id) === String(id));

const paginate = (data: unknown[], page: number, size: number) => ({
  content: data.slice(page * size, (page + 1) * size),
  totalElements: data.length,
  totalPages: Math.ceil(data.length / size),
  number: page,
  size,
  first: page === 0,
  last: (page + 1) * size >= data.length,
});

const toQueryMap = (params: HttpParams): Record<string, string> => {
  const map: Record<string, string> = {};
  params.keys().forEach(k => { const v = params.get(k); if (v !== null) map[k] = v; });
  return map;
};

const match = (url: string, pattern: string): boolean => {
  const regex = new RegExp('^' + pattern.replace(/:\w+/g, '([^/]+)') + '$');
  return regex.test(url);
};

const badRequest = (msg: string) => new HttpResponse({ status: 400, statusText: msg });

const ok = <T>(body: T) => new HttpResponse({ status: 200, body });

const created = <T>(body: T) => new HttpResponse({ status: 201, body });

const noContent = () => new HttpResponse<void>({ status: 204 });

const blobPdf = () => new HttpResponse<Blob>({ status: 200, body: new Blob(['%PDF-mock'], { type: 'application/pdf' }) });

const blobExcel = () => new HttpResponse<Blob>({ status: 200, body: new Blob(['mock-excel'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }) });

const jsonResponse = {
  bienes:         () => ok(MOCK.PRODUCTOS_CATALOGO),
  insumos:        () => ok(MOCK.PRODUCTOS_CATALOGO.filter(p => p.categoria === 'Insumos')),
  facturacion:    () => ok(MOCK.FACTURAS_COMPRA),
  presupuesto:    () => ok(MOCK.PRESUPUESTOS),
  conciliacion:   () => ok(MOCK.CONCILIACIONES_INVENTARIO),
  'solicitudes-gil': () => ok(MOCK.SOLICITUDES_GIL),
};

const ROUTES: { pattern: string; method: string; handler: MockHandler }[] = [

  // ── Auth ──────────────────────────────────────────────────────────────────
  { pattern: '/api/auth/login', method: 'POST', handler: req => {
    const body = req.body as { email?: string; contrasena?: string } | null;
    const user = MOCK.USUARIOS.find(u => u.email === body?.email);
    if (!user) return badRequest('Credenciales inválidas');
    return ok({
      token: MOCK.MOCK_TOKEN,
      idUsuario: user.id,
      nombreCompleto: `${user.nombre} ${user.apellidos}`,
      email: user.email,
      rol: user.rol,
      permisos: user.permisos,
    });
  }},
  { pattern: '/api/auth/recuperar', method: 'POST', handler: () => noContent() },
  { pattern: '/api/auth/reset-password', method: 'POST', handler: () => noContent() },

  // ── Perfil ────────────────────────────────────────────────────────────────
  { pattern: '/api/perfil', method: 'GET', handler: () => ok(MOCK.USUARIOS[0]) },
  { pattern: '/api/perfil', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/perfil/cambiar-contrasena', method: 'POST', handler: () => noContent() },

  // ── Usuarios ──────────────────────────────────────────────────────────────
  { pattern: '/api/usuarios', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.USUARIOS];
    if (q.rol) data = data.filter(u => u.rol === q.rol);
    if (q.busqueda) { const s = q.busqueda.toLowerCase(); data = data.filter(u => u.nombre.toLowerCase().includes(s) || u.email.toLowerCase().includes(s)); }
    const page = parseInt(q.pagina || '0');
    const size = parseInt(q.tamano || '20');
    return ok(paginate(data, page, size));
  }},
  { pattern: '/api/usuarios/:id', method: 'GET', handler: req => {
    const id = req.url.split('/').pop()!;
    const user = MOCK.USUARIOS.find(u => u.id === id);
    return user ? ok(user) : badRequest('Usuario no encontrado');
  }},
  { pattern: '/api/usuarios', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/usuarios/:id', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/usuarios/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/usuarios/:id/activar', method: 'PATCH', handler: req => ok(req.body) },
  { pattern: '/api/usuarios/:id/desactivar', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/usuarios/:id/desbloquear', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/usuarios/:id/bloquear', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/usuarios/:id/foto', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/usuarios/:userId/perfil', method: 'GET', handler: () => ok(MOCK.USUARIOS[0]) },
  { pattern: '/api/usuarios/:userId/perfil', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/usuarios/:userId/contrasena', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/usuarios/:userId/actividad', method: 'GET', handler: () => ok(MOCK.HISTORIAL_USUARIO) },
  { pattern: '/api/usuarios/:userId/foto', method: 'POST', handler: () => ok({ fotoUrl: '/assets/mock-user.jpg' }) },
  { pattern: '/api/usuarios/masivo/aprendices', method: 'POST', handler: () => ok({ tareaId: 'TASK-001', total: 10, exitosos: 10, errores: [] }) },
  { pattern: '/api/usuarios/masivo/instructores', method: 'POST', handler: () => ok({ tareaId: 'TASK-002', total: 5, exitosos: 5, errores: [] }) },
  { pattern: '/api/usuarios/masivo/estado-aprendices/:tareaId', method: 'GET', handler: () => ok({ tareaId: 'TASK-001', estado: 'COMPLETADA', procesados: 10, total: 10 }) },
  { pattern: '/api/usuarios/masivo/estado-instructores/:tareaId', method: 'GET', handler: () => ok({ tareaId: 'TASK-002', estado: 'COMPLETADA', procesados: 5, total: 5 }) },
  { pattern: '/api/usuarios/roles/masivo', method: 'PUT', handler: () => noContent() },
  { pattern: '/api/usuarios/historial', method: 'GET', handler: () => ok(MOCK.HISTORIAL_USUARIO) },
  { pattern: '/api/usuarios/exportar', method: 'GET', handler: () => blobExcel() },

  // ── Roles ─────────────────────────────────────────────────────────────────
  { pattern: '/api/roles', method: 'GET', handler: () => ok(MOCK.ROLES) },

  // ── Fichas ────────────────────────────────────────────────────────────────
  { pattern: '/api/fichas', method: 'GET', handler: () => ok(MOCK.FICHAS) },
  { pattern: '/api/fichas/:id', method: 'GET', handler: req => {
    const id = req.url.split('/').pop()!;
    return ok(MOCK.FICHAS.find(f => f.id === id) || MOCK.FICHAS[0]);
  }},
  { pattern: '/api/fichas', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/fichas/:id', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/fichas/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/fichas/numero/:numero', method: 'GET', handler: () => ok(MOCK.FICHAS[0]) },
  { pattern: '/api/fichas/:fichaId/aprendices', method: 'GET', handler: () => ok(MOCK.USUARIOS.filter(u => u.rol === 'APRENDIZ')) },
  { pattern: '/api/fichas/:fichaId/vocero', method: 'GET', handler: () => ok(MOCK.USUARIOS[5]) },
  { pattern: '/api/fichas/:fichaId/subvocero', method: 'GET', handler: () => ok(MOCK.USUARIOS[6]) },
  { pattern: '/api/usuarios/:aprendizId/fichas/:fichaId/aprendiz/:id/rol', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/usuarios/:voceId/fichas/:fichaId/vocero/:voceId', method: 'PUT', handler: () => noContent() },
  { pattern: '/api/usuarios/:subId/fichas/:fichaId/subvocero/:subId', method: 'PUT', handler: () => noContent() },
  { pattern: '/api/usuarios/:usuarioId/fichas/:fichaId', method: 'POST', handler: () => noContent() },
  { pattern: '/api/usuarios/:usuarioId/fichas/:fichaId', method: 'DELETE', handler: () => noContent() },

  // ── Recetas / Menú ────────────────────────────────────────────────────────
  { pattern: '/api/recetas/menu', method: 'GET', handler: () => ok(MOCK.MENU_RECETAS) },
  { pattern: '/api/recetas', method: 'GET', handler: () => ok(MOCK.RECETAS_COCINA) },
  { pattern: '/api/recetas/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.RECETAS_COCINA.find(r => r.id === id) || MOCK.RECETAS_COCINA[0]);
  }},
  { pattern: '/api/recetas', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/recetas/:id', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/recetas/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/recetas', method: 'DELETE', handler: () => noContent() },

  // ── Categorías ────────────────────────────────────────────────────────────
  { pattern: '/api/categorias', method: 'GET', handler: () => ok(MOCK.CATEGORIAS_COCINA) },
  { pattern: '/api/categorias', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/categorias/:id', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/categorias/:id', method: 'DELETE', handler: () => noContent() },

  // ── Ingredientes ──────────────────────────────────────────────────────────
  { pattern: '/api/ingredientes', method: 'GET', handler: () => ok(MOCK.INGREDIENTES_COCINA) },
  { pattern: '/api/ingredientes/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.INGREDIENTES_COCINA.find(i => i.id === id) || MOCK.INGREDIENTES_COCINA[0]);
  }},

  // ── Cocina ────────────────────────────────────────────────────────────────
  { pattern: '/api/cocina/comandas', method: 'GET', handler: () => ok(MOCK.COMANDA_COCINA) },
  { pattern: '/api/cocina/comandas/detalle/:id/iniciar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/cocina/comandas/detalle/:id/finalizar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/cocina/comandas/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/cocina/comandas/limpiar', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/cocina/estadisticas/promedio', method: 'GET', handler: () => ok(MOCK.PROMEDIO_PLATOS) },
  { pattern: '/api/cocina/estadisticas/diarias', method: 'GET', handler: () => ok(MOCK.CARGA_TRABAJO_COCINA) },
  { pattern: '/api/cocina/estadisticas/kpis', method: 'GET', handler: () => ok(MOCK.ESTADISTICAS_COCINA_KPI) },
  { pattern: '/api/cocina/incidencias/tipo/canceladas', method: 'GET', handler: () => ok(MOCK.INCIDENCIAS_COCINA.canceladas) },
  { pattern: '/api/cocina/incidencias/tipo/devueltas', method: 'GET', handler: () => ok(MOCK.INCIDENCIAS_COCINA.devueltas) },
  { pattern: '/api/cocina/incidencias/conteo', method: 'GET', handler: () => ok({ canceladas: 1, devueltas: 1 }) },
  { pattern: '/api/cocina/incidencias/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/cocina/incidencias/limpiar', method: 'DELETE', handler: () => noContent() },

  // ── Bar / Barismo ────────────────────────────────────────────────────────
  { pattern: '/api/barybarismo/recetas/menu', method: 'GET', handler: () => ok(MOCK.MENU_BAR) },
  { pattern: '/api/barybarismo/recetas', method: 'GET', handler: () => ok(MOCK.RECETAS_BAR) },
  { pattern: '/api/barybarismo/recetas/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.RECETAS_BAR.find(r => r.id === id) || MOCK.RECETAS_BAR[0]);
  }},
  { pattern: '/api/barybarismo/recetas', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/barybarismo/recetas/:id', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/barybarismo/recetas/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/barybarismo/comandas', method: 'GET', handler: () => ok(MOCK.COMANDA_BAR) },
  { pattern: '/api/barybarismo/comandas/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.COMANDA_BAR.find(c => c.id === id) || MOCK.COMANDA_BAR[0]);
  }},
  { pattern: '/api/barybarismo/comandas/:id/iniciar', method: 'PUT', handler: () => ok({}) },
  { pattern: '/api/barybarismo/comandas/:id/finalizar', method: 'PUT', handler: () => ok({}) },
  { pattern: '/api/barybarismo/comandas/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/barybarismo/comandas/limpiar', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/barybarismo/estadisticas/promedio', method: 'GET', handler: () => ok(MOCK.PROMEDIO_PLATOS) },
  { pattern: '/api/barybarismo/estadisticas/diarias', method: 'GET', handler: () => ok(MOCK.CARGA_TRABAJO_COCINA) },
  { pattern: '/api/barybarismo/estadisticas/kpis', method: 'GET', handler: () => ok(MOCK.ESTADISTICAS_BAR_KPI) },
  { pattern: '/api/barybarismo/categorias', method: 'GET', handler: () => ok(MOCK.CATEGORIAS_BAR) },
  { pattern: '/api/barybarismo/categorias', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/barybarismo/categorias/:id', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/barybarismo/categorias/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/barybarismo/ingredientes', method: 'GET', handler: () => ok(MOCK.INGREDIENTES_BAR) },
  { pattern: '/api/barybarismo/ingredientes/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.INGREDIENTES_BAR.find(i => i.id === id) || MOCK.INGREDIENTES_BAR[0]);
  }},
  { pattern: '/api/barybarismo/pedidos/cancelados', method: 'GET', handler: () => ok(MOCK.INCIDENCIAS_COCINA.canceladas) },
  { pattern: '/api/barybarismo/devoluciones', method: 'GET', handler: () => ok(MOCK.INCIDENCIAS_COCINA.devueltas) },

  // ── Mesas ─────────────────────────────────────────────────────────────────
  { pattern: '/api/mesas', method: 'GET', handler: () => ok(MOCK.MESAS) },
  { pattern: '/api/mesas/inactivas', method: 'GET', handler: () => ok(MOCK.MESAS.filter(m => m.estado === 'INACTIVA')) },
  { pattern: '/api/mesas', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/mesas/:id', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/mesas/:id/estado', method: 'PATCH', handler: req => {
    const id = parseInt(req.url.split('/')[3]);
    const mesa = MOCK.MESAS.find(m => m.id === id);
    return ok(mesa || MOCK.MESAS[0]);
  }},
  { pattern: '/api/mesas/:id/activar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/mesas/:id/desactivar', method: 'PATCH', handler: () => ok({}) },

  // ── Pedidos ───────────────────────────────────────────────────────────────
  { pattern: '/api/pedidos', method: 'GET', handler: () => ok(MOCK.PEDIDOS) },
  { pattern: '/api/pedidos/mis-pedidos', method: 'GET', handler: () => ok(MOCK.PEDIDOS.filter(p => p.mesero === 'Ana Martínez')) },
  { pattern: '/api/pedidos/estado/:estado', method: 'GET', handler: req => {
    const estado = req.url.split('/').pop()!;
    return ok(MOCK.PEDIDOS.filter(p => p.estado === estado));
  }},
  { pattern: '/api/pedidos/mesa/:mesaId', method: 'GET', handler: req => {
    const mesaId = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.PEDIDOS.filter(p => p.mesaId === mesaId));
  }},
  { pattern: '/api/pedidos/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.PEDIDOS.find(p => p.id === id) || MOCK.PEDIDOS[0]);
  }},
  { pattern: '/api/pedidos', method: 'POST', handler: req => ok({ ...(req.body as object), id: 99, fecha: new Date().toISOString() }) },
  { pattern: '/api/pedidos/:id/confirmar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/pedidos/:id/entregar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/pedidos/:id/cancelar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/pedidos/:id/devolver', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/pedidos/detalle/:id/cancelar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/pedidos/detalle/:id/devolver', method: 'PATCH', handler: () => ok({}) },

  // ── Caja ──────────────────────────────────────────────────────────────────
  { pattern: '/api/caja/sesion/abrir', method: 'POST', handler: () => ok(MOCK.SESION_CAJA) },
  { pattern: '/api/caja/sesion/activa', method: 'GET', handler: () => ok(MOCK.SESION_CAJA) },
  { pattern: '/api/caja/sesion/:id/cerrar', method: 'PATCH', handler: () => ok({ ...MOCK.SESION_CAJA, cierre: new Date().toISOString(), estado: 'CERRADA' }) },
  { pattern: '/api/caja/sesion/:id', method: 'GET', handler: () => ok(MOCK.SESION_CAJA) },

  // ── Facturas (Restaurante) ────────────────────────────────────────────────
  { pattern: '/api/facturas', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/facturas/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.FACTURAS_RESTAURANTE.find(f => f.id === id) || MOCK.FACTURAS_RESTAURANTE[0]);
  }},
  { pattern: '/api/facturas/:id/anular', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/facturas/numero/:numero', method: 'GET', handler: () => ok(MOCK.FACTURAS_RESTAURANTE[0]) },
  { pattern: '/api/facturas/sesion/:id', method: 'GET', handler: () => ok(MOCK.FACTURAS_RESTAURANTE) },
  { pattern: '/api/facturas/:id/pdf', method: 'GET', handler: () => blobPdf() },

  // ── Actividades ───────────────────────────────────────────────────────────
  { pattern: '/api/actividades', method: 'GET', handler: () => ok(MOCK.ACTIVIDADES) },
  { pattern: '/api/actividades', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/actividades/:id/estado', method: 'PATCH', handler: req => ok(req.body) },
  { pattern: '/api/actividades/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/actividades/:id/evaluaciones', method: 'GET', handler: () => ok(MOCK.EVALUACIONES_EJEMPLO) },
  { pattern: '/api/actividades/:id/evaluar', method: 'POST', handler: () => noContent() },

  // ── Agente IA ─────────────────────────────────────────────────────────────
  { pattern: '/api/agente', method: 'POST', handler: () => ok({ respuesta: 'Hola, soy el asistente GastroSENA. ¿En qué puedo ayudarte?' }) },
  { pattern: '/api/agente/stream', method: 'POST', handler: () => ok({}) },

  // ── Dashboard KPIs ────────────────────────────────────────────────────────
  { pattern: '/api/v1/inventory/kpis', method: 'GET', handler: () => ok(MOCK.INVENTORY_KPIS) },
  { pattern: '/api/v1/reporting/alertas/resumen', method: 'GET', handler: () => ok(MOCK.RESUMEN_ALERTAS) },
  { pattern: '/api/v1/sourcing/facturas/resumen', method: 'GET', handler: () => ok(MOCK.FACTURAS_RESUMEN) },
  { pattern: '/api/v1/budget/presupuestos/resumen', method: 'GET', handler: () => ok(MOCK.RESUMEN_PRESUPUESTOS) },
  { pattern: '/api/v1/catalog/programas', method: 'GET', handler: () => ok(MOCK.PROGRAMAS) },

  // ── Productos / Catálogo ──────────────────────────────────────────────────
  { pattern: '/api/v1/catalog/productos', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.PRODUCTOS_CATALOGO];
    if (q.activo === 'false') data = data.filter(p => !p.activo);
    if (q.activo === 'true') data = data.filter(p => p.activo);
    const page = parseInt(q.page || '0');
    const size = parseInt(q.size || '20');
    return ok(paginate(data, page, size));
  }},
  { pattern: '/api/v1/catalog/productos/:id', method: 'GET', handler: req => {
    const id = req.url.split('/').pop()!;
    return ok(MOCK.PRODUCTOS_CATALOGO.find(p => p.id === id || p.codigoSena === id) || MOCK.PRODUCTOS_CATALOGO[0]);
  }},
  { pattern: '/api/v1/catalog/productos', method: 'POST', handler: req => ok({ ...(req.body as object), id: 'PROD-NEW' }) },
  { pattern: '/api/v1/catalog/productos/:id', method: 'PATCH', handler: req => ok(req.body) },
  { pattern: '/api/v1/catalog/productos/:id', method: 'DELETE', handler: () => noContent() },
  { pattern: '/api/v1/catalog/productos/:id/desactivar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/catalog/productos/:id/activar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/catalog/productos/eliminacion-masiva', method: 'POST', handler: () => ok({ eliminados: 3, conErrores: 0 }) },
  { pattern: '/api/v1/catalog/productos/importar', method: 'POST', handler: () => ok([]) },
  { pattern: '/api/v1/catalog/productos/importar-excel', method: 'POST', handler: () => ok({ importados: 5 }) },
  { pattern: '/api/v1/catalog/productos/limpiar-desactivados', method: 'POST', handler: () => ok({ eliminados: 2, mensaje: 'Limpieza completada' }) },

  // ── Existencias / Inventario ──────────────────────────────────────────────
  { pattern: '/api/v1/inventory/existencias/bajo-minimo', method: 'GET', handler: () => ok(MOCK.EXISTENCIAS.filter(e => e.estado === 'BAJO_STOCK' || e.estado === 'AGOTADO')) },
  { pattern: '/api/v1/inventory/existencias/:productoId', method: 'GET', handler: req => {
    const id = req.url.split('/').pop()!;
    return ok(MOCK.EXISTENCIAS.find(e => e.productoId === id || e.codigoSena === id) || MOCK.EXISTENCIAS[0]);
  }},
  { pattern: '/api/v1/inventory/existencias', method: 'GET', handler: () => ok(MOCK.EXISTENCIAS) },

  // ── Movimientos ───────────────────────────────────────────────────────────
  { pattern: '/api/v1/inventory/movimientos', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    if (q.tipo) return ok(paginate(MOCK.MOVIMIENTOS_INVENTARIO, 0, 20));
    const page = parseInt(q.pagina || '0');
    const size = parseInt(q.tamano || '20');
    return ok(paginate(MOCK.MOVIMIENTOS_INVENTARIO, page, size));
  }},
  { pattern: '/api/v1/inventory/movimientos/todos', method: 'GET', handler: () => ok(paginate(MOCK.MOVIMIENTOS_INVENTARIO, 0, 50)) },
  { pattern: '/api/v1/inventory/movimientos/:productoId', method: 'GET', handler: () => ok(paginate(MOCK.MOVIMIENTOS_INVENTARIO, 0, 20)) },
  { pattern: '/api/v1/inventory/movimientos/documento/:id', method: 'GET', handler: () => ok(MOCK.MOVIMIENTOS_INVENTARIO[0]) },
  { pattern: '/api/v1/inventory/movimientos/salida', method: 'POST', handler: () => noContent() },
  { pattern: '/api/v1/inventory/movimientos/reserva', method: 'POST', handler: () => noContent() },
  { pattern: '/api/v1/inventory/movimientos/liberacion', method: 'POST', handler: () => noContent() },
  { pattern: '/api/v1/inventory/movimientos/ajuste', method: 'POST', handler: () => noContent() },

  // ── Procurement / Giles ──────────────────────────────────────────────────
  { pattern: '/api/v1/procurement/giles/generar', method: 'POST', handler: () => ok(MOCK.SOLICITUDES_GIL[0]) },
  { pattern: '/api/v1/procurement/giles', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.SOLICITUDES_GIL];
    if (q.estado) data = data.filter(g => g.estado === q.estado);
    const page = parseInt(q.page || '0');
    const size = parseInt(q.size || '20');
    return ok(paginate(data, page, size));
  }},
  { pattern: '/api/v1/procurement/giles/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.SOLICITUDES_GIL.find(g => g.id === id) || MOCK.SOLICITUDES_GIL[0]);
  }},
  { pattern: '/api/v1/procurement/giles', method: 'POST', handler: req => ok({ ...(req.body as object), id: MOCK.SOLICITUDES_GIL.length + 1, numeroGil: `GIL-F-014-2026-00${MOCK.SOLICITUDES_GIL.length + 1}`, estado: 'BORRADOR' }) },
  { pattern: '/api/v1/procurement/giles/:id', method: 'PATCH', handler: req => ok(req.body) },
  { pattern: '/api/v1/procurement/giles/:id/emitir', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/procurement/giles/:id/cerrar', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/procurement/giles/:id/enviar-proveedor', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/procurement/giles/:id', method: 'DELETE', handler: () => noContent() },

  // ── Training / Solicitudes Sesión ─────────────────────────────────────────
  { pattern: '/api/v1/training/solicitudes', method: 'GET', handler: () => ok(paginate(MOCK.SOLICITUDES_SESION, 0, 20)) },
  { pattern: '/api/v1/training/solicitudes/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.SOLICITUDES_SESION.find(s => s.id === id) || MOCK.SOLICITUDES_SESION[0]);
  }},
  { pattern: '/api/v1/training/solicitudes', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/v1/training/solicitudes/:id', method: 'PATCH', handler: req => ok(req.body) },
  { pattern: '/api/v1/training/solicitudes/:id/aprobar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/training/solicitudes/:id/rechazar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/training/solicitudes/:id/comprometer', method: 'PATCH', handler: () => ok({}) },

  // ── Presupuesto ──────────────────────────────────────────────────────────
  { pattern: '/api/v1/budget/presupuestos', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.PRESUPUESTOS];
    if (q.fichaId) data = data.filter(p => p.fichaId === q.fichaId);
    if (q.vigencia) data = data.filter(p => p.vigencia === parseInt(q.vigencia));
    const page = parseInt(q.page || '0');
    const size = parseInt(q.size || '20');
    return ok(paginate(data, page, size));
  }},
  { pattern: '/api/v1/budget/presupuestos/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.PRESUPUESTOS.find(p => p.id === id) || MOCK.PRESUPUESTOS[0]);
  }},
  { pattern: '/api/v1/budget/presupuestos', method: 'POST', handler: req => ok({ id: 99, ...(req.body as object) }) },
  { pattern: '/api/v1/budget/presupuestos/:id/traslados', method: 'POST', handler: () => noContent() },

  // ── Compromisos ───────────────────────────────────────────────────────────
  { pattern: '/api/v1/budget/compromisos', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.COMPROMISOS];
    if (q.presupuestoId) data = data.filter(c => c.presupuestoId === parseInt(q.presupuestoId));
    return ok(data);
  }},
  { pattern: '/api/v1/budget/compromisos', method: 'POST', handler: req => ok({ id: 'COMP-NEW' }) },
  { pattern: '/api/v1/budget/compromisos/comprometer-y-pagar', method: 'POST', handler: () => ok({ compromisoId: 'COMP-001', pagoId: 'PAG-001' }) },
  { pattern: '/api/v1/budget/compromisos/:id/anular', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/budget/compromisos/:id/pagos', method: 'POST', handler: () => ok({ id: 'PAG-NEW' }) },

  // ── Consolidados ─────────────────────────────────────────────────────────
  { pattern: '/api/v1/budget/consolidados', method: 'GET', handler: () => ok(paginate(MOCK.CONSOLIDADOS, 0, 20)) },
  { pattern: '/api/v1/budget/consolidados/:numero', method: 'GET', handler: req => {
    const num = req.url.split('/').pop()!;
    return ok(MOCK.CONSOLIDADOS.find(c => c.numero === num) || MOCK.CONSOLIDADOS[0]);
  }},
  { pattern: '/api/v1/budget/consolidados', method: 'POST', handler: req => ok({ id: 'CONS-NEW' }) },
  { pattern: '/api/v1/budget/consolidados/:numero/reversar', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/budget/consolidados/elegibles', method: 'GET', handler: () => ok(MOCK.CONSOLIDADOS) },

  // ── Sourcing / Facturas (Compra) ─────────────────────────────────────────
  { pattern: '/api/v1/sourcing/facturas', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.FACTURAS_COMPRA];
    if (q.estado) data = data.filter(f => f.estado === q.estado);
    if (q.proveedorNit) data = data.filter(f => f.proveedor.includes(q.proveedorNit));
    const page = parseInt(q.page || '0');
    const size = parseInt(q.size || '20');
    return ok(paginate(data, page, size));
  }},
  { pattern: '/api/v1/sourcing/facturas/resumen', method: 'GET', handler: () => ok(MOCK.FACTURAS_RESUMEN) },
  { pattern: '/api/v1/sourcing/facturas/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.FACTURAS_COMPRA.find(f => f.id === id) || MOCK.FACTURAS_COMPRA[0]);
  }},
  { pattern: '/api/v1/sourcing/facturas', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/v1/sourcing/facturas/importar-fel-xml', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/v1/sourcing/facturas/:id', method: 'PATCH', handler: req => ok(req.body) },
  { pattern: '/api/v1/sourcing/facturas/:id/anular', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/sourcing/facturas/:id/verificar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/sourcing/facturas/:id/lineas/resolver', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/sourcing/facturas/:id/pagar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/sourcing/facturas/:id/info-bancaria', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/sourcing/conciliaciones-gil', method: 'GET', handler: () => ok(MOCK.CONCILIACIONES_GIL) },
  { pattern: '/api/v1/sourcing/conciliaciones-gil', method: 'POST', handler: () => ok(MOCK.CONCILIACIONES_GIL[0]) },
  { pattern: '/api/v1/sourcing/conciliaciones-gil/:id/diferencias/:itemId/resolver', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/sourcing/instructor-vinculos/:oc', method: 'PUT', handler: () => noContent() },

  // ── Conciliación de Inventario ────────────────────────────────────────────
  { pattern: '/api/v1/reconciliation/conciliaciones', method: 'GET', handler: () => ok(MOCK.CONCILIACIONES_INVENTARIO) },
  { pattern: '/api/v1/reconciliation/conciliaciones/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.CONCILIACIONES_INVENTARIO.find(c => c.id === id) || MOCK.CONCILIACIONES_INVENTARIO[0]);
  }},
  { pattern: '/api/v1/reconciliation/conciliaciones', method: 'POST', handler: () => ok({ id: 'CONC-NEW' }) },
  { pattern: '/api/v1/reconciliation/conciliaciones/:id/cerrar', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/reconciliation/conciliaciones/:id/conteo', method: 'POST', handler: () => noContent() },
  { pattern: '/api/v1/reconciliation/conciliaciones/:id/diferencias/:diffId/resolver', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/reconciliation/conciliaciones/catalogo', method: 'GET', handler: () => ok(MOCK.CONCILIACIONES_CATALOGO) },

  // ── Legalización / Requisiciones ─────────────────────────────────────────
  { pattern: '/api/v1/legalization/requisiciones', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.REQUISICIONES];
    if (q.estado) data = data.filter(r => r.estado === q.estado);
    return ok(data);
  }},
  { pattern: '/api/v1/legalization/requisiciones/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.REQUISICIONES.find(r => r.id === id) || MOCK.REQUISICIONES[0]);
  }},
  { pattern: '/api/v1/legalization/requisiciones', method: 'POST', handler: () => ok({ id: 'REQ-NEW' }) },
  { pattern: '/api/v1/legalization/requisiciones/:id/enviar', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/legalization/requisiciones/:id/despachar', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/legalization/requisiciones/:id/firmar', method: 'PATCH', handler: () => noContent() },

  // ── Legalización / Actas ─────────────────────────────────────────────────
  { pattern: '/api/v1/legalization/actas', method: 'GET', handler: () => ok(paginate(MOCK.ACTAS, 0, 20)) },
  { pattern: '/api/v1/legalization/actas/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.ACTAS.find(a => a.id === id) || MOCK.ACTAS[0]);
  }},
  { pattern: '/api/v1/legalization/actas', method: 'POST', handler: () => ok({ id: 'ACTA-NEW' }) },
  { pattern: '/api/v1/legalization/actas/:id/enviar-a-firmas', method: 'POST', handler: () => noContent() },
  { pattern: '/api/v1/legalization/actas/:id/firmar', method: 'POST', handler: () => noContent() },
  { pattern: '/api/v1/legalization/actas/:id/revisar', method: 'POST', handler: () => noContent() },
  { pattern: '/api/v1/legalization/actas/:id/archivar', method: 'POST', handler: () => noContent() },

  // ── Legalización / Paquetes ──────────────────────────────────────────────
  { pattern: '/api/v1/legalization/paquetes', method: 'GET', handler: () => ok(paginate(MOCK.PAQUETES, 0, 20)) },
  { pattern: '/api/v1/legalization/paquetes/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.PAQUETES.find(p => p.id === id) || MOCK.PAQUETES[0]);
  }},
  { pattern: '/api/v1/legalization/paquetes', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/v1/legalization/paquetes/:id/adjuntar-asistencia', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/legalization/paquetes/:id/trazabilidad', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/legalization/paquetes/:id/revisar', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/legalization/paquetes/:id/archivar', method: 'PATCH', handler: () => noContent() },

  // ── Legalización / Paquetes Asistencia ───────────────────────────────────
  { pattern: '/api/v1/legalization/paquetes/:id/asistencia', method: 'GET', handler: () => ok({ paqueteId: 1, aprendices: MOCK.USUARIOS.filter(u => u.rol === 'APRENDIZ').map(u => ({ id: u.id, nombre: `${u.nombre} ${u.apellidos}`, asistio: false })) }) },
  { pattern: '/api/v1/legalization/paquetes/:id/asistencia', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/v1/legalization/paquetes/:id/asistencia', method: 'PUT', handler: req => ok(req.body) },

  // ── Contratos ─────────────────────────────────────────────────────────────
  { pattern: '/api/v1/catalog/contratos', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    let data = [...MOCK.CONTRATOS];
    if (q.vigencia) data = data.filter(c => c.vigencia === parseInt(q.vigencia));
    return ok(data);
  }},
  { pattern: '/api/v1/catalog/contratos/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.CONTRATOS.find(c => c.id === id) || MOCK.CONTRATOS[0]);
  }},
  { pattern: '/api/v1/catalog/contratos', method: 'POST', handler: req => ok({ id: 99, ...(req.body as object) }) },
  { pattern: '/api/v1/catalog/contratos/importar', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/v1/catalog/contratos/importar-excel', method: 'POST', handler: () => ok({ importados: 3 }) },
  { pattern: '/api/v1/catalog/contratos/:id/cerrar', method: 'PATCH', handler: () => ok({}) },
  { pattern: '/api/v1/catalog/contratos/precio', method: 'GET', handler: () => ok(MOCK.PRECIOS_VIGENTES[0]) },

  // ── Alertas ───────────────────────────────────────────────────────────────
  { pattern: '/api/v1/alerts/alertas', method: 'GET', handler: () => ok(MOCK.ALERTAS) },
  { pattern: '/api/v1/alerts/alertas/:id', method: 'GET', handler: req => {
    const id = parseInt(req.url.split('/').pop()!);
    return ok(MOCK.ALERTAS.find(a => a.id === id) || MOCK.ALERTAS[0]);
  }},
  { pattern: '/api/v1/alerts/alertas/:id/resolver', method: 'PATCH', handler: () => noContent() },
  { pattern: '/api/v1/alerts/alertas/umbrales', method: 'GET', handler: () => ok(MOCK.UMBRALES_STOCK) },
  { pattern: '/api/v1/alerts/alertas/umbrales/:id', method: 'PUT', handler: req => ok(req.body) },

  // ── Reporting ─────────────────────────────────────────────────────────────
  { pattern: '/api/v1/reporting/kardex', method: 'GET', handler: () => ok(MOCK.KARDEX_MOVIMIENTOS) },
  { pattern: '/api/v1/reporting/consumo', method: 'GET', handler: () => ok(MOCK.CONSUMO_REPORTE) },
  { pattern: '/api/v1/reporting/trazabilidad', method: 'GET', handler: () => ok(MOCK.TRAZABILIDAD_DOCUMENTAL) },
  { pattern: '/api/v1/reporting/vencimientos', method: 'GET', handler: () => ok(MOCK.VENCIMIENTOS) },
  { pattern: '/api/v1/reporting/ejecucion-mensual', method: 'GET', handler: () => ok(MOCK.EJECUCION_MENSUAL) },
  { pattern: '/api/v1/reporting/ejecucion-presupuestal', method: 'GET', handler: () => ok(MOCK.EJECUCION_MENSUAL) },

  // ── Notificaciones ────────────────────────────────────────────────────────
  { pattern: '/api/notificaciones', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    const page = parseInt(q.page || '0');
    const size = parseInt(q.size || '20');
    return ok(paginate(MOCK.NOTIFICACIONES, page, size));
  }},
  { pattern: '/api/notificaciones/no-leidas/count', method: 'GET', handler: () => ok({ count: MOCK.NOTIFICACIONES.filter(n => !n.leida).length }) },
  { pattern: '/api/notificaciones/:id/leer', method: 'PUT', handler: req => ok(req.body) },
  { pattern: '/api/notificaciones/leer-todas', method: 'PUT', handler: () => ok({ actualizadas: MOCK.NOTIFICACIONES.length }) },

  // ── Reportes ──────────────────────────────────────────────────────────────
  { pattern: '/api/reportes/recientes', method: 'GET', handler: () => ok(MOCK.REPORTES_RECIENTES) },
  { pattern: '/api/reportes/generar', method: 'POST', handler: () => ok({ id: 99, nombre: 'Reporte generado', estado: 'COMPLETADO', url: '/api/reportes/99/pdf' }) },
  { pattern: '/api/reportes/:id/pdf', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/:id/descargar', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/:id', method: 'GET', handler: req => {
    const reportId = req.url.split('/').pop()!;
    return ok(MOCK.REPORTES_RECIENTES.find(r => String(r.id) === reportId) || MOCK.REPORTES_RECIENTES[0]);
  }},

  // ── Reportes PDF/Excel ────────────────────────────────────────────────────
  { pattern: '/api/reportes/bienes', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/insumos', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/facturacion', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/presupuesto-general', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/conciliacion', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/gil/pdf', method: 'POST', handler: () => blobPdf() },
  { pattern: '/api/reportes/requisicion', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/paquete', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/acta', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/uso-bienes', method: 'GET', handler: () => blobPdf() },
  { pattern: '/api/reportes/inventario-general', method: 'GET', handler: () => blobPdf() },

  // ── Comentarios ───────────────────────────────────────────────────────────
  { pattern: '/api/comentarios', method: 'POST', handler: req => ok(req.body) },
  { pattern: '/api/comentarios/aprobados', method: 'GET', handler: req => {
    const q = toQueryMap(req.params);
    const page = parseInt(q.page || '0');
    const size = parseInt(q.size || '20');
    return ok(paginate(MOCK.COMENTARIOS_APROBADOS, page, size));
  }},
  { pattern: '/api/comentarios/admin', method: 'GET', handler: () => ok(paginate([...MOCK.COMENTARIOS_APROBADOS, ...MOCK.COMENTARIOS_PENDIENTES], 0, 20)) },
  { pattern: '/api/comentarios/:id/estado', method: 'PUT', handler: req => ok(req.body) },

  // ── Configuración ─────────────────────────────────────────────────────────
  { pattern: '/api/configuracion', method: 'GET', handler: () => ok(MOCK.CONFIGURACION_SISTEMA) },
  { pattern: '/api/configuracion/seguridad', method: 'PUT', handler: req => ok(req.body) },

  // ── Notas crédito ─────────────────────────────────────────────────────────
  { pattern: '/api/v1/notas-credito', method: 'POST', handler: () => ok({ id: 'NC-NEW', numero: 'NC-2026-001' }) },
  { pattern: '/api/v1/conciliaciones/:id/detalles/:itemId/resolver-nota-credito', method: 'POST', handler: () => ok({}) },
];

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  const url = req.url.split('?')[0];
  const method = req.method;

  for (const route of ROUTES) {
    if (route.method === method && match(url, route.pattern)) {
      const result = route.handler(req);
      if (result instanceof HttpResponse) {
        if (result.status >= 200 && result.status < 300) {
          return of(result).pipe(delay(150));
        }
        return of(result).pipe(delay(100));
      }
      if (result !== null) {
        return of(new HttpResponse({ status: 200, body: result })).pipe(delay(150));
      }
    }
  }

  return next(req);
};
