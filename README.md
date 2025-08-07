# 🤖 Asistente Institucional UCM

Este proyecto es una aplicación web desarrollada en React + Vite que simula un chatbot institucional para responder consultas frecuentes sobre matrícula, retención, egreso, titulación y dotación académica de la Universidad Católica del Maule (UCM), utilizando datos reales cargados desde reportes institucionales.

## 🚀 Funcionalidades

- Responde automáticamente preguntas como:
  - ¿Cuántos estudiantes ingresaron en 2022?
  - ¿Cuál fue la tasa de retención en 2023?
  - ¿Cuántos académicos hubo en 2024?
- Reconoce el año mencionado en la pregunta.
- Respuestas rápidas y directas con formato profesional.
- Estilo simple y adaptable a cualquier plataforma.

## 📦 Estructura del proyecto

- `src/AsistenteInstitucional.jsx` → Lógica principal del chatbot con base de datos simulada.
- `index.html` → Punto de entrada de la app.
- `vite.config.js` → Configuración de Vite.
- `package.json` → Dependencias y scripts.

## ▶️ ¿Cómo ejecutar localmente?

```bash
npm install
npm run dev
```

Luego, abre tu navegador en:  
👉 `http://localhost:5173`

## 🌐 ¿Cómo publicar en Vercel?

1. Sube este proyecto a un repositorio de GitHub.
2. Crea una cuenta en [https://vercel.com](https://vercel.com).
3. Conecta tu cuenta de GitHub y selecciona el repositorio.
4. Vercel desplegará la app automáticamente y te dará una URL pública.

## 🧱 ¿Cómo incrustar en SharePoint?

Agrega el siguiente bloque en una página de SharePoint:

```html
<iframe src="https://tu-app.vercel.app" width="100%" height="600" style="border:none;"></iframe>
```

> Reemplaza `https://tu-app.vercel.app` por la URL proporcionada por Vercel.

---

Creado por Brayan Badillo © 2025 – UCM
