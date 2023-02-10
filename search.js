
const tarjetas = data.events
const buscador = document.querySelector("#buscador")
const seccionDeTarjetas2 = document.getElementById("seccionTarjetas")
const boton = document.querySelector("#boton")



const filtrado = () => {
    seccionDeTarjetas2.innerHTML = ' '
    const texto = buscador.value.toLowerCase();

    for(let tarjeta of tarjetas){
        let evento = tarjeta.name.toLowerCase();
            if(evento.indexOf(texto) !== -1){
                seccionDeTarjetas2.innerHTML +=
                ` <div id="tarjetas">
                    <div class="card" id="card">
                        <img src=${tarjeta.image} class="card-img-top" alt="..." id="cardimg">
                        <div class="card-body">
                        <h5 class="card-title text-center">${tarjeta.name}</h5>
                        <p class="card-text">The only concert of the most emblematic band in the world.</p>
                    </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Date:${tarjeta.date}</li>
                        <li class="list-group-item">Category:${tarjeta.category}</li>
                        </ul>
                    <div class="card-body d-flex">
                        <h4 id="detailsboton" class="card-link">Price:$ ${tarjeta.price}</h4>
                        <a id="detailsboton" href="./details.html" class="card-link">Details</a>
                    </div>
                </div>`
            }

    }
    if(seccionDeTarjetas2.innerHTML === ' '){
        seccionDeTarjetas2.innerHTML += `<h1>Event not found...</h1> `
    }
}

buscador.addEventListener("keyup", filtrado);



    