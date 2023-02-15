//tarjetas
export function crearTarjetas(e) {
    return `<div class="card m-2" style="width: 16rem; height: 18rem;">
    <img src=${e.image} class="card-img-top mt-2" alt="food">
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 id="card-title">${e.name}</h5>
        <a href="./details.html?id=${e._id}&name=${e.name}" class="details">DETAILS</a>
      </div>
    </div>
  </div>`
  }
export  function mostrarTarjetas(list, element) {
  if(!list) return
    let template = " "
    for (let eventData of list) {
      template += crearTarjetas(eventData)
    }
    element.innerHTML = template
  }
export function tarjetasPast (list, element, fecha) {
    let template = " "
    for (let eventData of list) {
      if(fecha < eventData.date){
        template += crearTarjetas(eventData)
      }
      }
      element.innerHTML = template
  } 

  export function mostrarTarjetasUpcoming(list, element, fecha) {
    let template = " "
     for (let eventData of list) {
      if(fecha > eventData.date){
        template += crearTarjetas(eventData)
      }
      }
      element.innerHTML = template
    }
  export function tarjetaDetalles(list, element) {
      element.innerHTML =
  
     `<div class="card-img " style="max-width: 30rem; height: 25rem;">
    <img id="img-details" src="${list.image}" class="card-img-top" " alt="..">
    </div>
    <div id="body-card-detail" class="card-body  d-flex flex-column justify-content-center text-center m-5" style="max-width: 30rem; height: 25rem;">
    <h5  class="card-title fs-3">${list.name}</h5>
    <p  class="card-text fs-4">${list.description}</p>
    <p  class="card-text fs-4">Price: $ ${list.price}</p>
    <p  class="card-text fs-4">Place: ${list.place}</p>
    <p  class="card-text fs-4">Capacity: ${list.capacity}</p>
    <p  class="card-text fs-4">Date: ${list.date}</p>
    </div> `
  
  }
//categorias, check y buscador

export  function createChecks(checks) {
    return `<div id="checKboxs"class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="${checks}" value="${checks}">
  <label class="form-check-label" for="${checks}">${checks}</label>
  </div>`
  }
  
export  function mostrarchecks(categories, checks) {
    let template = " "
    for (let e of categories) {
      template += createChecks(e)
    }
    checks.innerHTML += template
  }

export  function checkCategoria(category) {
    const checked = [...document.querySelectorAll("input[type='checkbox']:checked")].map((check) => check.value)
    if (checked.length === 0) {
       return category
    }else {
      return category.filter((checkFilter) => checked.includes(checkFilter.category))
    }
    
  }

 export function filtroBuscador(eventos, input) {
  
  let text = input.toLowerCase()
  
  let filtered = eventos.filter(filter => filter.name.toLowerCase().includes(text))
  return filtered
  }

//respuesta a eventos

export  function mensajeError(list, element) {
  console.log(list)
    if (list.length === 0) {

      element.innerHTML = `<p class="fs-2 text-danger">Event's not found</p>`
    } else {
      return mostrarTarjetas(list, element)
    }
  }

//funciones tabla///////////////////////////////
//1)filtrar past y upcoming
export function filterPastEvents(events, date) {
  let pastEvents = [];
  for (let event of events) {
    if (date > event.date) {
      pastEvents.push(event);
    }
  }
  return pastEvents;
}

export function filterUpcommingEvents(events, date) {
  let upComingEvents = [];
  for (let event of events) {
    if (date < event.date) {
      upComingEvents.push(event);
    }
  }
  return upComingEvents;
}

//asistencia Estimada
export function asistOrEstimate(contain) {
  let see = "";
  let assistance = "<b>Assistance:</b>";
  let estimate = "<b>Estimate:</b>";
  if (contain.assistance) {
    see = assistance + " " + contain.assistance;
  } else if (contain.estimate) {
    see = estimate + " " + contain.estimate;
  }
  return see;
}


export function highestAttendance(events) {
  let highestPercentage = 0;
  let highestEvent;
  for (let event of events) {
    let percentageOfAttendance = (event.assistance * 100) / event.capacity;
    if (highestPercentage === 0 || percentageOfAttendance > highestPercentage) {
      highestPercentage = percentageOfAttendance;
      highestEvent = event;
    }
  }
  return highestEvent;
}
//2
export function lowestAttendance(events) {
  let lowest = 0;
  let lowestEvent;
  for (let event of events) {
    let percentageOfAttendance = (event.assistance * 100) / event.capacity;
    if (lowest === 0 || percentageOfAttendance < lowest) {
      lowest = percentageOfAttendance;
      lowestEvent = event;
    }
  }
  return lowestEvent;
}

export function largedCapacity(events) {
  let larger = 0;
  let largerCapacity;
  for (let event of events) {
    if (larger === 0 || event.capacity > larger) {
      larger = event.capacity;
      largerCapacity = event;
    }
  }
  return largerCapacity;
}

export function upcomingStatistics(events) {
  let upcomingStatistics = [];
  let upcomingCategories = Array.from(
    new Set(events.map((event) => event.category))
  );

  let upcomingRevenues = [];
  for (let category of upcomingCategories) {
    let content = 0;
    for (let event of events) {
      if (event.category === category) {
        content += event.estimate * event.price;
      }
    }
    upcomingRevenues.push(content);
  }

  let upcomingAttendance = [];
  for (let category of upcomingCategories) {
    let estimateAttendance = 0;
    let capacity = 0;
    for (let event of events) {
      if (event.category === category) {
        estimateAttendance += event.estimate;
        capacity += event.capacity;
      }
    }
    upcomingAttendance.push((estimateAttendance * 100) / capacity);
  }

  upcomingStatistics.push(
    upcomingCategories,
    upcomingRevenues,
    upcomingAttendance
  );
  return upcomingStatistics;
}

export function pastStatistics(events) {
  let pastStatistics = [];
  let pastCategories = Array.from(
    new Set(events.map((event) => event.category))
  );

  let pastRevenues = [];
  for (let category of pastCategories) {
    let revenueCont = 0;
    for (let event of events) {
      if (event.category === category) {
        revenueCont += event.assistance * event.price;
      }
    }
    pastRevenues.push(revenueCont);
  }

  let pastPercentageOfAttendance = [];
  for (let category of pastCategories) {
    let assistance = 0;
    let capacity = 0;
    for (let event of events) {
      if (event.category === category) {
        assistance += event.assistance;
        capacity += event.capacity;
      }
    }
    pastPercentageOfAttendance.push((assistance * 100) / capacity);
  }

  pastStatistics.push(pastCategories, pastRevenues, pastPercentageOfAttendance);
  return pastStatistics;
}