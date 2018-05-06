'use strict';

let btn = document.getElementById('boton');
let pagina = "html/juego.html";

btn.addEventListener("click", function(e){
  Comenzar(pagina);
})
function Comenzar(pag){
  location.href = pag ;
}
//↑ funcion donde click comenzar ↑//

function ProbabilidadCarta(id){
  let CartaMarca = " ";
  let random = Math.random();
  let i = document.getElementById(id);
  if (random <0.5) {
    i.src = "../img/marca.jpg";
  }else {
    if (random < 0.9) {
      i.src = "../img/libre.jpg"
    }else {
      i.src = "../img/bomba.jpg"
    }
  }
  if (i.src="../img/marca.jpg") {
    
  }
  setTimeout(function() {
    i.src = "../img/fondos/negro.jpg"
  }, 3000);
}
function MostrarCartas(){
  let c1 = ProbabilidadCarta('naipe1');
  let c2 = ProbabilidadCarta('naipe2');
  let c3 = ProbabilidadCarta('naipe3');
  let c4 = ProbabilidadCarta('naipe4');
  let c5 = ProbabilidadCarta('naipe5');
  let c6 = ProbabilidadCarta('naipe6');
  let c7 = ProbabilidadCarta('naipe7');
  let c8 = ProbabilidadCarta('naipe8');
}

//contador de la tabla
//funcion de las cartas en negro + setTimeout

function Seleccionar(){
  //valuar la datalist con las variables de las MostrarCartas
  let op = document.getElementById('items').value;
  alert(op);
}


// function asd(){
//   let img = document.getElementsByTagName('img');
//   for (var i = 0; i < img.length; i++) {
//     MostrarCartas();
//   }
//   setTimeout(function(){
//     for (var i = 0; i < img.length; i++) {
//       img[i].style.visibility = "../img/fondos/negro.jpg";
//     }
//   }, 3000);
// }
