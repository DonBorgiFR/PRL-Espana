---
description: añadir una nueva norma (ley o real decreto) al data layer de la aplicación
---

# Workflow: Añadir Nueva Norma al Data Layer

## Contexto

Las leyes se cargan desde ficheros individuales en `src/data/`:
- `lprl.ts` → Ley 31/1995 LPRL
- `rsp.ts` → RD 39/1997 RSP
- `cae.ts` → RD 171/2004 CAE
- `construccion.ts` → RD 1627/1997
- `rd486.ts` → RD 486/1997

El índice central es `src/data/index.ts`.
El tipo `Ley` está definido en `src/data/types.ts`.

---

## Paso 1 — Revisar el tipo `Ley`

```typescript
interface Articulo {
  id: string;       // '{leyId}-art{numero}' — ej: 'rd614-art1'
  numero: string;   // '1', '2', '2 bis'...
  titulo: string;
  texto: string;    // texto legal completo o resumen operativo
  badge: 'tecnico' | 'divulgativo' | 'ambos';
  boeUrl?: string;  // URL al artículo en boe.es (opcional)
  tags: string[];   // palabras clave para el buscador
}

interface Capitulo {
  id: string;       // '{leyId}-cap{N}' — ej: 'rd614-cap1'
  numero: string;   // 'Capítulo I', 'Título II'...
  titulo: string;
  articulos: Articulo[];
}

interface Ley {
  id: string;       // slug corto: 'lprl', 'rsp', 'rd614'
  codigo: string;   // 'RD 614/2001', 'Ley 31/1995'
  titulo: string;   // nombre completo
  subtitulo: string;
  fecha: string;    // 'BOE núm. X de DD de Mes de YYYY'
  boeUrl: string;   // URL a la norma completa en boe.es
  color: string;    // color HEX para acentos visuales en la UI
  icono: string;    // emoji representativo
  capitulos: Capitulo[];
}
```

---

## Paso 2 — Crear el fichero de datos de la nueva norma

Crear `src/data/{leyId}.ts` con la estructura completa.

Ejemplo para RD 614/2001 (Riesgo Eléctrico):

```typescript
// src/data/rd614.ts
import type { Ley } from './types';

export const rd614: Ley = {
  id: 'rd614',
  codigo: 'RD 614/2001',
  titulo: 'Disposiciones mínimas para la protección de la salud y seguridad de los trabajadores frente al riesgo eléctrico',
  subtitulo: 'Real Decreto 614/2001, de 8 de junio',
  fecha: 'BOE núm. 148 de 21 de junio de 2001',
  boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881',
  color: '#f59e0b',   // ámbar — diferente al resto de leyes
  icono: '⚡',
  capitulos: [
    {
      id: 'rd614-cap1',
      numero: 'Capítulo I',
      titulo: 'Disposiciones generales',
      articulos: [
        {
          id: 'rd614-art1',
          numero: '1',
          titulo: 'Objeto y ámbito de aplicación',
          texto: 'El presente Real Decreto establece las disposiciones mínimas de seguridad para la protección de los trabajadores frente a los riesgos derivados de la presencia de energía eléctrica en los lugares de trabajo...',
          badge: 'tecnico',
          boeUrl: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881#a1',
          tags: ['eléctrico', 'riesgo eléctrico', 'ámbito de aplicación', 'seguridad eléctrica'],
        },
        // añadir más artículos...
      ],
    },
    // añadir más capítulos...
  ],
};
```

> **Convención de IDs:**
> - Ley: `rd614`
> - Capítulo N: `rd614-cap{N}` (ej: `rd614-cap1`, `rd614-cap2`)
> - Artículo N: `rd614-art{N}` (ej: `rd614-art1`, `rd614-art2bis`)

> **Convención de colores** (usar uno no ocupado):
> - LPRL: `#818cf8` (índigo)
> - RSP: `#34d399` (verde esmeralda)
> - CAE: `#fbbf24` (ámbar)
> - RD 1627: `#f87171` (rojo)
> - RD 486: `#fb923c` (naranja)
> - Nueva: elegir de la paleta Tailwind 500, distinto a los anteriores

---

## Paso 3 — Registrar en el índice central

Editar `src/data/index.ts`:

```typescript
// 1. Añadir el import al principio
import { rd614 } from './rd614';

// 2. Añadir al array leyes
export const leyes: Ley[] = [lprl, rsp, cae, construccion, rd486, rd614];

// 3. Añadir al export final (última línea)
export { leyes as default, referencias, fichas, lprl, rsp, cae, construccion, rd486, rd614, rolesData, documentosData };
```

---

## Paso 4 — Añadir referencias cruzadas (opcional pero recomendado)

Editar `src/data/referencias.ts` para vincular artículos de la nueva norma con leyes existentes:

```typescript
{
  id: 'ref-rd614-lprl-art14',
  origen: { leyId: 'rd614', articuloId: 'rd614-art1', label: 'RD 614 · Art. 1' },
  destino: { leyId: 'lprl', articuloId: 'lprl-art14', label: 'LPRL · Art. 14' },
  descripcion: 'El RD 614/2001 desarrolla las obligaciones específicas de protección eléctrica establecidas en el art. 14 LPRL.',
  tipo: 'especificacion',
},
```

Tipos válidos: `'desarrollo' | 'complemento' | 'especificacion' | 'remision'`

---

## Paso 5 — Añadir al Checklist de Auditoría (opcional)

En `src/App.tsx`, el array `SECTORES` define qué leyes incluye cada sector.
Si la nueva norma aplica a algún sector existente, añadir su `id` al array `leyIds`:

```typescript
// Ejemplo: añadir rd614 al sector industria
{
  id: 'industria',
  label: 'Industria / Almacén',
  leyIds: ['lprl', 'rsp', 'rd614'],  // ← añadir aquí
  ...
},
```

---

## Paso 6 — Verificar compilación y UI

```powershell
npm run build
```

Verificar en `http://localhost:5173`:
1. La nueva norma aparece en la página de inicio (card en el grid de normativas)
2. Navegación `/normativa/{leyId}` carga los capítulos y artículos
3. El buscador encuentra artículos de la nueva norma
4. El checklist de auditoría incluye los artículos si se añadió al sector

---

## Criterios de calidad

- [ ] ID de ley en minúsculas sin espacios (`rd614`, no `RD 614`)
- [ ] IDs de capítulo y artículo siguen la convención `{leyId}-cap{N}` / `{leyId}-art{N}`
- [ ] Color distinto a las 5 leyes existentes
- [ ] Al menos 1 capítulo con al menos 2 artículos (mínimo viable)
- [ ] Tags en español y en minúsculas para que el buscador funcione
- [ ] Referencias cruzadas añadidas si la norma se relaciona con LPRL Art. 14, 15, 16, 24
- [ ] Build TypeScript sin errores
