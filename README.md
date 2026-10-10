# Camina con Dios · MVP 0.1

Aplicación en español de acompañamiento espiritual para adolescentes y adultos de distintas tradiciones cristianas. Next.js App Router, TypeScript y Tailwind CSS 4. Node.js 20.9 o superior.

## Ejecutar

```sh
npm ci
npm run dev
```

Si ejecutas el servidor en tu computadora, abre http://localhost:3000. Si lo ejecutas en un entorno remoto de Codex, esa dirección solo funciona dentro del entorno: necesitas un enlace de vista previa o reenvío de puertos proporcionado por la plataforma. La bienvenida es la ruta inicial. Para producción: `npm run build` y `npm start`.

## Pantallas

- `/` y `/bienvenida`: bienvenida y preferencias iniciales.
- `/inicio`: referencia del día, espacio reservado para texto autorizado y reflexión editorial.
- `/reflexion`: preguntas con respuestas de demostración predefinidas.
- `/biblia`: contexto histórico y cultural introductorio.
- `/diario`: maqueta con ejemplos ficticios y controles deshabilitados.
- `/favoritos`: añadir y quitar una referencia de muestra durante la sesión.
- `/perfil`: preferencias de ritmo y tamaño de letra, sin cuenta.

## Arquitectura

`src/app/` contiene rutas y metadatos; `src/components/` reúne el marco de navegación, componentes visuales y estado efímero; `src/lib/demo.ts` centraliza los datos editoriales de demostración. Estos límites permiten sustituir las fuentes de contenido y añadir adaptadores de servicios en una etapa posterior. No se incluyen clientes Supabase, rutas API, autenticación ni llamadas a modelos.

Todo el estado es React en memoria: se restablece al recargar y no utiliza cookies, localStorage ni base de datos. El diario no acepta texto ni guarda entradas. No hay analítica, fuentes externas ni peticiones a servicios desde la aplicación.

## Contenido y accesibilidad

No se reproduce texto bíblico ni se asigna traducción o denominación. La referencia Salmo 23:1–3 es ilustrativa. Los textos editoriales y respuestas están etiquetados; el contexto debe revisarse antes de publicar un catálogo. Las traducciones se habilitarán al contar con contenido autorizado.

Diseño mobile-first, navegación inferior, controles de al menos 44 px, foco visible, enlace para saltar al contenido, HTML en español, regiones semánticas, movimiento reducido y preferencia de texto grande.

## Preparación PWA

Manifest, iconos locales y metadatos para modo standalone. No se registra service worker ni se implementa funcionamiento offline; esta versión no garantiza instalación en todos los navegadores. Se requiere HTTPS y completar la estrategia offline para una futura PWA.

## Verificar

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Las pruebas de navegador requieren `npm run build` y ejecutan el servidor de producción y verifican navegación, respuestas simuladas, favoritos efímeros, preferencias, diario deshabilitado y ausencia de desbordamiento a 390 px.


## Acceso desde Codex web

Se comprobó el servidor de desarrollo escuchando en `0.0.0.0:3000`: las rutas `/bienvenida`, `/inicio`, `/reflexion`, `/biblia`, `/diario`, `/favoritos` y `/perfil` respondieron HTTP 200. En la sesión de diagnóstico no se dispone de una herramienta de reenvío de puertos ni de una URL pública de vista previa. `localhost` en Chrome apunta a la computadora del usuario, no al entorno remoto. `0.0.0.0` es la dirección de escucha del servidor, no un enlace público.

### Alternativa desde el navegador

Vercel Hobby ofrece alojamiento gratuito para proyectos personales no comerciales, sujeto a sus límites de uso. No es necesario instalar Node.js ni herramientas en tu computadora.

1. Coloca el código en un repositorio de GitHub. Puede ser privado. Si usas la interfaz web de GitHub, sube `src/`, `public/`, `package.json`, `package-lock.json`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` y `.gitignore`, manteniendo las carpetas. No subas `node_modules/`, `.next/`, `work/` ni archivos de credenciales. El repositorio de destino es `luisxadrianfj-svg/Camina-con-Dios`; utiliza la rama `main` después de incorporar la propuesta de cambios.
2. En https://vercel.com/new, inicia sesión con GitHub e importa el repositorio.
3. Selecciona Next.js y la carpeta que contiene `package.json` como raíz. No añadas variables de entorno: este MVP no necesita claves.
4. Despliega y abre la dirección HTTPS que Vercel genere. No uses `localhost:3000` en tu computadora.

Esta publicación requiere cuentas de GitHub y Vercel y autorizar el acceso al repositorio; no se ha realizado durante el diagnóstico. Antes de continuar, comprueba que el proyecto sea elegible para Hobby y no habilites opciones de pago. La aplicación seguirá siendo una demostración, sin servicios de IA ni almacenamiento privado.
