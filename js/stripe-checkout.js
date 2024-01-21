

import STRIPE_KEYS from "./stripe-keys.js";

console.log(STRIPE_KEYS);

const d = document,
    // nos creamos una variable del DOM  que haga referencia al elemento donde vamos a ir guardando nuestros productos
        $tacos=d.getElementById("tacos"),
    // necesitamos una variable para el template
        $template= d.getElementById("taco-template").content,
        $fragment= d.createDocumentFragment(),
// de nuestra api primero vamos a acceder a nuestros productos. vas a obtener todo tus productos que estén en tu dashboard
// por eso te va pedir tus credenciales de autenticacion
        fetchOptios ={
            headers:{
                Authorization: `Bearer ${STRIPE_KEYS.secret}`,
            },
        };
let products, prices;

/*formateamos la moneda */

const moneyFormat = (num) => `$${num.slice(0,-2)}.${num.slice(-2)}` // traeme los 2 ultimos valores

/*
    Promis all, va esperar a que le responda cada uno de los endPoints y cuando le responda ejecutamos un metodo Then
*/

// es una de las ventajas de utilizar Promise All que en el orden que nosotros hayamos definido estas invocaciones sin
//importar que respondan a distintos tiempos va respetar el orden de invocacion
Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptios),
    fetch("https://api.stripe.com/v1/prices",fetchOptios)
])//por cada una de las respuestas voy a crear un nuevo arreglo, entonces voy a usar el metodo MAP de los arregloslo que voy hacer
//esque por cada respuesta individual lo voy agregando al Responses glogal.

.then((responses)=> Promise.all(responses.map((res)=>res.json())))
.then((json)=>{
    console.log(json);
    //lo que nos interesa está dentro del parametro DATA
    products = json[0].data;
    prices = json[1].data;

    console.log(products, prices);

    //del arreglo productos vamos a obtener la imagen y el nombre del producto 
    // y de los precios extraemos la informacion

    prices.forEach((el) => {// lo comparamos contra el forEach de los precios
        let productData = products.filter((product) => product.id   === el.product);
        console.log(productData);

        $template.querySelector(".taco").setAttribute("data-price",el.id);
        $template.querySelector("img").src = productData[0].images[0];
        //siguiente atributo a configurar, en el atributo ALT vamos a pegar el nombre del producto
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
            ${productData[0].name}
            <br>
            ${moneyFormat(el.unit_amount_decimal)} ${el.currency} 
        `  
        //me el forEach me recuerda al PHP.
        


        // como es un nodo del DOM le colocamos el signo del dolar
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone); // para no estar inyectando directamente al DOM
    });

    $tacos.appendChild($fragment);

})
.catch((err)=>{
    console.log(err);
    let message = err.statusText || "Ocurrio un error al conectarse con la api de Stripe."
    $tacos.innerHTML = `<p>Error ${err.statusText}: ${message}</p>` 
})


d.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.matches(".taco *")) { /*a todo los elementos internos de la clase "Taco" */
        // alert("A comprar");
        let price = e.target.parentElement.getAttribute("data-price");
        // console.log(price);
        // En el html ya estamos invocando ala libreria de stripe.js
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems:[{price, quantity:1}],
            mode:"subscription",
            successUrl:"http://127.0.0.1:5500/assets/stripe-success.html", /*está url lo accedo desde la carpeta padre */
            cancelUrl:"http://127.0.0.1:5500/assets/stripe-cancel.html"
        })
        .then((res) => {
            console.log(res);
            if (res.error) {
                $tacos.insertAdjacentHTML("afterend",res.error.message); //así está en la documentacion de Stripe
            }
        })


    }
})





// fetch("https://api.stripe.com/v1/products",{
//     headers:{
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`, //así está establecido en la documentacion de Stripe.
//     }
// }).then((res)=>{
//     console.log(res);
//     return res.json()
// }).then(json=> {
//     console.log(json);
// })

// /*PARA LOS PRECIOS */

// fetch("https://api.stripe.com/v1/prices",{
//     headers:{
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`,
//     }
// }).then((res)=>{
//     console.log(res);
//     return res.json()
// }).then(json=> {
//     console.log(json);
// })