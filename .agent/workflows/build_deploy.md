---
description: proceso de build y deploy completo de la aplicación PRL España
---

# Workflow: Build y Deploy

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React 18 + TypeScript + Vite 6 |
| Routing | Wouter |
| PDF | jsPDF + html2canvas |
| Backend (opcional) | Node/Express proxy para Ollama |
| Deploy | Cualquier hosting estático (Netlify, Vercel, GitHub Pages, servidor propio) |

---

## Paso 1 — Verificar el entorno local

```powershell
cd "c:\Users\borja\OneDrive\Documentos\Antigravity\PRL España"
node --version   # >= 18
npm --version    # >= 9
```

---

## Paso 2 — Instalar dependencias

```powershell
npm install
```

Dependencias clave: `react`, `react-dom`, `wouter`, `jspdf`, `html2canvas`, `vite`.

---

## Paso 3 — Servidor de desarrollo

```powershell
npm run dev
```

Accesible en `http://localhost:5173`.
El proxy `/api/*` → `http://localhost:3001` está configurado en `vite.config.ts`.

---

## Paso 4 — Build de producción

```powershell
npm run build
```

Genera `dist/` con JS + CSS minificados. Sin errores TypeScript = listo para deploy.

---

## Paso 5 — Preview local del build

```powershell
npm run preview
```

Sirve `dist/` en `http://localhost:4173`. Comprobar:
- [ ] Home carga correctamente
- [ ] Navegación a todas las secciones funciona (sin 404)
- [ ] Exportación PDF en fichas y checklist de auditoría
- [ ] Historial del Consultor IA persiste entre recargas (localStorage)

---

## Paso 6 — Deploy en hosting estático

### Opción A: Netlify (recomendado para SPA)

```
Build command: npm run build
Publish directory: dist
```

Añadir archivo `public/_redirects`:
```
/* /index.html 200
```

### Opción B: Vercel

```
Framework preset: Vite
Build command: npm run build
Output directory: dist
```

Vercel genera las reglas de redirect para SPA automáticamente.

### Opción C: GitHub Pages

Si el repo no está en la raíz del dominio, ajustar `vite.config.ts`:
```typescript
base: '/nombre-repo/',
```

```powershell
npm run build
npx gh-pages -d dist
```

### Opción D: Servidor propio (Nginx)

```nginx
server {
    listen 80;
    root /var/www/prl-espana/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Paso 7 — (Opcional) Backend Ollama proxy

Aplica si se quiere activar el Consultor IA con modelo real.

### Configurar `.env` en el directorio del server

```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_FALLBACK_URL=
OLLAMA_API_PREFIX=/v1
OLLAMA_PROXY_TOKEN=
OLLAMA_UPSTREAM_TOKEN=
PORT=3001
HOST=127.0.0.1
CORS_ORIGIN=http://localhost:5173,https://tu-dominio.com
```

### Arrancar el backend

```powershell
npm start
# O en producción con PM2:
pm2 start server.js --name prl-backend
```

### Verificar salud

```powershell
curl http://localhost:3001/api/health
# Respuesta esperada: {"ok":true}
```

### Variante A: Ollama en red local (intranet)

1. Desplegar frontend + backend en red corporativa.
2. Apuntar `OLLAMA_BASE_URL` al host interno de Ollama.
3. Restringir `CORS_ORIGIN` al dominio interno.
4. Si hay múltiples clientes, definir `OLLAMA_PROXY_TOKEN`.

### Variante B: Proveedor externo (fallback)

1. Mantener `OLLAMA_BASE_URL` como primario.
2. Configurar `OLLAMA_FALLBACK_URL` para continuidad.
3. Si el proveedor exige auth, usar `OLLAMA_UPSTREAM_TOKEN`.

> El frontend detecta automáticamente si el backend responde en `/api/health`.
> Si no responde → Consultor IA en modo vista previa (sin tokens, sin IA real).

---

## Estructura de ficheros relevantes

```
PRL España/
├── src/
│   ├── App.tsx              ← componente raíz, toda la UI
│   ├── index.css            ← design system completo
│   └── data/
│       ├── types.ts         ← interfaces TypeScript
│       ├── index.ts         ← agregador + funciones de búsqueda
│       ├── lprl.ts, rsp.ts, cae.ts, construccion.ts, rd486.ts
│       ├── fichas.ts        ← fichas de capacitación
│       ├── referencias.ts
│       ├── rolesData.ts
│       └── documentosData.ts
├── vite.config.ts           ← config build + proxy /api
├── tsconfig.json
├── .agent/workflows/        ← este directorio
└── dist/                    ← output del build (no commitear)
```

---

## Checklist pre-deploy

- [ ] `npm run build` sin errores TypeScript
- [ ] `npm run preview` — navegación y PDF funcionan
- [ ] No hay claves API ni tokens en el código fuente
- [ ] Si hay backend: `.env` configurado y en `.gitignore`
- [ ] Reglas de redirect SPA configuradas en el hosting
- [ ] Verificar responsive en mobile (breakpoints en `index.css`)
