//CONTADOR
// const containerCont=document.querySelector("#sell-number");
// const contador=document.querySelector("#sell-number div span");
// let valorCont=contador.textContent;
// const alturaPantalla=window.innerHeight;

// console.log(valorCont);

// function incrementar(){
//     window.addEventListener("scroll",()=>{
//         if(window.scrollY>containerCont-alturaPantalla/2){
//             valorCont+=1;
//             console.log(valorCont);
//         }
//     })
// }
// incrementar();

//SLIDER DE NOTICIAS
// document.addEventListener('DOMContentLoaded', () => {
//     const articulos = document.querySelector('.articulos');
//     const articles = document.querySelectorAll('#noticias article');
//     const prevBtn = document.querySelector('.iconos .prev img');
//     const nextBtn = document.querySelector('.iconos .next img');
//     console.log(prevBtn);

//     let currentIndex = 0; // Índice del primer artículo visible
//     const visibleArticles = 3; // Cantidad de artículos visibles
//     const articleWidth = articles[0].offsetWidth + 30; // Ancho de un artículo + gap

//     // Función para actualizar la posición del carrusel
//     const updateCarousel = () => {
//         articulos.style.transform = `translateX(${-currentIndex * articleWidth}px)`;
//         articulos.style.transition = 'transform 0.3s ease-in-out';
//     };

//     // Evento para el botón de siguiente
//     nextBtn.addEventListener('click', () => {
//         console.log("next");
//         if (currentIndex < articles.length - visibleArticles) {
//             currentIndex++;
//             updateCarousel();
//         }
//     });

//     // Evento para el botón de anterior
//     prevBtn.addEventListener('click', () => {
//         console.log("first");
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateCarousel();
//         }
//     });
// });



//CAMBIAR EL BOTON DE COMPROMISO FINI POR "COMPROMISO"

// Selecciona el primer enlace dentro del div con id "contenedor"
// const btnPedido = document.querySelector(".btn-Comp");

// // Crea una función que verifica el ancho de la pantalla
// function cambiarTextoPedido() {
//   if (window.matchMedia("(max-width: 768px)").matches) {
//     btnPedido.textContent = "Compromiso Fini";
//   } else {
//     btnPedido.textContent = "Compromiso";
//   }
// }

// // Ejecuta la función al cargar la página y cada vez que la pantalla cambia de tamaño
// window.addEventListener("load", cambiarTextoPedido);
// window.addEventListener("resize", cambiarTextoPedido);



