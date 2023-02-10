const datos = data.events;
const seccionDeTarjetas4 = document.getElementById("seccionTarjetas");
const opciones = document.getElementById("checkboxItems");
const categorias = Array.from(new Set(datos.map((evento) => evento.category)));


for (let categoria of categorias){
    opciones.innerHTML += 
    `<div id="checkboxItems" class="form-check p-1">
          <input class="form-check-input m-1 p-1" type="checkbox" value=${categoria} id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
          ${categoria}
          </label>
        </div>`
}
opciones.addEventListener("change", (e)=>{
    const opcionElegida = e.target.value
   console.log(opcionElegida)
   })


/*seccionDeTarjetas4.innerHTML +=
                ` <div id="tarjetas">
                    <div class="card" id="card">
                        <img src=${opcion.image} class="card-img-top" alt="..." id="cardimg">
                        <div class="card-body">
                        <h5 class="card-title text-center">${opcion.name}</h5>
                        <p class="card-text">The only concert of the most emblematic band in the world.</p>
                    </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Date:${opcion.date}</li>
                        <li class="list-group-item">Category:${opcion.category}</li>
                        </ul>
                    <div class="card-body d-flex">
                        <h4 id="detailsboton" class="card-link">Price:$ ${opcion.price}</h4>
                        <a id="detailsboton" href="./details.html" class="card-link">Details</a>
                    </div>
                </div>`
            }
        }

*/