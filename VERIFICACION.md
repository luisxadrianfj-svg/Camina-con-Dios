# Verificación MVP 0.1

- `npm run lint`: pasa, sin errores ni advertencias.
- `npm run typecheck`: pasa.
- `npm run build`: pasa; páginas estáticas generadas con Next.js 16.4.0.
- `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e`: 2 pruebas pasan contra el servidor de producción.
- Revisión visual de Inicio a 1440 px y 390 px: realizada.

Las pruebas cubren las siete pantallas, navegación móvil y escritorio, favoritos añadidos y eliminados, reinicio de favoritos al recargar, preferencias conservadas al navegar, tamaño grande de texto, respuestas editoriales predefinidas, campos del diario deshabilitados, ausencia de localStorage, recursos de manifest/iconos, errores de JavaScript y desbordamiento horizontal a 390 px.

El sandbox requiere permiso de red para abrir los puertos locales usados por Next.js y Playwright. Un intento inicial de desarrollo concurrente con compilación no pasó; la comprobación final se realizó secuencialmente contra producción. No quedan pruebas fallidas en la ejecución final.

No se realizaron auditorías completas WCAG ni pruebas en dispositivos físicos. El manifest prepara una futura PWA; no incluye service worker ni modo offline.
