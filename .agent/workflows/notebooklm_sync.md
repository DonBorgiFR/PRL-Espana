# Workflow: Sincronizar con NotebookLM

Pasos para mantener el conocimiento actualizado en el modelo externo NotebookLM.

---

1. Verificar que el servidor MCP `notebooklm` está accesible.
2. Identificar el Notebook UUID de "PRL España" mediante `mcp_notebooklm_notebook_list`.
3. Para cada nueva pieza de normativa o ficha:
   - Extraer el contenido de texto plano.
   - Llamar a `mcp_notebooklm_notebook_add_text` especificando el titulo de la ley o ficha.
4. Generar un resumen actualizado del notebook si es necesario mediante `mcp_notebooklm_notebook_describe`.
5. Ejecutar una consulta de prueba vía `mcp_notebooklm_notebook_query` para verificar que la IA responde con las nuevas fuentes.
