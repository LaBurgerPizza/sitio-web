// LA BURGER PIZZA
// app.js

document.addEventListener("DOMContentLoaded", () => {

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (window.scrollY > 60) {

header.style.background = "rgba(0,0,0,.96)";
header.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";

} else {

header.style.background = "rgba(0,0,0,.82)";
header.style.boxShadow = "none";

}

});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".7s";

observer.observe(card);

});

const promos=document.querySelectorAll(".promo");

promos.forEach((promo,index)=>{

promo.style.animation=`flotar 4s ${index*.2}s infinite`;

});

const galeria=document.querySelectorAll(".galeria-grid img");

galeria.forEach(img=>{

img.addEventListener("click",()=>{

const fondo=document.createElement("div");

fondo.style.position="fixed";
fondo.style.left="0";
fondo.style.top="0";
fondo.style.width="100%";
fondo.style.height="100%";
fondo.style.background="rgba(0,0,0,.85)";
fondo.style.display="flex";
fondo.style.alignItems="center";
fondo.style.justifyContent="center";
fondo.style.zIndex="99999";

const imagen=document.createElement("img");

imagen.src=img.src;

imagen.style.maxWidth="90%";
imagen.style.maxHeight="90%";
imagen.style.borderRadius="18px";
imagen.style.boxShadow="0 0 50px rgba(0,0,0,.7)";

fondo.appendChild(imagen);

document.body.appendChild(fondo);

fondo.addEventListener("click",()=>{

fondo.remove();

});

});

});

});

const style=document.createElement("style");

style.innerHTML=`

@keyframes flotar{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-8px);

}

100%{

transform:translateY(0px);

}

}

`;

document.head.appendChild(style);
