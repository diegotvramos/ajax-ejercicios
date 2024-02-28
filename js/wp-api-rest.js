
//definimos variables
const d = document,
    $site = d.getElementById("site"),
    $posts = d.getElementById("posts"),
    $loader = d.querySelector(".loader"),
    $template = d.getElementById("post-template").content, //lo que nos interesa es su contenido
    $fragment = d.createDocumentFragment(),
    //Estas constantes van a ir en mayusculas por que durante el flujo de nuestro ejercicio no van a cambiar
    DOMAIN =  "https://malvestida.com/",
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`, //en esta ruta ya tenemos acceso a la información nativa de la api de todo sitio hecho en wordpress 
    // me creo una constante por cada endpoints al que yo quisiera consultar eje. un endpoint para las páginas un endpoit para las categorias, etc.
    //hacen referencia a la tablita de los endpoints
    POSTS= `${API_WP}/posts?_embed`,
    PAGES= `${API_WP}/pages`,
    CATEGORIES= `${API_WP}/categories`;




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

    fetch(POSTS)
    .then(res=> res.ok? res.json():Promise.reject(res))
    .then(json=>{
        console.log(json);
        json.forEach((el) => {
            $template.querySelector(".post-image").src=el._embedded["wp:featuredmedia"][0].source_url; /*lo ponesmos entre corchetes para que no de error los dos puntos */
            $template.querySelector(".post-image").alt=el.title.rendered;
            $template.querySelector(".post-title").innerHTML=el.title.rendered;


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
})









//hay muchas rutas(end Points) hacia la API de wordPress
// fetch("https://www.redbolivision.tv.bo/")
//fetch("https://malvestida.com/wp-json/wp/v2/posts")
//fetch("https://futbolmaniabolivia.com/")



















