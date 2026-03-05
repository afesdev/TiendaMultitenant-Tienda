export const SITE_CONFIG = {
    // Cambia este slug para ver distintas tiendas (ej: 'mishell', 'boutique-test', etc.)
    TIENDA_SLUG: import.meta.env.PUBLIC_STORE_SLUG || 'mishell-boutique',
    API_BASE: import.meta.env.PUBLIC_API_URL || 'http://localhost:3001/public'
};
