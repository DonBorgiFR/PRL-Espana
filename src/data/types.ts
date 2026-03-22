// ============================================================
// TIPOS BASE — Modelo de Datos PRL España
// ============================================================

export type BadgeType = 'tecnico' | 'divulgativo' | 'ambos';
export type NivelFicha = 'basico' | 'intermedio' | 'avanzado';

export interface Articulo {
  id: string;
  numero: string;
  titulo: string;
  texto: string;
  badge: BadgeType;
  boeUrl?: string;
  tags: string[];
}

export interface Capitulo {
  id: string;
  numero: string;
  titulo: string;
  articulos: Articulo[];
}

export interface Ley {
  id: string;
  codigo: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  boeUrl: string;
  color: string;
  icono: string;
  capitulos: Capitulo[];
}

export interface ReferenciaCruzada {
  id: string;
  origen: {
    leyId: string;
    articuloId: string;
    label: string;
  };
  destino: {
    leyId: string;
    articuloId: string;
    label: string;
  };
  descripcion: string;
  tipo: 'desarrollo' | 'complemento' | 'especificacion' | 'remision';
}

export interface FichaCapacitacion {
  id: string;
  titulo: string;
  nivel: NivelFicha;
  duracion: string;
  objetivo: string;
  contenido: string[];
  normativaRelacionada: string[];
  colectivo: string;
  icono: string;
}
