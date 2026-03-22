# 🤖 Guía de Integración con LLM Local (Ollama)

Esta guía explica cómo utilizar un modelo de lenguaje local (como Llama 3 o Qwen 2.5) a través de **Ollama** para explotar el conocimiento contenido en este repositorio.

---

## 🏗️ Configuración Recomendada

1.  **Instalar Ollama:** Descargar de [ollama.com](https://ollama.com).
2.  **Modelo Sugerido:** `llama3.1:8b` (o `70b` si el hardware lo permite).
    ```bash
    ollama run llama3.1
    ```

---

## 📝 Plantillas de Prompts

Para obtener los mejores resultados, use estos prompts estructurados pegando el contenido JSON de `src/data/`.

### 1. Generador de Píldoras Formativas (Talks)
> "Actúa como un experto en Prevención de Riesgos Laborales. Analizando el artículo 15 de la LPRL (Ley 31/1995), redacta una píldora formativa de 1 minuto para trabajadores de almacén, usando un lenguaje divulgativo y cercano. Enfócate en la aplicación práctica de 'evitar los riesgos' y 'sustituir lo peligroso por lo que entrañe poco o ningún peligro'."

### 2. Auditor de Referencias Cruzadas
> "Revisa nuestro mapeo de referencias cruzadas entre la LPRL y el RD 1627/1997. Basándote en el texto del Plan de Seguridad y Salud (Art. 7 RD 1627), ¿qué otras 3 conexiones críticas sugieres añadir para un técnico que trabaje en sector construcción?"

---

## 🛠️ Automatización (Scripts)

Puedes alimentar los archivos de `src/data/*.ts` directamente a un script de Python que use la API de Ollama para:
- Generar resúmenes por capítulo.
- Crear preguntas tipo test para validar la comprensión de cada ficha.
- Traducir los resúmenes a otros idiomas para equipos internacionales.
