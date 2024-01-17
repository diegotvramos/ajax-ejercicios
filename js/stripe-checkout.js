

import STRIPE_KEYS from "./stripe-keys.js";

console.log(STRIPE_KEYS);

const d = document,
    // nos creamos una variable del DOM  que haga referencia al elemento donde vamos a ir guardando nuestros productos
        $tacos=d.getElementById("tacos"),
    // necesitamos una variable para el template
        $template= d.getElementById("taco-template").content,
        $fragment= d.createDocumentFragment();

// de nuestra api primero vamos a acceder a nuestros productos. vas a obtener todo tus productos que estén en tu dashboard
// por eso te va pedir tus credenciales de autenticacion

fetch("https://api.stripe.com/v1/products",{
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`, //así está establecido en la documentacion de Stripe.
    }
}).then((res)=>{
    console.log(res);
    return res.json()
}).then(json=> {
    console.log(json);
})

/*PARA LOS PRECIOS */

fetch("https://api.stripe.com/v1/prices",{
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    }
}).then((res)=>{
    console.log(res);
    return res.json()
}).then(json=> {
    console.log(json);
})