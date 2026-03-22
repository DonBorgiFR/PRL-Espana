# 🏗️ PRL España — Base de Conocimiento Inteligente

PRL España es una herramienta avanzada de consulta y análisis de la normativa fundamental en **Prevención de Riesgos Laborales** (SST). Diseñada para técnicos de prevención, departamentos de formación y mandos intermedios, permite navegar de forma fluida a través del marco legal español, identificando conexiones entre leyes y accediendo a contenido formativo estructurado.

---

## 🏛️ Normativa Cubierta

La aplicación incluye el volcado estructurado de las cuatro normas pilar de la PRL en España:

*   ⚖️ **Ley 31/1995 (LPRL)** — Marco jurídico fundamental.
*   🏢 **RD 39/1997 (RSP)** — Reglamento de los Servicios de Prevención.
*   🤝 **RD 171/2004 (CAE)** — Coordinación de Actividades Empresariales.
*   🏗️ **RD 1627/1997 (Construcción)** — Seguridad en obras de construcción.

Cada norma incluye sus capítulos, artículos con **badges técnicos/divulgativos** y enlaces directos al BOE.

---

## 🚀 Funcionalidades Principales

*   **Buscador Inteligente:** Búsqueda rápida en toda la base normativa por palabras clave, artículos o etiquetas.
*   **Referencias Cruzadas:** Mapa interactivo con **12 conexiones estratégicas** entre normas (ej. cómo el Art. 24 LPRL se desarrolla en el RD 171/2004).
*   **Fichas de Capacitación:** 10 módulos formativos divididos en tres niveles (Básico, Intermedio, Avanzado) listos para orientación del personal.
*   **Diseño Premium:** Interfaz oscura, minimalista y de alta legibilidad optimizada para profesionales.
*   **Vínculos BOE:** Acceso inmediato a la fuente oficial de cada artículo.

---

## 🛠️ Stack Tecnológico

*   **Core:** React 18 + TypeScript.
*   **Routing:** [Wouter](https://github.com/molecula-js/wouter).
*   **Estilos:** Vanilla CSS (Custom Properties, Glassmorphism, CSS Grid).
*   **Build Tool:** Vite.
*   **Fuentes:** DM Sans (Cuerpo), Playfair Display (Títulos).

---

## 🖥️ Configuración Local

1.  Clonar el repositorio.
2.  Instalar dependencias:

    ```bash
    npm install
    ```

3.  Ejecutar en modo desarrollo:

    ```bash
    npm run dev
    ```

4.  Construir para producción:

    ```bash
    npm run build
    ```

---

## 💡 Integración con Ecosistema IA

### NotebookLM

Este repositorio está diseñado para ser sincronizado con **NotebookLM** como base de conocimiento. El archivo `src/data/` contiene los datos estructurados que pueden ser importados como fuentes para análisis profundo y generación de respuestas basadas únicamente en este contexto normativo.

### Ollama / Llama Local

Se pueden utilizar prompts estructurados (ver `llm_integration.md`) para que un modelo local analice el JSON de normativa y:

*   Genere checklists de auditoría personalizados.
*   Cree escenarios de riesgo basados en artículos específicos.
*   Redacte resúmenes ejecutivos para mandos.

---

## 🗺️ Roadmap de Explotación

*   [ ] **Auditoría Interactiva:** Checklist sectorial basado en la normativa seleccionada.
*   [ ] **Generación de Vídeo:** Conversión de fichas de capacitación en scripts para vídeo con IA.
*   [ ] **Exportación PDF:** Generación de manuales formativos personalizados.
*   [ ] **Ampliación Normativa:** Inclusión de RD 486/1997 (Lugares de Trabajo) y NTPs del INSST.
