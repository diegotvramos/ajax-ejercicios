


# EJERCICIOS AJAX-APIs

## Table of Contents

  - [APIs: Sitio web con AJAX](#apis-sitio-web-con-ajax)

    `ojo, los links a las cabeceras deben estar en minusculas y no se pone los 2 puntos nuestro gran referente fue axios.`

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

siguiente ejercicio: los sitios web mantiene la misma cabecera, el mismo pie de pagina lo unico que cambia el el contenido de cada seccion si hiciera este sitio con puro html, copiaria la cabecera y el pie en cada archivo, con AJAX podemos hacer que  el codigo de la cabecera esté en un archivo el codigo de piede pagina esté en otro archivo y simplemente cuando estemos de una seccion a otra nada mas mandar a llamar a cargar dinamicamente con AJAX sie estubieramos en PHP  usariamos la funcion INCLUDE que incluye un archivo, (incluir secciones comunes de un sitio web dinamicamente a travez de ajax)

### Ejercicios AJAX - APIs: Incluir archivos HTML (include-html.js)

Para este ejercicio necesitas tener instalado el php.

Lo que va hacer la libreria es buscar toda las etiquetas en el documento html que tengan el atributo _*data-include*_

* `innerHTML` pone contenido internamente dentro de un selector del DOM
* `autherHTML` reemplaza el contenido por el nodo en el que le estamos solicitando que haga ese reemplazo entonces esa div se va a  remplazar dinamicamente por la etiqueta header.

```html
  <div data-include="assets/header.html"></div>
```
Lo ideal es que todo los scripts de programacion en la parte de abajo antes del cierre del body, aunque hay escepciones, cuando las etiquetas semanticas de html no funcionaban bien en todo llos navegadores, habia una libreria que se llamaba html 5 shift que forsaba a que navegadores cono e explorer,  detectaran al menos los estilos de bloque para las etiquetas semanticas: header, aside, section, footer. y esa libreria te pedia no al ciere del body sinó en la cabecera, como ete elemento va buscar todo los elementos que tenga el atributo `data-include`.

Si das doble click en el archivo, este se va abrir atraves del protocolo FILE, ajax no funciona el el protocolo file, lo ideal es ejecrar en un entorno de servido

si usamos `el.innerHTML= xhr.responseText;` el contenido se carga dentro de la `div` en cambio si usas `el.outerHTML= xhr.responseText;` la etiqueta es reemplazado en su totalidad. 

Cuando ya lo estoy ejecutando desde un entorno de servidor local es decir la peticion se hace por http miren que el data include se hace correctamente. cada seccion la mando a llamar, cuando tu estas haciendo un sitio web estatico pero que a lo mejor no tiene mayor complejidad (html y css) o un cms como wordpress o un framework como gadsvied.

Toda la documentacion está aca: `https://github.com/jonmircha/include-html/` el readme está en ingles por que es el lenguaje universal de la programacion. acostumbrate a subirlo en ingles. Si fuera navegador antiguo en lugar de usar `const` usaria variables `vars`, en lugar de usar `arrow functions` usaria `funciones anonimas` 

SIGUIENTE: vamos ahcer un uploader de archivos la parte de js la vamos a trabajar con una barra de progreso pero para que no sea una subida simulada, voy a usar php. La carga la estoy manipulando don Ajax y ya una vez que termina manda la peticion al servidor y sube los archivos y la respuesta va  ser en formato JSON php es el mas instalado en el mundo.

### Ejercicios AJAX - APIs: Uploader con AJAX

veremos como subir archivos vamos a utilizar la API de AJAX y vamos a subir fisicamente el archivo con php.
usamos el atributo multiple para subir varios archivos, vean que no lo estoy encerando en un formulario, como no va tener el boton enviar, lo vamos hacer en el evento `change` del imput de tipo file

```html
  <input type="file" id="files" name="files" multiple>
```

vamos a crear una funcion que me permita mediante AJAX  la carga de archivos.
Al seleccionar un archivo nos muestra algo asi: ![imagen](/assets/manchita.JPG).

ojo, no es un Arreglo, mas bien es un objeto.

cuando nostros subimos ficheros mediante php, php tiene unas variables especiales que son variables de entorno.

```php
    // PARA imprimir objetos
    var_dump($_FILES);
```

uploader.php es como una pequeña api que yo estoy consumiendo.

### AJAX - APIs: Uploader AJAX con Barra de Progreso

Hoy vamos a agregar una barra de progreso a nuestro archivo, la parte visual de la barra de progreso puede variar de un navegador a otro

>- `pasó algo raro, mi hoja de estilo CSS no reconocia, tuve que apagar totalmente el servidor y reiniciarlo`

![progressEvent](/assets/eventoProgresEvent.JPG) 

con estos valores podemos saber cuanto tarda en subirse un archivo.

>- `cuando vean que declaro variables con *$* es por que hacen referencia a un elemento que existe en el DOM`

### Ejercicios AJAX - APIs: Uploader AJAX con Drag & Drop 

```javascript 
        // aqui no voy a utilizar la delegacion de eventos por que el unico elemento que va ser zona de interaccion activa va ser la
        // Drop Zone, entonces los eventos se los voy a asignar a la drop zone.

        $dropZone.addEventListener("dragover", (e) => {
            //console.log(e);
            e.preventDefault();
            e.stopPropagation();
            e.target.classList.add("is-active");
        });

        $dropZone.addEventListener("dragleave", (e) => {
            //console.log(e);
            e.preventDefault();
            e.stopPropagation();
            e.target.classList.remove("is-active");
        });

        $dropZone.addEventListener("drop", (e) => {/*soltar */
            //console.log(e);
            e.preventDefault();
            e.stopPropagation();
            const files = Array.from(e.dataTransfer.files);
            files.forEach(el => progressUpload(el));

            e.target.classList.remove("is-active");
        });
```
### Ejercicios AJAX - APIs: Envío Formulario con Fetch y FormSubmit.

los ejercicios anteriores los del citio html el include html etc. La hicimos con el objeto XMLHttpRequest.  es decir con el objeto ajax apartir de estos ejercicios vamos a trabajar con el api de Fetch y https://formsubmit.co/documentation 

```javaScript
  d.addEventListener("submit", (e)=>{

        e.preventDefault();

        const $loader= d.querySelector(".contact-form-loader"),
                        $response=d.querySelector(".contact-form-response");

        $loader.classList.remove("none");                
        
        fetch("https://formsubmit.co/ajax/00dramos@gmail.com",{
            method: "POST",
            body: new FormData(e.target) // ya no debo estar enviando los VALUES
            /*
                la ventaja de FormData es que parcea los valores del elemento y su valor el imput y el texto que 
                escribimos, el 'e.target' del evento es el formulario, NOTA: para que haga el parceo, recuerda que 
                todo los imputs tiene que tener su atributo 'Name' establecido.
            */
            
        })
            .then(res => res.ok ? res.json(): Promise.reject(res))// este es un operador ternario
            .then(json => {
                console.log(json);
                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML=`<p>${json.message}</p>`
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let message=err.statusText|| "Ocurrio un error al enviar, intenta nuevamente";
                $response.innerHTML = `<p>Error ${err.status}: ${message}</p`
            })
            .finally(() => setTimeout(() => {
                $response.classList.add("none");
                $response.innerHTML=""; // reseamos el innerHtml
            }, 3000))

    })
```

con este ejercicio ya podemos recibir mensajes a nuestro correo sin la necesidad de php.
Siguiente: vamos hacer este mismo ejercicio con la API de fetch y en lugar de utilizar para el envio de formulario de formSubmit.  lo que vamos a utilizar es el script de php que lo podamos subir al servidor