
// classList - muestra/obtiene todas las clases
// contains - comprueba classList para una clase específica
// add - añadir clase
// remove - eliminar clase
// toggle - alterna la clase
//Variables HTML
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//Funcion de la navbar
navToggle.addEventListener("click", function () {
    //Metodo alternativo
    /* console.log(links.classList.contains("random"));
    console.log(links.classList.contains("links")); */
    /* if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }else{
        links.classList.add("show-links")
    } */

    //Uso de classlist para la funcion
    links.classList.toggle("show-links");
});

/**
 Temas vistos
documento.querySelector():Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre
                         ordenado de los nodos del documento) que coincida con el grupo especificado de selectores.
addEventListener(): Registra un evento a un objeto en específico.
classList.alternar()

 */