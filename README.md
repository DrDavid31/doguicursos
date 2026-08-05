# DOGUI Awareness

Plataforma estática de concientización en ciberseguridad para empresas.

## Que incluye

- 3 planes comerciales: Básico, Profesional y Enterprise.
- Catálogo de cursos de ciberseguridad.
- Aula funcional con lecciones navegables y video obligatorio por lección (no se puede adelantar ni saltar; "Completar lección" se desbloquea hasta terminar el video).
- Avance guardado por curso en el navegador, con desbloqueo secuencial de lecciones.
- Creador de cursos propios desde la interfaz.
- Constructor de lecciones y preguntas para cursos internos DOGUI.
- Cursos por área: Finanzas, Recursos Humanos, Dirección y TI.
- Microcursos mensuales.
- Evaluación rápida por curso.
- Simulaciones de phishing para Enterprise.
- Reporte ejecutivo mensual.
- Reconocimiento PDF al completar el curso y aprobar la evaluación.
- Sección de integraciones open source para evolucionar la plataforma.

## Integraciones recomendadas

La demo estática ya muestra la ruta de integración para convertir DOGUI en una plataforma completa:

| Producto DOGUI | Base recomendada | URLs |
| --- | --- | --- |
| Dogui Cyber Academy | Moodle | https://github.com/moodle/moodle / https://moodle.org/ |
| Dogui Phishing Awareness | Gophish | https://github.com/gophish/gophish / https://getgophish.com/ |
| Dogui Cyber Labs | OWASP Security Shepherd | https://github.com/OWASP/SecurityShepherd / https://owasp.org/www-project-security-shepherd/ |
| Dogui Cyber Labs | OWASP Juice Shop | https://github.com/juice-shop/juice-shop / https://owasp-juice.shop/ |
| Dogui CTF Empresarial | Juice Shop CTF Extension | https://github.com/juice-shop/juice-shop-ctf |

## Ruta de producto

- Moodle como LMS principal para usuarios, cursos, exámenes, certificados y reportes.
- Gophish como módulo de phishing simulado y awareness.
- OWASP Security Shepherd y Juice Shop como laboratorios premium para TI y desarrollo.
- Juice Shop CTF Extension para eventos CTF empresariales.

## Cursos propios

La plataforma incluye una sección `Crear` para que puedas armar tus propios cursos sin tocar código:

- Nombre del curso.
- Area a la que pertenece.
- Plan donde estará disponible.
- Descripción.
- Lecciones propias.
- Preguntas de evaluación.

En esta versión estática los cursos se guardan en el navegador con `localStorage`. Para que varios empleados compartan los mismos cursos, usuarios, calificaciones y reportes centrales, el siguiente paso es conectarlo a un backend o a un LMS como Moodle.

## Conexión API

La sección `Conectar` permite sincronizar cursos propios con un backend externo. GitHub Pages no ejecuta backend, por eso DOGUI usa una conexión configurable.

Contrato esperado:

```http
GET /courses?tenant=empresa
```

Respuesta:

```json
{
  "courses": []
}
```

Guardar cursos:

```http
PUT /courses?tenant=empresa
```

Body:

```json
{
  "tenant": "empresa",
  "courses": []
}
```

Si el backend no soporta `PUT`, la plataforma intenta `POST`. Para conectar Moodle, lo recomendable es crear un middleware DOGUI que reciba este contrato y lo traduzca a los web services de Moodle.

## Como abrirlo

Abre `index.html` en tu navegador.

## Como subirlo a GitHub Pages

Importante: GitHub Pages necesita que `index.html` esté directamente en la raíz publicada del repositorio.

Si al abrir tu sitio solo ves el nombre del repositorio y una carpeta, significa que el `index.html` quedó dentro de una subcarpeta.

1. Descomprime el ZIP.
2. Entra a la carpeta descomprimida.
3. Sube el contenido de esa carpeta a la raíz del repositorio, no la carpeta completa.
4. Deben quedar así en GitHub:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `assets/`
   - `README.md`
5. Para publicarlo con GitHub Pages:
   - Entra a `Settings`.
   - Ve a `Pages`.
   - En `Source`, selecciona `Deploy from a branch`.
   - Selecciona la rama `main` y la carpeta `/root`.
   - Guarda los cambios.

La URL final debería abrir directamente la plataforma:

```text
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

## Estructura

```text
dogui-awareness/
  index.html
  styles.css
  app.js
  course-content.js
  assets/
    fonts/
      space-grotesk-variable.woff2
      space-mono-400.woff2
      space-mono-700.woff2
  cursos/
    index.html
  README.md
```

## Videos de las lecciones

Cada lección de los 7 cursos incluidos trae un video corto de una fuente oficial o reconocida (INCIBE, OSI, y otros canales especializados en concientización de ciberseguridad), embebido con la API de IFrame de YouTube. El reproductor:

- No permite adelantar el video arrastrando la barra de progreso más alla de lo ya visto.
- Mantiene bloqueado el boton "Completar lección" hasta que el video termina.
- Bloquea la navegación a lecciones futuras hasta completar la lección actual (desbloqueo secuencial).
- Guarda que videos ya se vieron en `localStorage`, por curso y por lección.

Los cursos creados desde la sección `Crear` no requieren video: son contenido de texto definido por cada empresa.

## Notas

La plataforma está hecha con HTML, CSS y JavaScript puro. No requiere instalar dependencias ni ejecutar backend.
