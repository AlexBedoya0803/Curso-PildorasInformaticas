const d = document,
    $cont = d.querySelector(".cont_app"),
    $button = d.getElementById("button");

d.addEventListener("DOMContentLoaded", e => {
        const API = "http://localhost:5000/tasks";
        //Petición
        fetch(API)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            json.forEach(el => {
                let contenedor = d.createElement("div");
                let nombre = d.createElement("h4");
                let category = d.createElement("h4");
                let pomos = d.createElement("h4");
                let editar = d.createElement("button");
                let eliminar = d.createElement("button");
                nombre.textContent = el.name;
                category.textContent = el.category;
                pomos.textContent = el.pomos;
                editar.textContent = "Editar";
                eliminar.textContent = "Eliminar";
                editar.classList.add("button_editar");
                eliminar.classList.add("button_eliminar");
                contenedor.appendChild(nombre);
                contenedor.appendChild(category);
                contenedor.appendChild(pomos);
                contenedor.appendChild(editar);
                contenedor.appendChild(eliminar);
                contenedor.classList.add("cont_task");
                $cont.appendChild(contenedor);                
            });
        })
    }
);


