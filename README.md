


# EJERCICIOS AJAX-APIs

## Table of Contents

  - [APIs: Sitio web con AJAX](#apis-sitio-web-con-ajax)

    `ojo, los links a las cabeceras deben estar en minusculas y no se pone los 2 puntos`

### APIs: Sitio web con AJAX



La tecnologia AJAX tiene que ejecutarse en un entorno de servidor es decir las peticiones tienen que ser mediante el protocolo Http o https, es momento de trabajar en un entorno de desarrollo que haga las peticiones por http, tambien vamos a usar el lenguage PHP para algunos ejercicios.

¿Porque php?
por que es el mas popular, ademas cuando te comprar una cuenta de hosting compartido donde te dan acceso mediante FTP Cpanel generalmente el lenguage de servidor que te ofresen ese tipo de servicios  en el lado del servidor te ofresen PHP y base de datos mysql, hay 3 videos donde instalamos Xammpp desde 0

La etiqueta MAIN es una etiqueta semantica de html5.

¿Qué Son las Etiquetas HTML Semánticas? ![imagen](/assets/ES-Semantic-Search-Non-Semantic.png) Las etiquetas HTML semánticas son etiquetas que definen el significado del contenido que engloban. Por ejemplo, etiquetas como ``<header>``, ``<article>`` y ``<footer>`` ``<main>`` son etiquetas HTML semánticas. solo debe existir una sola etiquta main por documento html.  entonces no tiene sentido que le ponga una clase NO ``<main class="conteiner">`` pero lo pongo para delimitar la maxia anchura.

    Se supone que dinamicamente el contenido de las secciones ya tiene que existir pero solo el contenido html necesario en cada seccion quiere decir no va terner cabeceras o el lenguaje. Yo creo que es para no redundar codigo. CODIGO "DOMI".

creamos la funcion *getHtml*.

¿Cuando se tendria que ejecutar.?
se tendria que ejecutar en 2 momentos.
>- a la hora en que carga nuestro navegador.
>- a la hora en que le damos click a los enlaces (que ya no nos debe llevar a ese archivo, si no que tiene que extraer el   contenido html que tiene ese archivo.).

siguiente paso seria cuando le demos click a los enlaces del menu.

Cargmos dinamicamente el contenido:

>- ``url:e.target.href,``

```bash
$ npm install axios
```

```js
import axios, {isCancel, AxiosError} from 'axios';
```

Si tu quieres hacer un sitio que vaya posicionandoce  que tenga SEO este sito no te va servir pero hay muchos profecionales que quieren tener un sitio weba a manera de portafolio en una sola pagina y ahi si valga este tipo de tecnica en donde nunca cambian la url de su dominio. Esta tecnica tambien te va servir para un componente de pestañas y estar cambiando el contenido de la pestaña, eso se puede hacer con CSS y dysplay nones estamos en la seccion de ejercicion donde trabajamos Ajax, y quiero que veas las diferentes posibilidades que tenemos, desde cargar contenido asincrono en texto plano formateado a html es decir, no solo necesitas estar esperando puro json con el caso de las APIs de tipo REST recuerda, la tecnologia AJAX funciona con contenido textual(texto html), formato JSON y formato XML los mas populares.
