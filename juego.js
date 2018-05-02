'use strict';

// let btn = document.getElementById('boton');
// let pagina = "html/juego.html";
//
// btn.addEventListener("click", function(e){
//   Comenzar(pagina);
// })
// function Comenzar(pag){
//   location.href = pag ;
// }


// function MostrarCartas(){
//   alert("ASDCFVB");
//   let lampImg = document.getElementById("naipe1");
//   let lampImgAnterior = lampImg.src;
//   lampImg.src = "../img/c1.jpg";
// }
// function Mostrar(){
//
// setTimeout(MostrarCartas, 5000);
// }
//

let img = new Array (3);
  img [0] = "../img/c1.jpg",
  img [1] = "../img/c2.jpg",
  img [2] = "../img/c3.jpg";

function Probabilidad(imagen){
  let prob10 = Math.floor((Math.random()*100)+1);

  if (prob10<=10) {
    imagen = 1;
  }else if ((prob10 >10)&&(prob10<=50)) {
    imagen = 2;
  }else {
    imagen = 3;
  }
}
function AsignarCartas(imagen){

}
