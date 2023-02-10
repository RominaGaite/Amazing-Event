
 const eventosD =  data.events

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const tarjeta = eventosD.find(tarjetas => tarjetas._id === id)


const verTarjeta = document.getElementById("details")
verTarjeta.innerHTML = 
`<div id="contdetails">
    <div>
        <img id="imgdetails" src=${tarjeta.image}/>
    </div>
    <div id="txtdetails">
    <div class="card-body">
        <h5 class="card-title text-center p-3">${tarjeta.name}</h5>
        <p class="card-text p-4">${tarjeta.description}</p>
    </div>
    </div>
</div>`

console.log(tarjeta)
