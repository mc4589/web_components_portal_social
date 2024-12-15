# Red Social

## Descripción

Este proyecto es una red social básica llamada "PORTAL SOCIAL ABC" utilizando HTML, CSS y JavaScript. La aplicación incluye varias páginas, como una página de inicio, un perfil social, una galería y una tabla de registros. Los componentes web personalizados se utilizan para encapsular el HTML y CSS, asegurando un código modular y fácil de mantener.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Web Components
- Shadow DOM
- slots
- API

## Estructura del Proyecto

Por medio de componentes en javascript se construyeron el headee, menú, div principal de contenido (main) y footer
### index.html
Es la página de inicio desde donde accederemos por medio del menú a las bubpáginas de tabla, galería y perfil social. Las etiquetas de esta página se encuentran vinculadas a los componentes de main.js.

### main.js
En este apartado se construyen los componentes del header, menú, div principal main, título de página y footer. Se encapsulan los estilos de cada sección en el shadow DOM.

### gallery.html

Es la página que define la estructura del contenido. Se muestra la sección del perfil de usuario en el div principal, y se conservan las etiquetas que se relacionan a los componentes del header, menu, footer.

### gallery.js

En este fichero se construyen los componentes de la galería, así como los estilos css de las fotos de pokemones. Por medio del fetch se definen los atributos de los registros json que son importados desde una API externa.

### profile.html

En este archivo se construye la estructura de visualización del perfil de usuario. Se conserva el header, menú, main y footer, con la diferencia de que coloca la etiqueta de "profile-component" que vincula al archivo profile.js.

### profile.js
se crea un componente adicional donde se aloja una fotografía del estudiante y los atributos de su perfil. Dentro de este componente se encapsulan los estilos css del casillero de la imagen y del texto del perfil de usuario.

### table.html

Se define el marcado para la presentación de la tabla de usuarios, conservando el header, menú, div principal y footer.

### table.js

Se construyen los componentes de la tabla con estilos encapsulados en shadow DOM. Para importar los registros de usuarios desde una API externa, se utilizó fetch. Asimismo, se definieron las estructuras del encabezado de las tablas, filas de registros y atributos.

## Conclusiones

La construcción de componentes web de forma separada para la tabla, perfil de usuario y galería permite gestionar el código de manera modular y reducir los errores de ejecución. También nos ahorra tiempo en implementar modificaciones al código.

La función fetch es una herramienta versátil para gestionar bases de datos desde una API externa, lo que nos permite importar datos en SQL o No SQL y mstrarlos en tablas creadas mediante código en javascript.

La organización de los archivos que componen el proyecto juega un papel fundamental para estructurar el código desde el inicio, es por ello que, al definir primero los divs de footer, menu, div principal y footer, nos marca una estructura base para incluir los componentes de los elementos internos como títulos, tablas, divs secundarios para perfiles de usuario, galería. 



