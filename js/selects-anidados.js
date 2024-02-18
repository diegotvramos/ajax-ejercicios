


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























