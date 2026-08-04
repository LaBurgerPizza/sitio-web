// ========= LA BURGER PIZZA =========

// Año automático en el footer (si agregas un elemento con id="year")
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Animación al hacer scroll
const elementos = document.querySelectorAll(".card, .promo-box, .foto, .contacto-card");

const observar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";
    observar.observe(el);
});

// Efecto del encabezado
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";

    }

});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Efecto al cargar la portada
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.animate([
        {
            opacity: 0,
            transform: "translateY(40px)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ], {
        duration: 900,
        easing: "ease-out",
        fill: "forwards"
    });

});
