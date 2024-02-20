




//hay muchas rutas(end Points) hacia la API de wordPress
// fetch("https://vizaproducciones.com/wp-json")
//fetch("https://malvestida.com/wp-json/wp/v2/posts")
//fetch("https://malvestida.com/wp-json/wp/v2/categories")
fetch("https://malvestida.com/wp-json/wp/v2/pages")
.then(res =>res.ok? res.json():Promise.reject(res))
.then(json => {
    console.log(json);
})
























