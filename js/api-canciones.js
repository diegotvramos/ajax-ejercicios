

const d = document,
    $form = d.getElementById("song-search"),
    $loader = d.querySelector(".loader"),
    $error = d.querySelector(".error"),
    $main = d.querySelector("main"),
    $artist = d.querySelector(".artist"),
    $song = d.querySelector(".song"); /*¿por que el simbolo del dolar $? es que hace referencia a un elemento del DOM */
    

/*Toda la programacion va surgir en el boton submit del formulario */
 //  solo vamos a tener este evento del fomulario, ele evento se la pegamos directamente al formulario, está vez no voy a utilizar la delegacion de eventos
 
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





















