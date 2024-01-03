


const d = document,
        $main=d.querySelector("main"),
        $files=d.getElementById("files");


const uploader = (file) =>{
    //console.log(file);
    const xhr= new XMLHttpRequest(),
            formData= new FormData();

    formData.append("file", file);

    xhr.addEventListener("readystatechange", (e)=>{
        if (xhr.readyState!==4)return;

        if (xhr.status >= 200 && xhr.status<300) {

            let json = JSON.parse(xhr.responseText);

            console.log(json);
            //console.log(xhr.responseText);
        }else{
            let message=xhr.statusText|| "Ocurrio un error al cargar el archivo";
            console.error(`Error: ${xhr.status}: ${message}`);
        }
    });

    xhr.open("POST", "assets/uploader.php"); // como es una imagen enviamos por metodo post

    // como estamos subiendo archivos binarios araves del formulario debemos de mandar una cabecera

    xhr.setRequestHeader("enc-type", "multipart/form-data");

    xhr.send(formData);
}

d.addEventListener("change", (e)=>{
    // si el objeto que origina el evento...
    if (e.target===$files) {
        //console.log(e.target.files);
        //por cada file que traiga vamos a ejecutar la funcion Uploader

        // forEach es un metodo para elementos iterables enumerables
        // ¿Que podemos hacer? vamos a ejecutar el metodo from del objeto array
        // lo que hace el metodo From es utilizar los metodos como map, reviws foreach
        // otra opcion es hacerlo con un simple FOR.

        const files= Array.from(e.target.files);
        files.forEach((el) => {
            uploader(el);
        });
    }
})