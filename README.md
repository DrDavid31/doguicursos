# DOGUI Awareness

Plataforma estatica de concientizacion en ciberseguridad para empresas.

## Que incluye

- 3 planes comerciales: Basico, Profesional y Enterprise.
- Catalogo de cursos de ciberseguridad.
- Aula funcional con lecciones navegables.
- Avance guardado por curso en el navegador.
- Creador de cursos propios desde la interfaz.
- Constructor de lecciones y preguntas para cursos internos DOGUI.
- Cursos por area: Finanzas, Recursos Humanos, Direccion y TI.
- Microcursos mensuales.
- Evaluacion rapida por curso.
- Simulaciones de phishing para Enterprise.
- Reporte ejecutivo mensual.
- Reconocimiento PDF al completar el curso y aprobar la evaluacion.
- Seccion de integraciones open source para evolucionar la plataforma.

## Integraciones recomendadas

La demo estatica ya muestra la ruta de integracion para convertir DOGUI en una plataforma completa:

| Producto DOGUI | Base recomendada | URLs |
| --- | --- | --- |
| Dogui Cyber Academy | Moodle | https://github.com/moodle/moodle / https://moodle.org/ |
| Dogui Phishing Awareness | Gophish | https://github.com/gophish/gophish / https://getgophish.com/ |
| Dogui Cyber Labs | OWASP Security Shepherd | https://github.com/OWASP/SecurityShepherd / https://owasp.org/www-project-security-shepherd/ |
| Dogui Cyber Labs | OWASP Juice Shop | https://github.com/juice-shop/juice-shop / https://owasp-juice.shop/ |
| Dogui CTF Empresarial | Juice Shop CTF Extension | https://github.com/juice-shop/juice-shop-ctf |

## Ruta de producto

- Moodle como LMS principal para usuarios, cursos, examenes, certificados y reportes.
- Gophish como modulo de phishing simulado y awareness.
- OWASP Security Shepherd y Juice Shop como laboratorios premium para TI y desarrollo.
- Juice Shop CTF Extension para eventos CTF empresariales.

## Cursos propios

La plataforma incluye una seccion `Crear` para que puedas armar tus propios cursos sin tocar codigo:

- Nombre del curso.
- Area a la que pertenece.
- Plan donde estara disponible.
- Descripcion.
- Lecciones propias.
- Preguntas de evaluacion.

En esta version estatica los cursos se guardan en el navegador con `localStorage`. Para que varios empleados compartan los mismos cursos, usuarios, calificaciones y reportes centrales, el siguiente paso es conectarlo a un backend o a un LMS como Moodle.

## Como abrirlo

Abre `index.html` en tu navegador.

## Como subirlo a GitHub Pages

Importante: GitHub Pages necesita que `index.html` este directamente en la raiz publicada del repositorio.

Si al abrir tu sitio solo ves el nombre del repositorio y una carpeta, significa que el `index.html` quedo dentro de una subcarpeta.

1. Descomprime el ZIP.
2. Entra a la carpeta descomprimida.
3. Sube el contenido de esa carpeta a la raiz del repositorio, no la carpeta completa.
4. Deben quedar asi en GitHub:
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

La URL final deberia abrir directamente la plataforma:

```text
https://TU-USUARIO.github.io/TU-REPOSITORIO/
```

## Estructura

```text
dogui-awareness/
  index.html
  styles.css
  app.js
  assets/
    awareness-dashboard.png
  cursos/
    index.html
  README.md
```

## Notas

La plataforma esta hecha con HTML, CSS y JavaScript puro. No requiere instalar dependencias ni ejecutar backend.
