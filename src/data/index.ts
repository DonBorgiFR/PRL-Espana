import { lprl } from './lprl';
import { rsp } from './rsp';
import { cae } from './cae';
import { construccion } from './construccion';
import { referencias } from './referencias';
import { fichas } from './fichas';
import type { Ley } from './types';

export const leyes: Ley[] = [lprl, rsp, cae, construccion];

export function getLeyById(id: string): Ley | undefined {
  return leyes.find((l) => l.id === id);
}

export function getArticuloById(leyId: string, articuloId: string) {
  const ley = getLeyById(leyId);
  for (const cap of ley?.capitulos ?? []) {
    const art = cap.articulos.find((a) => a.id === articuloId);
    if (art) return { ley, capitulo: cap, articulo: art };
  }
  return null;
}

export function searchAll(query: string, filtros?: { leyId?: string; nivel?: string }) {
  const q = query.toLowerCase().trim();
  if (!q) return { articulos: [], fichas: [] };

  const articulosResult: Array<{
    ley: Ley;
    capituloTitulo: string;
    articulo: (typeof lprl.capitulos)[0]['articulos'][0];
  }> = [];

  const leyesFiltradas = filtros?.leyId
    ? leyes.filter((l) => l.id === filtros.leyId)
    : leyes;

  for (const ley of leyesFiltradas) {
    for (const cap of ley.capitulos) {
      for (const art of cap.articulos) {
        const match =
          art.titulo.toLowerCase().includes(q) ||
          art.texto.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q));
        if (match) {
          articulosResult.push({ ley, capituloTitulo: cap.titulo, articulo: art });
        }
      }
    }
  }

  const fichasFiltradas = fichas.filter((f) => {
    const matchNivel = !filtros?.nivel || f.nivel === filtros.nivel;
    const matchQ =
      f.titulo.toLowerCase().includes(q) ||
      f.objetivo.toLowerCase().includes(q) ||
      f.contenido.some((c) => c.toLowerCase().includes(q));
    return matchNivel && matchQ;
  });

  return { articulos: articulosResult, fichas: fichasFiltradas };
}

export { leyes as default, referencias, fichas, lprl, rsp, cae, construccion };
