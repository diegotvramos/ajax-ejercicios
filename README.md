


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

 ### Ejercicios AJAX - APIs: Envío Formulario y CORS con Fetch y PHP

 Lo unico que va cambiar es simplemente la peticion del end point  al que consulta nuestra funcion fetch.
 El proyecto lo debemos ejecutar desde el servidor Xampp,

 lista completa de: **mime type**

 > https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types 

```javaScript
    fetch("assets/send_mail.php", {
            method: "POST",
            body: new FormData(e.target) // ya no debo estar enviando los VALUES            
        })
```
por alguna razon al especificar la carpeta la debemos hacer desde la carpeta padre.

 ![eror](/assets/error_parcear.JPG)

 tendria que tener un servidor que esté procesando peticiones por el puerto 25  que es por donde sale el protocolo SMTP
¿por que la consola me manda el error de Token?
por que la cabera nos está mandando un texto el **br** y el **warning** que o está en formate JSON, a causa de la falta del servidor smtp que no tengo.

  ![error](/assets/debug.JPG)

  #### CORS

  Cros Origin Resourse Sherin.

  hasta ahora toda las peticiones que hicimos en los videos de teoria y en los ejercicios que realizamos de ajax y apis todoas las anteriores TOdas han sido en el mismo en el mismo servidor en el que está el archivo php y la peticion, entonces el CORS son politicas de normas que te dicen toda las peticiones ajax en teoria tendrian que estár en el mismo servidor. Pero las Apis externas como jsonPlaceholder,  formSubmit esas no estan en nuestro servidor y aun así nos dejaron, entonces para solucionar esta restriccion hay dos maneras: una activar el modo no-cors para que funcione tu peticion , dos la api a la que estas consultando permita que el recurso sea accedido por cualquier origen.

  

  ```php
        // si no especifico el parametro opcional llamado '$headers'  lo va mandar en texto plano. 
        // r= retorno de carro, y n= nueva linea
        // la ventaja de poner FROM es que ya no te lo envia a la vandeja de correo basura
        $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: Envío Automático No Responder <no-reply@$domain>";
   
  ```

  SIGUIENTE: integraremos otra plataforma llamada STRIP, vamos hacer un carito de comprar, parcela de pagos online, para la siguiente crea tu cuenta de STRIPE. https://stripe.com/es-419-us VAMOS HACER peticiones a APIS  que si te pidan una autenticacion y aparte de enseñaré hacer cobros en linea todo con JS sin la necesidad de librerias. STRIPE PIDE UNA AUTENTICACION.

  ###  Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (1/4)

  Stripe es una pasarela de pagos,  es un servicio de cobro de hacer transacciones monetarias entre diferentes sistemas es una exelente opcion si tienes algun sitio de comercio electronico o si quieres vender y cobrar ciertos servicios atraves de plataformas en linea, para los desarrolladores tiene una gran variedad de lenguajes de programacion en la cual lo puedes implementar, y lo mas interesante es el tipico CHEKout esa pagina donde te aparece los datos para que puedas hacer una compra en linea a traves de una targeta de credito, Stripe tiene una solucion que que puedes implementar con codigo frontent javascript tambien te maneja varios lenguajes a lado del servidor (java, pyton,  php).

  Cuando tu vas a usar los servicios de un 3ro mediante una api, es muy importante dedicar cierto tiempo, mas que a programar,  a leer cuales son las reglas que este servicio externo te está pidiendo para que puedas interactuar, al menos para stripe no esposible actualizar productos
   https://stripe.com/docs
🟣 https://stripe.com/docs/api
🟣 https://stripe.com/docs/api/authentication 
🟣 https://stripe.com/docs/js
🟣 https://stripe.com/docs/api/products
🟣 https://stripe.com/docs/api/prices
🟣 https://stripe.com/docs/api/checkout/sessions
🟣 https://github.com/stripe-samples
🟣 https://github.com/stripe-samples/checkout-single-subscription

  https://stripe.com/docs/api/products 
  https://stripe.com/docs/api/checkout/sessions   toda las validacion los hace Stripe.

  estableces al dashboard de Stripe, de tal manera que alguine mal intencionado obtubiera tu llave key y quisiera hacer peticiones o transacciones, no se lo va permitir por que en el dashboard de Stripe tienes establecido que esa programacion front solo va funcionar desde el origen del dominio que tu hayas definido, lo ideal es definir un dominio pero puedes definir más.

puedes establecer desde que dominios aceptar las peticiones.

Por cada precio que le pongas a tu producto esté nos dará un ID

![imagen](/assets/Stripe-docs-api-prices.JPG)

### Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (2/4)

inclimos el script de Stripe.

no lo voy a programar en un solo archivo html, por que lo voy a trabajar por modulos

> Recuerda _si quieres trabajar con modulos los modulos no sirven desde el protocolo file es decir dandolé click al archivo html y abriendolo desde la ruta del disco duro tienen que estár invocando un servidor web (es la forma corecta de trabajar)_

```html
    <script src="js/stripe-checkout.js" type="module"></script>
```
> Recuerda _Cuando tu exportas algo por defecto en el archivo donde lo importas le puedes poner cualquier nombre y ya no tiene que usar la destructuracion. la Destructuracion son para las cosas que exportas sin el default y recuerda que por cada archivo  solamente puedes utilizar el default export una vez_

```javaScript
    export default{
    public:"Your public Stripe key",
    secret: "your Secret Stripe key"
}
```
> Importante: _de nuestra api primero vamos a acceder a nuestros productos. vas a obtener todo tus productos que estén en tu dashboard por eso te va pedir tus credenciales de autenticacion_

> el error 401 es error de autentificacion

https://stripe.com/docs/api/products

```Curl
    curl -G https://api.stripe.com/v1/products \
  -u "sk_test_51OYVv2DDb82FHuupxlIvY2yVxA2YzFJIEqLASzZ2Ab7b2cOAg8rFSLsqBeEwKTalQSXIt6Bl2yTNpVaALI8Md8NH00rqnwIFB1:" \
  -d limit=3
```

la cabecera de autorizacion que debemos usar: 

https://stripe.com/docs/api/authentication

**prefijos**

- Sk - es la llave secreta (secret key)
- PK - es la llave publica (public key) 

> Importante _Cada api maneja sus reglas y las cabeceras que tu la tendras que mandar y los mecanismos para autenticarte es muy distinta a la autentificacion de youtube, amazon si tu te dedicas al desarrollo de las apis de lado del servidor es que aparte de programarla tu te tienes que encargar de hacer la documentacion, en resumen esto no es algo convencional, cada api va establecer su propio tipo de autenticacion_

nos devuelve `Status: 200` una peticion correcta.

enlace para la documentacion de **precios** 

> Nota _Necesitasmos de estos dos endpoint para poder pintar en el DOM de nuestro ejercicio tanto la imagen y el nombre del procucto y los precios lo que vamos hacer es solicitar la informacion de ambos endpoints [la de productos y la de precios]_ para formar dinamicamente nuestra targeta de ordenes

que pasa cuando tu necesites la informacion de varias PIS (endpoints) para formar la interfaz de usuario? no es lo mas obtimo hacer un fetch, esperar a que ese fetch te devuelva luego solicitar el siguiente endpoint esperar a que te conteste afortunadamente la API de fetch es  es una API que devuelve promesas(que es un objeto de la programacion asincrona y tiene un metodo llamado promise: all  y este metodo promise: all te sirve para este tipo de necesidades cuando tu necesitas solicitar la informacion de varios endpoints en lugar de estar consultando cada endPoint y esperar a que te responda tu programas una sola invocacion, y ese metodo promis all va estar recibiendo toda las respuestas y al final te genera un solo objeto)

### Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (3/4)

el valor en cadena de texto va ser vas facil de tratar mediante un Slice y ponerle un punto.

Promis all, va esperar a que le responda cada uno de los endPoints y cuando le responda ejecutamos un metodo Then

es una de las ventajas de utilizar Promise All que en el orden que nosotros hayamos definido estas invocaciones sin
importar que respondan a distintos tiempos va respetar el orden de invocacion.

```javascript
    Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptios),
    fetch("https://api.stripe.com/v1/prices",fetchOptios)
])
.then((responses)=> Promise.all(responses.map((res)=>res.json())))
.then((json)=>{
    products = json[0].data;
    prices = json[1].data;
prices.forEach((el) => {// lo comparamos contra el forEach de los precios
        let productData = products.filter((product) => product.id   === el.product);
        console.log(productData);

        $template.querySelector(".taco").setAttribute("data-price",el.id);
        $template.querySelector("img").src = productData[0].images[0];
        //siguiente atributo a configurar, en el atributo ALT vamos a pegar el nombre del producto
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
            ${productData[0].name}
            <br>
            ${el.unit_amount_decimal} ${el.currency} 
        ` 
        // como es un nodo del DOM le colocamos el signo del dolar
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone); // para no estar inyectando directamente al DOM
    });

    $tacos.appendChild($fragment);

})
```

### Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (4/4)

formateamos el precio

> https://stripe.com/docs/api/checkout/sessions/list

``List all Checkout Sessions`` nos va permitir interactuar con el formulario de pago que ya está en la infraestructura de Stripe, al evento click de cada uno de esos producto lo debemos programar, es mandar a llamar este servicio. nos va pedir llave publica, en el Github de Stripe hay varias soluciones.

> https://github.com/stripe-samples/checkout-single-subscription 

La integración exclusiva del cliente de Checkout no está habilitada: hay que habilitarlo en la parte de abajo se encuentra un boton.

![imagen](/assets/La%20integración%20exclusiva%20del%20cliente%20de%20Checkout%20no%20está%20habilitada.JPG)


stripe cuenta con números de targeta para pagar eje 4242 4242 2442 4242

![pago](/assets/pago.JPG)

Una ventaja de Stripe al tu estar tercerizando todo este proceso de comercio electronico, tu ya no te metes en las broncas y de hecho no tendrias por que estar almacenando la informacion de las targetas de credito de tus clientes eso hace stripe, ese servicio por tí, hay ejemplo de ejercicios en el github ☝ 

a los productos puedes agregarle cupones, aplicar ciertos impuestos

con estó ya me olvidé las validaciones a las targetas de credito

```javaScript
    d.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.matches(".taco *")) { /*a todo los elementos internos de la clase "Taco" */
        // alert("A comprar");
        let price = e.target.parentElement.getAttribute("data-price");
        // console.log(price);
        // En el html ya estamos invocando ala libreria de stripe.js
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems:[{price, quantity:1}],
            mode:"subscription",
            successUrl:"http://127.0.0.1:5500/assets/stripe-success.html", /*está url lo accedo desde la carpeta padre */
            cancelUrl:"http://127.0.0.1:5500/assets/stripe-cancel.html"
        })
        .then((res) => {
            console.log(res);
            if (res.error) {
                $tacos.insertAdjacentHTML("afterend",res.error.message); //así está en la documentacion de Stripe
            }
        })
    }
})
```
*** 
siguiete archivos markdow --> html.

###  Ejercicios AJAX - APIs: Blog con Markdown y Showdown.js

    Es una nueva tecnica que están utilizando herramientas y frameworks tipo Hugo como gatsbi como el SSG (serguei) está de modda sobre todo en blogs tecnicos, a blogs de desarrolladores pues que tu tengas una parte de blog y tras bambalinas este archivo sea codigo markdown pues la herramienta te lo compila a html


Este articulo de: https://css-tricks.com/ documenta las diferentes librerias para comvertir archivos markdown a codigo html no solo te da opciones para JS sino tambien para Php, Python https://css-tricks.com/choosing-right-markdown-parser/ 

Ya tienes que tener un archivo `Markdown`

<https://joedicastro.com/pages/markdown.html> 

Necesitamos mandar a llamar la libreria externa: https://showdownjs.com/

- > Podemos descargarlo.
- > podemos usar un Cdn:  https://cdnjs.com/ lo buscamos y copiamos la Url de la version mimificada.

> _Recomendacion: hacer muy bien nuestro markdown par que no tenga errores_ para no depender de grandes herramientas como wordpress, jumla, drupal de esos cmss incluso si ya habian visto gadsvi, hugo, pero si son milimalistas, 

--------> proximo: pokemon, hacer un sistema de paginacion

### Ejercicios AJAX - APIs: Paginación de Pokémons con Fetch (1/2) 

hasta cierto punto es gratuita entonces no vamos a necesitar autenticarnos con en el caso de Estripe.

En este caso vamos a mostrar el nombre, la imagen del pokemon y hacer la Paginacion

> _Importante: vamos a realizar dos peticiones: peticion a la Url principal nos devuelve [nombre de pokemon como su id] entonces hay que invocar otro endpoint para poder extraer las imagenes_

por cada pokemon necesitamos trabajar con peticiones asincronas

¿Por que manda error undefined? por que la api de pokemon, los mensajes de erro dependen de la api que estemos interactuando.

¿Si, es un arreglo por que no utilizas el metodo for each?
por que va ejecutar todo los elementos que tiene el areglo y no se va esperár a que responda la peticion, FOR es una estructura bloqueante, hasta que no termine el flujo de cada una de sus iteraciones no va pasar a la siguiente


```javaScript
    let pokeAPI = "https://pokeapi.co/api/v2/pokemon/"

async function loadPokemons(url) {
    try {
        /*No voy a utilizar la tecnica de lOS templates || template strings = [``] */
        $main.innerHTML = `<img class="loader" src="../assets/ball-triangle.svg" alt="Cargando">`


        //vas a esperar la respuesta que venga de fetch en la Url que te pasaron

        let res = await fetch(url),
            json = await res.json(),

    //¿Por que el signo del dolar? Es una variable que tiene informacion del DOM
            $template="",
    // el link principal de la pagina de pockemons nos devuelve una url para poder interactuar con los enlaces de Siguiente y Atras
    // Hasta cierto punto la api nos da esé soporte
        $prevLink,
        $nextLink;

        //console.log(json);

        if(!res.ok) throw {status: res.status, statusText: res.statusText}


        for (let i = 0; i < json.results.length; i++) {
            //console.log(json.results[i]);
            try {
                let res = await fetch(json.results[i].url),
                    pokemon = await res.json();


                console.log(res, pokemon);
                if(!res.ok) throw {status: res.status, statusText: res.statusText}
                // por cada pokemon vamos a ir creando una etiqueta FIGURE

                $template +=`
                    <figure>
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <figcaption>${pokemon.name}</figcaption>
                    </figure>
                `;
            } catch (err) {
                console.log(err);
                let message = err.statusText || "Ocurrió un error";
                $template +=`
                    <figure>
                        <figcaption>Error ${err.statusText}: ${message}</figcaption>
                    </figure>
                `;
            }
        }
        // remplazamos la etiqueta MAIN por la templete ( que es la que ha creado por cada pokemon una figura)

        $main.innerHTML=$template;

    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $main.innerHTML = `<p>Error ${err.statusText}: ${message}</p>`
    }
}

```


### Ejercicios AJAX - APIs: Paginación de Pokémons con Fetch (2/2) 

 en el video anterior estubimos interactuando con la POKEapi para traernos a los pokemones y recuerda que vamos hacer una paginacion por que la misma respuesta de la api las paginas para poder avanzar hacia la siguiente pagina o hacia la previa.

 voy hacer una tecnica para hacer responsive desing sin media querys ayudandomé de dysplay:grid;

 ```css
 
 ```

 trabajar con el código que nos viene de la respuesta original está en la linea 25. 

 en el **Parametro next**  viene la url hacia los siguientes 20 pokemones.
 en el **Parametro previous** vine la url de los anteriores 20 pockemones.

 entonces debemos formar un enlace por cada uno de esos elementos

 >- _CUAL ES LA DIFERENCIA ENTRE PARAMETRO Y PROPIEDAD? QUE ES ATRIBUTO._

el paso para consultar los siguientes pockemones es programar los enlaces, entonces vamos a utilizar la delegacion de eventos.

Es muy inportante leer y entender como funciona o cuales son las reglas que los creadores de la api que estámos consumiendo nos ofrecen  para poderle sacar el maximo provecho 

```javascript
    const d = document,
    $main = d.querySelector("main"),
    $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/"

async function loadPokemons(url) {
    try {
        /*No voy a utilizar la tecnica de lOS templates || template strings = [``] */
        $main.innerHTML = `<img class="loader" src="../assets/ball-triangle.svg" alt="Cargando">`


        //vas a esperar la respuesta que venga de fetch en la Url que te pasaron

        let res = await fetch(url),
            json = await res.json(),

    //¿Por que el signo del dolar? Es una variable que tiene informacion del DOM
            $template="",
    // el link principal de la pagina de pockemons nos devuelve una url para poder interactuar con los enlaces de Siguiente y Atras
    // Hasta cierto punto la api nos da esé soporte
        $prevLink,
        $nextLink;

        console.log(json);

        if(!res.ok) throw {status: res.status, statusText: res.statusText}


        for (let i = 0; i < json.results.length; i++) {
            //console.log(json.results[i]);
            try {
                let res = await fetch(json.results[i].url),
                    pokemon = await res.json();


                //console.log(res, pokemon);
                if(!res.ok) throw {status: res.status, statusText: res.statusText}
                // por cada pokemon vamos a ir creando una etiqueta FIGURE

                $template +=`
                    <figure>
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <figcaption>${pokemon.name}</figcaption>
                    </figure>
                `;
            } catch (err) {
                console.log(err);
                let message = err.statusText || "Ocurrió un error";
                $template +=`
                    <figure>
                        <figcaption>Error ${err.statusText}: ${message}</figcaption>
                    </figure>
                `;
            }
        }//for

        // remplazamos la etiqueta MAIN por la templete ( que es la que ha creado por cada pokemon una figura)

        $main.innerHTML=$template;

        $prevLink = json.previous ? `<a href= "${json.previous}">⏮️</a>` : "";
        $nextLink = json.next ? `<a href= "${json.next}">⏭️</a>` : "";
        $links.innerHTML= $prevLink + "  " + $nextLink;

    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $main.innerHTML = `<p>Error ${err.statusText}: ${message}</p>`
    }
}

//¿Donde se va ejecutar esta programacion?, pues a la carga del dom


//la asignacion de la funcion asincrona loadPokemons
d.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));


//programacion del evento click delegando la programacion a los enlaces de la clase links
d.addEventListener("click",(e) => {
    if (e.target.matches(".links a")) { // cualquier enlace que esté dentro de la clase Links active está programacion
        e.preventDefault();
        //alert("funciona");
        loadPokemons(e.target.getAttribute("href"));
    }
})
```
vean que hemos trabajado con la API de pockemon con la api de fetch pero con la ayuda de las funciones asincronas porque si lo hubieramos hecho solo con fetch no hubieramos tenido un resultado así

en la siguiente ejercicio vamos a seguir trabajando con apis ahora le toca turno a TVMAZE. vamos hacer un buscador de Shows:

batman

### Ejercicios AJAX - APIs: Buscador de Shows con Fetch y TVMAZE API 

https://www.tvmaze.com/api 

TVMAZE es una pagina donde publican sobre todo shows de televicion en EEUU con toda la informacion de canales, fecha hora etc y TVMACE tiene una API publica que podemos consultar.

Nosotros nos vamos a enfocar en mostrar los shows a partir de una busqueda es decir vamos hacer un buscador dinamico

Vamos a definir todo el codigo html, para el cual vamos a usar un ``input`` de tipo ``search`` la ventaja es que tiene un tachesito para limpiarse ❌

vamos a utilizar la tecnica de hacer una grid responsiva sin mediaquerys.

A diferencia de los pockemones donde estube trabajando con la tecnica de el __innerHTML__ para pegarle al DOM para que pintara los pockemones a pantalla en está ocacion voy a utilizar **la tecnica de los templates** es mas idonea.

No estoy poniendo nombres de clase por que voy a utilizar el selector descendiente para buscar el h3, el div, el img... que esté dentro de la clase show.

Cuando hacemos una busquda lo que hacemos como humanos es escribir y precionar el boton enter.
entonces vamos a reaccionar al evento keypress.

Entonces la programacion del evento lo vamos hacer solamente cuando la pulsacion del keypress sea con el: keycode o la tecla enter


> _Una buena extencion para visibilizar el codigo JSON es la extencion: Json Viewer_

Cuando nosotros le mandamos un qury que no trae resultados no es que no haya mandado un error simplemente me manda un arreglo vacio, es importante conocer todo lo que tu api te pueda mandar por que de eso depende la manipulacion de los elementos

![imagen de el nombre](/assets/api-tvmaze.JPG)

```javascript
const d = document,
    $shows = d.getElementById("shows"),
    $template =  d.getElementById("show-template").content,
    $fragment = d.createDocumentFragment();


    d.addEventListener("keypress", async (e) => {
        if (e.target.matches("#search")) {
            //console.log(e.key, e.keyCode); /*cada que yo preciono cualquiera tecla se va ejecutando una solicitud a la API, podriamos tener problemas de rendimiento */
            if (e.key==="Enter") {
                try {
                    $shows.innerHTML=`<img class="loader" src="../assets/ball-triangle.svg" alt="Cargando...">`;
                    
                    let query = e.target.value.toLowerCase(), /*e.target es el objeto que origina el evento */
                        api = `https://api.tvmaze.com/search/shows?q=${query}`,
                        res = await fetch(api),
                        json = await res.json();
                        
                        console.log(api, res, json);

                        if (!res.ok) throw {status: res.status, statusText: res.statusText}

                        if (json.length === 0) {
                            $shows.innerHTML = `<h2>No existen resultados de shows para el criterio de busqueda: <mark>${query}</mark></h2>`
                        }else{
                            json.forEach((el) => {
                                $template.querySelector("h3").textContent = el.show.name;
                                $template.querySelector("div").innerHTML = el.show.summary?el.show.summary:"Sin descripción" ; /* Viene en formato HTML y ademas usamos un operador ternario ya que no siempre vienen con descripcion */
                                $template.querySelector("img").src = el.show.image? el.show.image.medium:"http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
                                $template.querySelector("img").alt = el.show.name;
                                $template.querySelector("img").style.maxWidth="100%";
                                $template.querySelector("a").href=el.show.url? el.show.url:"#";
                                // su propiedad target del enlace
                                $template.querySelector("a").target=el.show.url? "_blank":"_self";//si tiene url que se abra en otra pagina & para que no se me abra una pagina en blanco uso _self
                                $template.querySelector("a").textContent=el.show.url? "ver más..":"";


                                let $clone = d.importNode($template, true);
                                $fragment.appendChild($clone);
                            });

                            $shows.innerHTML = ""; //limpiamos el louder para que no muestre en el html
                            $shows.appendChild($fragment);
                        }

                } catch (error) {
                    console.log(err);
                    let message = err.statusText || "Ocurrió un error";
                    $shows.innerHTML = `<p>Error ${err.status} : ${message}</p>`
                }
            }
        }
    });
```

Aqui estubimos aprendiendo de posibles errores por que la api puede devolvernos un null, por eso es bien importante validar los datos que esperamos recibir de la api.

Siguiente: Buscador de canciones

### Ejercicios AJAX - APIs: Buscador de Canciones con Fetch + Async

En esta sección interactuaremos con las apis de: [lyricsovh](https://lyricsovh.docs.apiary.io/#) obtiene la letra de las canciones & [theaudiodb.com](https://www.theaudiodb.com/) nos trae la informacion de los cantantes, grupo musical, etc.

no estoy usando la tecnica de los templates, en estos ejercicios de las apis hay diferentes tecnicas para interactuar con el DOM ej: templatestring, innerHTML

Como vamos a consultar dos apis, yo no sé que api me va responder primero  entonces vamos a utilizar funciones asincronas.

Recuerda que para manipular los errores en promesas asincronas una muy buena tecnica es usar los try catch.

para que nuestra maquetacion detecte los saltos de linea, lo debemos hacer con css.

```css
    .song blockquote {
    white-space: pre-wrap;
}
```

>Importante Si la canción va en español poner los **acentos**

>- `interprete: coldplay    canción: paradise` intenta con estó y va funcionar, otros artistas no funcionan

```javaScript
     $form.addEventListener("submit", async(e) => { // todo esto se ejecuta cuando precionas el boton SUBMIT
    // Si nosotros queremos controlar todo con programacion asincron
    e.preventDefault(); // para que no se autoprocese la pagina

    try {
        $loader.style.display= "block"; // accedo a tu lista de estilos a tu propiedad display y cambiamos el display a block
        //guardamos los datos que el usuaario introdujo en los inputs

        let artist = e.target.artist.value.toLowerCase(), // par que sea en minusculas toLowerCase()
            song = e.target.song.value.toLowerCase(),
            $artistTemplate = "",
            $songTemplate = "",
            // para que no sea muy verboso las urls
            artistAPI = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
            // artistAPI =`https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay`,
            songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
            // songAPI =`https://api.lyrics.ovh/v1/coldplay/paradise`,

            
            artistFetch = fetch(artistAPI),
            songFetch = fetch(songAPI),

            //esto es un poco mas avanzado y que librerias como REACT lo utiliza que es la DESTRUCTURACION, espera a alas dos promesas
            [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
            artistData = await artistRes.json(),
            songData = await songRes.json();


            //console.log(artistRes, songRes);
            console.log(artistData, songData);

            if (artistData.artists === null) {
                $artistTemplate = `<h2>No existe el intérprete <mark>${artist}</mark></h2>`
            }else{
                let artist = artistData.artists[0];
                $artistTemplate = `
                    <h2>${artist.strArtist}</h2>
                    <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
                    <p>${artist.intBornYear} - ${(artist.intDiedYear || "Presente")}</p>
                    <p>${artist.strCountry}</p>
                    <p>${artist.strGenre} - ${artist.strStyle}</p>
                    <a href="http://${artist.strWebsite}" target="_blank">Sitio Web</a>
                    <p>${artist.strBiographyEN}</p>
                `;
            }

            if (songData.error) {
                $songTemplate = `<h2>No existe la canción <mark>${song}</mark></h2>`;
            }else{
                $songTemplate= `
                    <h2>${song.toUpperCase()}</h2>
                    <blockquote>${songData.lyrics}</blockquote>
                `;
            }


            //ocultan el Louder  y pegan la información correspondiente a la sección de artistas y a la sección de canciones
            $loader.style.display = "none";
            $artist.innerHTML = $artistTemplate;
            $song.innerHTML = $songTemplate;

    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $error.innerHTML =  `<p>Error ${err.statusText}: ${message}</p>`
        $loader.style.display= "none";
    }

 })
```

Siguiente: Selects Anidados es muy necesario en Formularios que tienen que ver con direcciones, esto se está solicitando a una api, pero tambien podria venir de una base de datos.

### Ejercicios AJAX - APIs: Selects Anidados con Fetch

Vamos a utilizar la tecnica de Fetch con funciones a sincronas. usamos la pagina: `https://api-sepomex.hckdrk.me/`

Si, tuvieran un 3er selects digamos para las zonas: la lógica seria: asiciar otro evento CHANGE  al select Secudario, crear otra funcion llamda loadZones y usar la ruta de la api "obtener colonia por municipio"

>- https://api.copomex.com/query/get_estados?token=pruebas

>- https://api.copomex.com/query/get_municipio_por_estado/1jFI4c?token=pruebas

>- https://api.copomex.com/query/get_colonia_por_municipio/Xochimilco?token=pruebas

```javaScript
    const d = document, 
    $selectPrimary = d.getElementById("select-primary"), //sugerencia de nombre selectState, selectTowns,
    $selectSecondary = d.getElementById("select-secondary");
    $selectThird = d.getElementById("select-third");



function loadStates() { /* Esta funcion se debe ejecutar a la carga del documento*/
 fetch("https://api.copomex.com/query/get_estados?token=pruebas")
 .then(res => res.ok?res.json(): Promise.reject(res))
 .then(json =>{
    console.log(json);
    //voy a usar la tecnica del innerHtml
    let $options = `<option value="">Elije un estado</option>`; //para que la primera opcion sea un texto simple
        json.response.estado.forEach((el) => {
            // por cada estado le concatenamos una estructura de un option
            $options += `<option value = "${el}">${el}</option>`
        });
        $selectPrimary.innerHTML = $options;
 })
 .catch(err =>{
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    // ¿Como llego a los los parrafos "P"?... pues son los hermanos siguientes de la etiqueta select
    $selectPrimary.nextElementSibling.innerHTML = `Error ${err.statusText}:${message}` 
 })
}


function loadTowns(state) {
    fetch(`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`)
    .then(res => res.ok?res.json(): Promise.reject(res)) // si la respuesta es correcta, la parseamos a JSON si no rechazamos al promesa
    .then(json =>{
        console.log(json);
        let $options = `<option value="">Elije un Municipio</option>`; 
            json.response.municipios.forEach((el) => {
                $options += `<option value = "${el}">${el}</option>`
            });
            $selectSecondary.innerHTML = $options;
     })
    .catch(err =>{
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        // ¿Como llego a los los parrafos "P"?... pues son los hermanos siguientes de la etiqueta select
        $selectSecondary.nextElementSibling.innerHTML = `Error ${err.statusText}:${message}` 
     })
}

function loadSuburbs(suburb) {
    fetch(`https://api.copomex.com/query/get_colonia_por_municipio/${suburb}?token=pruebas`)
    .then(res => res.ok?res.json(): Promise.reject(res)) // si la respuesta es correcta, la parseamos a JSON si no rechazamos al promesa
    .then(json =>{
        console.log(json);
        let $options = `<option value="">Elije una colonia-zona</option>`; 
            json.response.colonia.forEach((el) => {
                $options += `<option value = "${el}">${el}</option>`
            });
            $selectThird.innerHTML = $options;
     })
    .catch(err =>{
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        // ¿Como llego a los los parrafos "P"?... pues son los hermanos siguientes de la etiqueta select
        $selectThird.nextElementSibling.innerHTML = `Error ${err.statusText}:${message}` 
     })
}


// a la carga del documento carga la funcion "loadStates"
d.addEventListener("DOMContentLoaded", loadStates);

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));

//Creamos un evento de tipo CHANGE que ahora detecte el cambio del select secundario

$selectSecondary.addEventListener("change", (e) => loadSuburbs(e.target.value));
```

Siguiente: vamos a usar la API de WORDPRESS te voy a enseñar como hacer un front totalmente diferente del que te ofrese Wordpress accediendo a la informacion de un sitio mediante la API de wordpres `rest-api` 

static site rendering/generators como: gadsby, hugo,  o como nextjs vuepres, empesar a convertir la informacion que tengas en un sitio Wordpress  con static site generators lo que hace es acelerar el tiempo de carga de tus sitios


###  WordPress REST API y Fetch (1 / 5)

https://developer.wordpress.org/rest-api/ está es la documentacion

Tú subiendo la informacion a un sitio de wordpress tu puedes crear un frondend absolutamente con las caracteristicas que necesites muy al estilo de los generadores de sitios estáticos gadsby() [sergey](https://sergey.cool/), [hugo](https://gohugo.io/) consumiendo la data de un sitio hecho en wordpress

> **Importante!** hay wordpress.com = ellos te ofrecen todo y wordpress.org es software libre que descargamos los desarrolladores.

__the loop__ es la funcion que tiene wordpress para traernos la informacion de cada uno de las entradas (páginas) de tu sitio, entonces es muy importante entender que es lo que nos ofrece este Loop por que es a eso mismo que nosotros podemos acceder, todo lo que podamos incertar, modificar, eliminar, es decir todo el crud que podemos hacer desde la interfaz de wordpress tambien lo podemos acceder desde la API de wordPress

> para consumir la informacion no necesitas de credenciales, eso va depender de la seguridad que tu le implementes a tu wordPress y si permites peticiones de tipo REST.

para este ejercicio, vamos hacer un front basandonos en la informacion de un sitio en wordPress es decir solo vamos a consumir la informacion mediante el metodo GET no vamos hacer peticiones como para incertar una nueva entrada, un nuevo usuario, pero te comento que revisando bien los permisos a tu wordPress tambien tu puedes crear practicamente, interactuar con esta API de tipo REST y tambien podrias publicar una entrada modificar las categorias autenticarte en tu cuenta de usario es decir acceder a los demas verbos adicionales al metodo GET. tambien puedes hacer las peticiones del INSERT UPDATE, Y DELETE, para esa parte si te van a pedir tu llave tu credencial.

la función de **the loop** tiene la caracteristica de traernos la informacion de cada una de las entradas o páginas de nuestro blog

>- nombre del artículo.

>- Autor

>- Avatar del Autor

>- estracto o dexert (los primeros textos que te dan la introduccion)

páginas hechas con wordpres:  https://css-tricks.com/  https://www.whitehouse.gov/ 

Si ustedes conocen un sitio que esté hecho en wordpress y lo visitán o por que es un blog que siguen ustedes podrian consumir la información de ese sitio y saber si la API de wordpress que por defecto al menos para consumir la información  está abierta entonces no necesariamente ustedes tendrian que utilizar el sitio que yo voy a implementar o si en su maquina tiene un sitio hecho en wordpress tambien podrian consumir la informacion, la diferencia es que en lugar de poner el dominio eje malvestida.com van a poner  localhost//c/etc... no necesito tener xammp activado. lo voy a correr desde liveServer. por que el sitio que voy a consumir es el de malvestida.com

hay un error de favicon cada vez que levantas un Live Server si no tienes el favicon te detecta.

**NAMESPACES**

> los namespaces va ir variando de los plugins que tenga instalado su sitio. por que hay ciertos plugins que tienen cierta documentacion y cierto soporte para que nosotros lo podamos consumir la informacion que genere el plugin en la api de tipo rest.

**contact-form-7** este plugin sirve para hacer formularios en wordpress
**oembed** enbebe cualquier elemento que no es texto eje: fit de twiter un post de instagram un video de youtube un mapa de google
**yoast** este plugin sirve para hacer CEO 

**/v2** y este prefijo que va despues del plugin es para interactuar con la documentacion es la v2 de tipo rest

**ROUTES**

Las rutas son todos esos endpoints a los que yo puedo acceder a travez de la api de WordPress, pueden ser más a los que muestra la documentacion de el consumo de api de wordPress

una busqueda por logica lo vas hacer por el metodo GET

para consumir la api debes ponerlo de esta manera: [**WP-JSON**](https://developer.wordpress.org/rest-api/key-concepts/)

```javascript
    fetch("https://malvestida.com/wp-json/posts") /*te va traer independientemente si está publicado o todavia*/
    /*
        con esta ruta recibimos una respuesta JSON que muestra qué rutas están disponibles y qué puntos 
        finales están disponibles dentro de cada ruta.
    */
```

¿Como puedo acceder a los ultimos post que tiene este sitio?
