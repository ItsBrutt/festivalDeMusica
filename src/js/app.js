document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
    navegacionFija();
    resaltarSeccion();
});
function navegacionFija() {
    const header = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    window.addEventListener("scroll", function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add("fijo");
        } else {
            header.classList.remove("fijo");
        }
    });
}
function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const cantidadImagenes = 16;
    const galeria = document.querySelector(".galeria-imagenes");
    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement("IMG");
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = "imagen festival";

        //event handler
        imagen.onclick = function () {
            mostrarImagen(i);
        };
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "imagen festival";    
    //Crear el modal
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.onclick = cerrarmodal;

    //Boton cerrar
    const botonCerrar = document.createElement("BUTTON");
    botonCerrar.textContent = "X";
    botonCerrar.classList.add("boton-cerrar");
    botonCerrar.onclick = cerrarmodal;
    
    modal.appendChild(imagen)
    modal.appendChild(botonCerrar);
    //agregar el modal al body
    const body = document.querySelector("body");
    body.classList.add("no-scroll");
    body.appendChild(modal);
}

function cerrarmodal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("fade-out");
    setTimeout(() => {
        modal?.remove();
    }, 500);
    const body = document.querySelector("body");
    body.classList.remove("no-scroll");
}
function resaltarSeccion() {
    const secciones = document.querySelectorAll(".seccion");
    const navLinks = document.querySelectorAll(".navegacion-principal a");
    
    let seccionActual = "";
    secciones.forEach(seccion => {
        const sectionTop = seccion.offsetTop;
        const sectionHeight = seccion.clientHeight;
        if(window.scrollY >= sectionTop - sectionHeight / 3) {
            seccionActual = seccion.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("activo");
        if(link.getAttribute("href") === `#${seccionActual}`) {
            link.classList.add("activo");
        }
    });
};
function scrollNav() {
    const navLinks = document.querySelectorAll(".navegacion-principal a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const href = e.target.getAttribute("href");
            const seccion = document.querySelector(href);
            seccion.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}