
//definimos variables
const d = document,
    w = window,
    $site = d.getElementById("site"),
    $posts = d.getElementById("posts"),
    $loader = d.querySelector(".loader"),
    $template = d.getElementById("post-template").content, //lo que nos interesa es su contenido
    $fragment = d.createDocumentFragment(),
    //Estas constantes van a ir en mayusculas por que durante el flujo de nuestro ejercicio no van a cambiar
    // DOMAIN =  "https://malvestida.com/",
    DOMAIN =  "https://www.redbolivision.tv.bo/",
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`, //en esta ruta ya tenemos acceso a la información nativa de la api de todo sitio hecho en wordpress 
    // me creo una constante por cada endpoints al que yo quisiera consultar eje. un endpoint para las páginas un endpoit para las categorias, etc.
    //hacen referencia a la tablita de los endpoints
    POSTS= `${API_WP}/posts?_embed`, /*&per_page=5&page=10*/
    PAGES= `${API_WP}/pages`,
    CATEGORIES= `${API_WP}/categories`;

    let page = 1,
        perPage = 10; //quiero que me cargue por página 5 post




function getSiteData() {
    fetch(SITE)
    .then(res=> res.ok? res.json():Promise.reject(res))
    .then(json=>{
        console.log(json);
        $site.innerHTML=`
        <h3>Sitio Web</h3>
        <h2>
            <a href="${json.url}" target="_blank">${json.name}</a>
        </h2
        <p>${json.description}</p>
        <p>${json.timezone_string}</p>
        `
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText||"Ocurrio un Error";
        $site.innerHTML = `<p>Error ${err.statusText}: ${message}</p>`
    });
}

function getPost() {

    $loader.style.display="block";

    fetch(`${POSTS}&page=${page}&per_page=${perPage}`)
    .then(res=> res.ok? res.json():Promise.reject(res))
    .then(json=>{
        console.log(json);
        json.forEach((el) => {

            let categories="",
                tags="";

            el._embedded["wp:term"][0].forEach(el=>categories+=`<li>${el.name}</li>`);
            el._embedded["wp:term"][1].forEach(el=>tags+=`<li>${el.name}</li>`); // El nombre de estas etiquetas se encuentra en varior areglos es por eso que lo recorremos con un ForEach

            $template.querySelector(".post-image").src=el._embedded["wp:featuredmedia"]?el._embedded
            ["wp:featuredmedia"][0].source_url:""; /*lo ponesmos entre corchetes para que no de error los dos puntos */
            $template.querySelector(".post-image").alt=el.title.rendered;
            $template.querySelector(".post-title").innerHTML=el.title.rendered;
            $template.querySelector(".post-author").innerHTML= `
                <figcaption> AUTOR: ${el.yoast_head_json.author}</figcaption>
            `; 
            //vamos a buscar la ruta de la imagen como el nombre del autor, || autor posicion 0
            //el parámetro de el avatar del autor ya no están disponibles
            //<img src="${el._embedded.author[0].avatar_urls["48"]}" alt="${el._embedded.author[0].name}"> 
            //<a href="${DOMAIN}/author/${el.yoast_head_json.og_site_name}">${el.yoast_head_json.author}</a>
            $template.querySelector(".post-date").innerHTML=new Date(el.date).toLocaleString();
            $template.querySelector(".post-link").href=el.link; /*debes tener buen ojo es solo link no está dentro de otro atributo. */
            $template.querySelector(".post-excerpt").innerHTML=el.excerpt.rendered.replace("[&hellip;]", "..."); /*El estracto siempre viene con los puntos suspensivos [...] */
            $template.querySelector(".post-categories").innerHTML= `
                <p>Categorías: </p>
                <ul>${categories}</ul>
            `;
            $template.querySelector(".post-tags").innerHTML= `
                <p>Etiquetas </p>
                <ul>${tags}</ul>
            `;
            $template.querySelector(".post-content > article").innerHTML=el.content.rendered;


            let $clone= d.importNode($template, true);
            $fragment.appendChild($clone);
        });
        $posts.appendChild($fragment);
        $loader.style.display="none";

    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText||"Ocurrio un Error";
        $posts.innerHTML = `<p>Error ${err.statusText}: ${message}</p>`;
        $loader.style.display="none"; /*si hay un mensaje de error nosotros vamos a ocultar el loader */
    });
}

// ambas funciones se van a ejecutar a la carga del documento
d.addEventListener("DOMContentLoaded", (e) => {
    getSiteData();
    getPost();
});

//asigno al evento window el evento del ""scorll""
//Voy hacer una destructuración de un elemento en particular
// Un scroll infinito radica en detectar que llegues al final de la página comprararlo
// contra la posicion que lleva tu barra de desplazamiento entonces en ese momento hacer la peticion
// y cargar más elementos, entonces debo obtener 3 propiedades. que cuelgan de la etiqueta html
//Recuerda. La etiqueta HTML  en el DOM DE js es: document.documentElement
w.addEventListener("scroll",(e)=>{
    /*¿Que me va interesar obtener de la etiqueta html? su propiedad scrollTop 
    Podria aver hecho esto: 
         const scrollTop = d.documentElement.scrollTop; PEero uso la destructuracion.
    */

    const {scrollTop, clientHeight, scrollHeight}= d.documentElement;
    // console.log(scrollTop, clientHeight, scrollHeight);
    /*
        primer valor (cuanto me he alejado de la margen top la bara de desplazamiento)
        la segunda variable clientHeight(significa cual es la altura del view port del navegador, la algura de la ventana visible)
        la propiedad scrollHeight(me calcula el total que tengo de scroll es un número fijo)
    */
    if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Cargar más posts");
        // yo tendria que invocar la funcion:
        // pero antes debemos devemos incrementar.
        page ++;
        getPost(); // me vuelve a cargar los mismos 10 posts
    }
});









//hay muchas rutas(end Points) hacia la API de wordPress
// fetch("https://www.redbolivision.tv.bo/")
//fetch("https://malvestida.com/wp-json/wp/v2/posts")
//fetch("https://futbolmaniabolivia.com/")



















