---
description: añadir una nueva ficha de capacitación al módulo de Fichas
---

# Workflow: Añadir Ficha de Capacitación

## Contexto

Las fichas viven en `src/data/fichas.ts` como un array de objetos `FichaCapacitacion`.
El tipo está definido en `src/data/types.ts`.
El último ID en uso es `ficha-10` (nivel avanzado).

---

## Paso 1 — Revisar el tipo `FichaCapacitacion`

Leer `src/data/types.ts` para confirmar los campos requeridos:

```typescript
interface FichaCapacitacion {
  id: string;           // 'ficha-NN' — número secuencial con dos dígitos
  titulo: string;
  nivel: 'basico' | 'intermedio' | 'avanzado';
  duracion: string;     // ejemplos: '2h', '1.5h', '3h'
  colectivo: string;    // a quién va dirigido
  icono: string;        // emoji
  objetivo: string;     // 1-2 frases
  contenido: string[];  // 4-8 bullets descriptivos
  normativaRelacionada: string[]; // ej: ['LPRL Art. 14', 'RSP Art. 3']
  quiz?: {              // opcional pero recomendado
    question: string;
    options: string[];  // 4 opciones
    correctIndex: number;
    explanation: string;
    articleRef: string; // ej: 'Ley 31/1995 · Art. 14'
  }[];
}
```

---

## Paso 2 — Añadir la ficha en `src/data/fichas.ts`

Abrir `src/data/fichas.ts` y añadir el nuevo objeto al array `fichas`,
respetando el orden de niveles: primero `basico`, luego `intermedio`, luego `avanzado`.

Plantilla de ficha nueva:

```typescript
{
  id: 'ficha-11',           // incrementar respecto al último
  titulo: 'TÍTULO DE LA FICHA',
  nivel: 'intermedio',      // basico | intermedio | avanzado
  duracion: '2h',
  colectivo: 'Técnicos y mandos',
  icono: '🔧',
  objetivo: 'Descripción clara del objetivo formativo en 1-2 frases.',
  contenido: [
    'Punto 1 del contenido con referencia normativa cuando aplique',
    'Punto 2...',
    // mínimo 4, máximo 8 bullets
  ],
  normativaRelacionada: ['LPRL Art. XX', 'RSP Art. YY'],
  quiz: [
    {
      question: '¿Pregunta de verificación?',
      options: [
        'Opción A incorrecta',
        'Opción B incorrecta',
        'Opción C CORRECTA',
        'Opción D incorrecta',
      ],
      correctIndex: 2,
      explanation: 'Explicación que cita el artículo fuente.',
      articleRef: 'Ley 31/1995 · Art. XX',
    },
    // añadir 2-4 preguntas por ficha
  ],
},
```

> ⚠️ No añadir imports adicionales — `fichas.ts` importa `FichaCapacitacion` desde `./types`.

---

## Paso 3 — Verificar la compilación

```powershell
# En el directorio raíz del proyecto
npm run build
```

Esperado: `dist/` generado sin errores TypeScript.
Si el dev server ya está corriendo (`npm run dev`), el HMR actualizará automáticamente.

---

## Paso 4 — Verificar en la UI

1. Navegar a `http://localhost:5173/fichas`
2. Confirmar que la nueva ficha aparece en la columna del nivel correcto
3. Si tiene quiz, hacer clic en "📝 Empezar Micro-curso" y completar al menos una pregunta
4. Verificar que el badge "✅" aparece en la tarjeta tras superar el 80% del quiz

---

## Paso 5 — (Opcional) Vincular desde Roles

Si la ficha es relevante para un rol existente, añadir su `id` al array `fichas` del rol en `src/data/rolesData.ts`:

```typescript
// En el rol adecuado:
fichas: ['ficha-04', 'ficha-07', 'ficha-11'],  // añadir el nuevo id
```

---

## Criterios de calidad

- [ ] ID único y secuencial (`ficha-NN`)
- [ ] `normativaRelacionada` referencia artículos reales de las leyes cargadas (LPRL, RSP, CAE, RD 1627, RD 486)
- [ ] Quiz con mínimo 2 preguntas si se incluye
- [ ] `explanation` de cada pregunta cita el artículo con formato `Ley · Art. N`
- [ ] Build de TypeScript sin errores
