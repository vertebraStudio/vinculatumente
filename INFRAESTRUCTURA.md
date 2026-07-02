# Infraestructura y despliegue — Vincula Tu Mente

Documentación operativa del proyecto: cómo está alojado, cómo se despliega, cómo
se gestionan dominios, CMS y accesos. Complementa a `HANDOFF.md` (que describe el
stack, el diseño y el árbol de ficheros).

> Web de **María Villalba López**, psicóloga y sexóloga (Nº Col. M-43581).
> Dominio principal: **https://vinculatumente.es**

---

## 1. Resumen en una tabla

| Capa | Detalle |
|------|---------|
| Framework | Next.js 16.2 (App Router) + React 19, en JavaScript |
| CMS | Keystatic — `local` en desarrollo, `cloud` en producción |
| Contenido | `.mdoc` en `src/content/posts/` (versionado en Git) |
| Repositorio | github.com/vertebraStudio/vinculatumente · rama `main` |
| Hosting | Vercel · equipo **vertebraStudio** · plan Hobby (gratis) |
| Registrador dominio | IONOS (cuenta de la clienta) |
| Dominio principal | `vinculatumente.es` |
| Redirecciones | `vinculatumente.com` → 308 → `vinculatumente.es` |
| Correo | Buzones IONOS (registros MX intactos en el DNS) |
| Despliegue | Automático: `git push` a `main` → build y publicación en Vercel |
| Coste | 0 € (Vercel Hobby + Keystatic Free) |

---

## 2. Flujo de despliegue

1. Se hace `git push` a la rama `main` del repo `vertebraStudio/vinculatumente`.
2. Vercel detecta el push y ejecuta `next build`.
3. Si el build pasa, publica automáticamente en producción (`vinculatumente.es`).
4. Cada rama/PR genera además un *preview deployment* con URL propia.

No hay pasos manuales. No se sube nada por FTP.

---

## 3. Dominios y DNS (IONOS)

Los dominios están en la cuenta de **IONOS** de la clienta. El DNS apunta a Vercel.

### Registros que importan (en `vinculatumente.es` y `vinculatumente.com`)

| Tipo | Host | Valor | Para qué |
|------|------|-------|----------|
| A | `@` | `216.198.79.1` | Apunta la web a Vercel |
| MX / TXT / CNAME (mail) | varios | `*.ionos.es` / `*.ionos.com` | **Correo — NO tocar** |

- El registro **A** es el que conecta el dominio con Vercel. Antes apuntaba al
  "Default Site" de IONOS (`217.160.0.23`); se cambió a la IP de Vercel.
- Los registros de **correo** (MX, SPF, DKIM, DMARC, autodiscover) se dejan
  como están: gestionan los buzones de IONOS. Tocarlos rompería el email.
- `vinculatumente.com` tiene el mismo registro A y en Vercel está configurado
  como **redirección 308** a `vinculatumente.es`.
- `vinculatumente.org` y `vinculatumente.store` están comprados pero **sin usar**
  (no apuntan a nada; se pueden dejar así o redirigir en el futuro).

### SSL

Lo emite y renueva **Vercel automáticamente** (Let's Encrypt). No hay que
gestionar certificados en IONOS.

---

## 4. CMS (Keystatic)

### Cómo decide el modo (local vs cloud)

En `keystatic.config.jsx`:

```js
const storage =
  process.env.NODE_ENV === 'development'
    ? { kind: 'local' }   // next dev → escribe en src/content/posts/
    : { kind: 'cloud' };  // producción → Keystatic Cloud
```

> **Importante:** el modo se decide con `NODE_ENV`, **no** con una variable propia.
> `NODE_ENV` es de las pocas variables que Next.js incrusta también en el bundle
> del navegador, así que **cliente y servidor resuelven siempre el mismo modo**.
> Si se usa una variable propia sin prefijo `NEXT_PUBLIC_` (como hacía antes
> `KEYSTATIC_STORAGE_KIND`), el navegador la ve como `undefined`, queda en modo
> `local`, pide `/api/keystatic/tree` y el servidor (en `cloud`) responde 404 →
> error *"Unable to load collection"*. Ver sección 7.

### Keystatic Cloud

- Proyecto: **`vertebra-studio/vinculatumente`** en https://keystatic.cloud
- Equipo: **Vertebra Studio** (plan Free: hasta 3 usuarios, proyectos ilimitados)
- GitHub App "Keystatic Cloud" instalada sobre el repo con permiso de
  lectura/escritura de código. Es la que hace los commits cuando alguien edita
  desde el CMS (los editores **no** necesitan cuenta de GitHub).
- URL del panel: **https://vinculatumente.es/keystatic**

### Dar acceso a un editor (p. ej. la clienta)

1. keystatic.cloud → equipo **Vertebra Studio** → pestaña **Users** → invitar por email.
2. La persona acepta la invitación y crea su cuenta (email o GitHub).
3. Entra en `vinculatumente.es/keystatic` → **Sign into Cloud** → a editar.

Al guardar un post se hace un commit al repo y Vercel redespliega solo en ~1-2 min.

---

## 5. Variables de entorno (Vercel)

Con el modo por `NODE_ENV`, **en producción no hace falta ninguna variable de
Keystatic**. Las que hay en Vercel son inofensivas (legado) y se pueden borrar:

| Variable | Estado |
|----------|--------|
| `KEYSTATIC_STORAGE_KIND` | **Ya no se usa** (lo sustituye `NODE_ENV`) |
| `KEYSTATIC_CLOUD_PROJECT` | No se lee (el proyecto está fijo en el config) |
| `KEYSTATIC_SECRET` | Solo aplica al modo `github`, no al `cloud` |

En **desarrollo local** tampoco hace falta nada: Keystatic usa storage local.

---

## 6. Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

- CMS local en `http://localhost:3000/keystatic` (escribe en `src/content/posts/`).
- Los cambios de contenido en local se suben con un commit normal a `main`.

---

## 7. Notas de configuración (por qué está así)

- **`next.config.js` NO usa `trailingSlash`.** Las rutas de API de Keystatic
  (`/api/keystatic/tree`, `/blob`, …) se piden **sin** barra final; con
  `trailingSlash: true` devolvían 404. Además los `canonical` del sitio ya van
  sin barra, así que quitarlo deja las URLs públicas coherentes.
- **`outputFileTracingIncludes`** incluye `src/content/**` en el bundle
  serverless de Vercel; sin esto el reader no encuentra los posts en producción.
- El panel `/keystatic` está marcado **noindex** y sin el chrome del sitio.

---

## 8. Escenario futuro: ¿y si la clienta quiere el hosting en IONOS?

El **hosting incluido en los planes básicos de IONOS** (MyWebsite / hosting
compartido PHP) **no puede ejecutar esta web**: Next.js necesita un entorno Node
con funciones serverless. Opciones reales, de más a menos recomendable:

1. **Dejarlo como está (recomendado).** El dominio ya es suyo (IONOS) y el
   hosting en Vercel es gratis. No paga de más.
2. **Traspasar el proyecto de Vercel a una cuenta propia de la clienta.** Si
   quiere ser dueña también del hosting, se transfiere el proyecto Vercel a su
   cuenta (sigue gratis) y su dominio ya apunta ahí.
3. **IONOS Deploy Now.** Producto de IONOS que despliega apps Next.js desde
   GitHub (similar a Vercel). Se conecta el repo, se ponen las variables y se
   cambia el DNS. Factible, aunque Vercel es más fino para Next.js.
4. **Exportar estático a IONOS.** Técnicamente posible pero se pierde la
   automatización (reconstruir y subir a mano en cada cambio) y complica el CMS.
   **No recomendado.**

En corto: lo actual es lo profesional; la vía natural para que ella "se apropie"
del proyecto es el **punto 2**, no mover el hosting a IONOS.

---

## 9. Accesos / cuentas implicadas

- **GitHub:** `vertebraStudio/vinculatumente` (privado).
- **Vercel:** equipo `vertebraStudio`, proyecto `vinculatumente`.
- **Keystatic Cloud:** equipo `Vertebra Studio`, proyecto `vertebra-studio/vinculatumente`.
- **IONOS:** cuenta de la clienta (dominios + correo).
- **Secretos:** el `KEYSTATIC_SECRET` generado se guardó en el gestor de
  contraseñas (referencia interna de Vertebra Studio).
