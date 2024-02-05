


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




















