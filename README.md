# DOGUI Awareness

Plataforma estatica de concientizacion en ciberseguridad para empresas.

## Que incluye

- 3 planes comerciales: Basico, Profesional y Enterprise.
- Catalogo de cursos de ciberseguridad.
- Aula funcional con lecciones navegables.
- Avance guardado por curso en el navegador.
- Cursos por area: Finanzas, Recursos Humanos, Direccion y TI.
- Microcursos mensuales.
- Evaluacion rapida por curso.
- Simulaciones de phishing para Enterprise.
- Reporte ejecutivo mensual.
- Reconocimiento PDF al completar el curso y aprobar la evaluacion.

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
