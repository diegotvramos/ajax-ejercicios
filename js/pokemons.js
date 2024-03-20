const d = document,
    $main = d.querySelector("main"),
    $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/"

async function loadPokemons(url) {
    try {
        /*No voy a utilizar la tecnica de lOS templates || template strings = [``] */
        $main.innerHTML = `<img class="loader" src="../assets/ball-triangle.svg" alt="triangle cargando">`


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