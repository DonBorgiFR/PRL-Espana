# 🏗️ Arquitectura de Software — PRL España

PRL España sigue una arquitectura orientada a datos (**Data-Driven SPA**) centrada en la mantenibilidad y la rapidez de acceso a la información normativa.

---

## 🧩 Estructura de Capas

### 1. Capa de Datos (`src/data/`)
Es el corazón del proyecto. En lugar de una base de datos externa, la normativa se almacena en objetos constantes de TypeScript.
*   **Mantenibilidad:** Permite control de versiones sobre la ley.
*   **Offline First:** La aplicación funciona íntegramente sin conexión una vez cargada.
*   **Typing:** Uso estricto de interfaces (`types.ts`) para garantizar que toda norma cumple el esquema.

### 2. Capa de Lógica de Consulta (`src/data/index.ts`)
Proporciona utilidades para acceder a la base de conocimiento:
*   `searchAll(query, filters)`: Motor de búsqueda en memoria que recorre leyes, capítulos y fichas.
*   `getArticuloById(leyId, artId)`: Lookup directo para visualización individual.
*   `buildNormativeContext(query)`: Compresión de contexto normativo para consultas IA locales.

### 3. Capa de Presentación (`src/App.tsx`)
Basada en componentes funcionales de React.
*   **Routing:** `wouter` para un enrutado ligero y basado en el estado.
*   **UI Declarativa:** Se renderiza el árbol normativo de forma recursiva (Leyes -> Capítulos -> Artículos).
*   **Consultor IA Local:** Pantalla `/consultor-ia` con flujo de conversación y trazabilidad de contexto interno.

### 4. Capa de Integración Local IA (Vite Proxy)
*   Endpoint UI: `/api/ollama/chat`
*   Proxy dev: `vite.config.ts` redirige a `http://127.0.0.1:11434/api`.
*   Objetivo: mantener la app frontend desacoplada de credenciales y permitir uso local de Ollama.
*   Nota: esta capa existe solo en desarrollo con Vite; en producción requiere backend/proxy dedicado.

---

## 🎨 Design System

El diseño se basa en **CSS Puro** con variables (`:root`) para facilitar el cambio de temas (Dark Mode por defecto). Se emplea:
*   **Glassmorphism:** En cards de leyes y artículos para dar una sensación de profundidad premium.
*   **Typography Scaling:** Uso diferenciado de Serif (Playfair Display) para autoridad institucional y Sans-Serif (DM Sans) para lectura técnica.
*   **Color-Coding:** Cada norma tiene un color de acento asignado para orientación visual rápida.

---

## ⚡ Decisión sobre el Build

Se utiliza **Vite** para garantizar un hot-reload instantáneo durante el desarrollo de nuevas normativas y un bundle final extremadamente ligero y optimizado para ser servido desde cualquier CDN estático.
