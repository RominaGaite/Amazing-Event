let seccionDeTarjetas = document.getElementById("seccionTarjetas");
let eventos = data.events;

for (let tarjetas of eventos) {
    if (tarjetas.date < data.currentDate) {
    seccionDeTarjetas.innerHTML += `<div id="tarjetas">
    <div class="card" id="card">
        <img src=${tarjetas.image} class="card-img-top" alt="..." id="cardimg">
        <div class="card-body">
        <h5 class="card-title text-center">${tarjetas.name}</h5>
        <p class="card-text">${tarjetas.description}.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Date:${tarjetas.date}</li>
        <li class="list-group-item">Category:${tarjetas.category}</li>
    </ul>
    <div  class="card-body d-flex">
        <h4 id="detailsboton" class="card-link">Price:$ ${tarjetas.price}</h4>
        <a id="detailsboton" href="./details.html?id=${tarjetas._id}" class="card-link">Details</a>
    </div>
</div>  `
    
    }
}
console.log(tarjetas)