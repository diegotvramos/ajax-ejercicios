//resolviendo con XMLHttprequest


const d= document,
        $main= d.querySelector("main")

const getHTML= (options)=>{
    //mediante la destructuracion de objetos
    let {url, success, error}= options;

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange",(e)=>{

    if (xhr.readyState!==4)return;

    if (xhr.status >= 200&&xhr.status<300) {
        let html = xhr.responseText;
        success(html);
    }else{
        let message=xhr.statusText|| "Ocurrio un error";
        error(`Error ${xhr.status}: ${message}`);
    }
});

xhr.open("GET", url);
xhr.setRequestHeader("Content-type", "text/html; charset=utf-8")
// como estamos solo solicitando codigo html que viene en la variable url
xhr.send();
}

d.addEventListener("DOMContentLoaded", (e)=>{
    getHTML({
        url:"assets/home.html", /*¿/? */
        success:(html)=>$main.innerHTML=html,
        error:(err)=>$main.innerHTML= `<h1>${err}</h1>`
    });
});

d.addEventListener("click",(e)=>{
    if (e.target.matches(".menu a")) {
        //preveninos la accion por defecto.
        e.preventDefault();

        getHTML({
            //url:"assets/home.html",
            url:e.target.href,
            success:(html)=>$main.innerHTML=html,
            error:(err)=>$main.innerHTML= `<h1>${err}</h1>`
        });
    }
})