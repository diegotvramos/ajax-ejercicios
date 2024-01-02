
document.addEventListener("DOMContentLoaded",(e)=>{
    const includeHTML=(el, url)=>{
        const xhr= new XMLHttpRequest();
        xhr.addEventListener("readystatechange", (e)=>{
            if (xhr.readyState!==4)return;

            if (xhr.status >= 200&&xhr.status<300) {
                el.outerHTML= xhr.responseText;
            }else{
                let message=xhr.statusText|| "Ocurrio un error al cargar el archivo, verifica que  estes haciendo peticion por http o https";
                el.outerHTML=(`<div><p>Error ${xhr.status}: ${message}<p/></div>`);
            }
        });

        xhr.open("GET", url);

        xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");

        xhr.send();
    }

    /*traeme todo los selectores que tengan el atributo data-include */
    document
        .querySelectorAll("[data-include]")
        .forEach((el) => {
            includeHTML(el, el.getAttribute("data-include"))
        });
});