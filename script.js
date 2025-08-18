// Acá está configurado el nav para desplegar y cerrar el menú

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

// Esto es para las imagenes de de fondo de la pagina principal

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000); // Cambia cada 4 segundos

// Esto es para los filtros, en la sección "alquilar"

const selectAlquiler = document.getElementById("tipo-alquiler");
if (selectAlquiler) {
  const propiedadesAlquiler = document.querySelectorAll(".propiedad");
  selectAlquiler.addEventListener("change", () => {
    const tipo = selectAlquiler.value;
    propiedadesAlquiler.forEach((prop) => {
      if (tipo === "todos" || prop.dataset.tipo === tipo) {
        prop.style.display = "block";
      } else {
        prop.style.display = "none";
      }
    });
  });
}
// Esto es para los filtros, en la sección comprar

const selectComprar = document.getElementById("tipo-comprar");
if (selectComprar) {
  const propiedadesComprar = document.querySelectorAll(".propiedad");
  selectComprar.addEventListener("change", () => {
    const tipo = selectComprar.value;
    propiedadesComprar.forEach((prop) => {
      if (tipo === "todos" || prop.dataset.tipo === tipo) {
        prop.style.display = "block";
      } else {
        prop.style.display = "none";
      }
    });
  });
}
