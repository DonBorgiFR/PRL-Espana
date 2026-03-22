# Workflow: Añadir Nueva Normativa

Este flujo describe cómo integrar un nuevo Real Decreto o Ley al sistema PRL España.

---

1. Identificar la normativa: (ej. RD 486/1997 Lugares de Trabajo).
2. Obtener el texto oficial de los capítulos y artículos clave desde el BOE.
3. Crear un nuevo archivo de datos: `src/data/nueva_norma.ts`.
4. Definir el objeto `Ley` siguiendo el `DATA_MODEL.md`:
   - Asignar un `id`, `codigo`, `titulo`.
   - Elegir un color de acento y un icono.
   - Mapear capítulos y sus artículos (incluyendo títulos, contenidos y tags).
   - Asignar el badge `tecnico`, `divulgativo` o `ambos` a cada artículo.
5. Registrar la nueva norma en `src/data/index.ts`:
   - Importar `nueva_norma`.
   - Incluirla en el array `leyes`.
6. (Opcional) Definir nuevas referencias cruzadas en `src/data/referencias.ts` que conecten con la nueva norma.
7. Verificar que aparece en el sidebar y en el buscador de la aplicación.
