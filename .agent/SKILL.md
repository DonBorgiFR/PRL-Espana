# 🤖 Skill Agent — PRL España

Esta skill permite al agente interactuar con el repositorio de **PRL España**, gestionando la normativa, creando fichas formativas y sincronizando el conocimiento con servicios externos (NotebookLM y Ollama).

---

## 🏗️ Capacidades

*   **Añadir Normativa:** Importar nuevas leyes o reglamentos al `data-driven` engine.
*   **Gestión de Fichas:** Crear módulos de capacitación de tres niveles a partir de la ley.
*   **Conexiones Normativas:** Identificar y mapear referencias cruzadas entre artículos.
*   **Sync Externo:** Preparar y enviar fuentes a NotebookLM.
*   **Análisis Local:** Preparar prompts para Ollama basándose en el estado actual.

---

## 🛠️ Workflows Disponibles

Los flujos de trabajo se encuentran en `.agent/workflows/`:

1.  **`serve_local.md`**: Cómo ejecutar y verificar la app en desarrollo.
2.  **`add_normativa.md`**: Pasos para integrar una nueva ley (ej. RD 486/1997).
3.  **`add_ficha.md`**: Generar una ficha de capacitación desde un artículo específico.
4.  **`notebooklm_sync.md`**: Sincronización con el notebook de NotebookLM.
5.  **`build_deploy.md`**: Generación del build de producción y notas post-despliegue.

---

## 📐 Guía de Identidad (Style Guide)

Cuando el agente genere nuevo contenido para el proyecto, debe seguir estos principios:
*   **Tono:** Profesional, técnico pero accesible (según el badge).
*   **Autoridad:** Siempre citar el artículo y la norma de origen.
*   **Diseño:** Mantener el uso de HSL y gradientes definidos en `index.css`.
*   **Estructura:** Seguir estrictamente el `DATA_MODEL.md`.
