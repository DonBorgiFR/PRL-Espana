# Workflow: Servir y Verificar Localmente

Este flujo de trabajo permite al agente iniciar el servidor de desarrollo en la máquina local del usuario.

---

// turbo
1. Instalar dependencias si es necesario:
   ```bash
   npm install
   ```

// turbo
2. Ejecutar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Verificar en el navegador la URL `http://localhost:5173`.
4. Comprobar que:
   - La página principal carga las 4 normativas.
   - El buscador devuelve resultados.
   - Las fichas de capacitación son navegables por nivel.
   - Las referencias cruzadas se muestran correctamente.
