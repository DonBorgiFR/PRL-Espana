# 📄 Modelo de Datos — PRL España

Este documento describe las estructuras de datos que sustentan la aplicación, permitiendo que la IA o futuros desarrolladores entiendan cómo añadir nueva normativa.

---

## 🏛️ Interfaces Principales

### `Ley`
Representa una norma completa (Ley, RD,Directiva).
```typescript
{
  id: string;        // id interno (ej. 'lprl')
  codigo: string;    // Nombre oficial (ej. 'Ley 31/1995')
  titulo: string;    // Título largo
  subtitulo: string; // Resumen ejecutivo
  fecha: string;     // Fecha de publicación/actualización
  boeUrl: string;    // Enlace a la fuente original
  color: string;     // Color de acento (HEX)
  icono: string;     // Emoji representativo
  capitulos: Capitulo[];
}
```

### `Articulo`
La unidad atómica de información.
```typescript
{
  id: string;
  numero: string;    // El número original del artículo
  titulo: string;
  texto: string;     // El contenido legal
  badge: 'tecnico' | 'divulgativo' | 'ambos'; // Clasificación de audiencia
  tags: string[];    // Para el motor de búsqueda
}
```

### `ReferenciaCruzada`
Conecta dos puntos de la normativa.
```typescript
{
  id: string;
  origen: { leyId: string; articuloId: string; label: string };
  destino: { leyId: string; articuloId: string; label: string };
  descripcion: string; // Por qué están conectadas
  tipo: 'desarrollo' | 'complemento' | 'especificacion' | 'remision';
}
```

### `FichaCapacitacion`
Estructura formativa basada en la normativa.
```typescript
{
  id: string;
  titulo: string;
  nivel: 'basico' | 'intermedio' | 'avanzado';
  duracion: string;
  objetivo: string;
  contenido: string[]; // Listado de puntos clave
  normativaRelacionada: string[]; // IDs de artículos o códigos de ley
}
```

---

## 🛠️ Cómo añadir nueva normativa
1.  Definir el objeto siguiendo los tipos en `src/data/types.ts`.
2.  Importar e incluir en el array `leyes` en `src/data/index.ts`.
3.  Asignar un color de acento único en `index.css` si es necesario (o usar los existentes).
