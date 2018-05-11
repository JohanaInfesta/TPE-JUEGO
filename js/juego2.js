let marca = "img/marca.jpg";
let bomba = "img/bomba.jpg";
let libre = "img/libre.jpg";
let acierto = 0;
let falla = 0;
let partidas = 0;
let arrValores = [];
// 'use strict';

//funcion donde click comenzar //
let btn = document.getElementById('boton');
let paginaJuego = "html/juego.html";
let paginaComenzar = "index.html";

btn.addEventListener("click", function(e){
  Comenzar(paginaJuego);
})
function Comenzar(){
  location.href = paginaJuego ;
}

//probabilidad de las cartas//
function ProbabilidadCarta(id){
  let random = Math.random();
  let img = document.getElementById(id);
  if (random <0.5) {
    img.src ="../" + marca;
    arrValores.push = ("marca",  1);
  }else {
    if (random < 0.9) {
      img.src = "../" + libre;
      arrValores.push = ("libre", 0);
    }else {
      img.src = "../" + bomba;
      arrValores.push = ("bomba", 2);
    }
  }
}

function MostrarCartas(){
  partidas++;
  let imgClassCarta = document.getElementsByClassName('img');
  let cantCartas =  imgClassCarta.length;
  // let array = Array();
  for (let i = 0; i < cantCartas; i++) {
    let id = imgClassCarta[i].getAttribute('id');
    ProbabilidadCarta(id);
  }
  // let c1 = ProbabilidadCarta('naipe1');
  // let c2 = ProbabilidadCarta('naipe2');
  // let c3 = ProbabilidadCarta('naipe3');
  // let c4 = ProbabilidadCarta('naipe4');
  // let c5 = ProbabilidadCarta('naipe5');
  // let c6 = ProbabilidadCarta('naipe6');
  // let c7 = ProbabilidadCarta('naipe7');
  // let c8 = ProbabilidadCarta('naipe8');

  document.getElementById('partidas').innerHTML = partidas;
  setTimeout(function(){
    hideImage();
  }, 3000);
}
// function hideImage(){
//   //ver como funciona querySelectorAll("img")
// 		var imgs = document.getElementsById("btnnn");
// 		for (let i = 0; i < imgs.length; i++) {
// 			imgs[i].src = " ";
// 		}
//  }

// comparar la lista con la imagen
// settimeout ocultar las imagenes sin que pierdan el valor
function Seleccionar(id){
  let op = document.getElementById('items').value;
  let imagen = document.getElementsByTagName('img');
  // for (var i = 1; i < imagen.length; i++) {
  //   op == imagen;
  //   // MostrarCartas(imagen);
  // }
  // let imagen ;
  if (op == 1) {
    imagen = document.getElementById('naipe1');
  imagen.classList.toggle("ocultar")

  }else if (op ==2) {
    imagen = document.getElementById('naipe2');
  imagen.classList.toggle("ocultar")

  }else if (op == 3) {
    imagen = document.getElementById('naipe3');
  imagen.classList.toggle("ocultar")
  }else if (op == 4) {
    imagen = document.getElementById('naipe4');
  imagen.classList.toggle("ocultar")

  }else if (op == 5) {
    imagen = document.getElementById('naipe5');
  imagen.classList.toggle("ocultar")

  }else if (op == 6) {
    imagen = document.getElementById('naipe6');
  imagen.classList.toggle("ocultar")

  }else if (op == 7) {
    imagen = document.getElementById('naipe7');
  imagen.classList.toggle("ocultar")

  }else if (op == 8) {
    imagen = document.getElementById('naipe8');
  imagen.classList.toggle("ocultar")

  // }
  console.log("op " + op);
  console.log("imagen " + imagen);

  // if (op.id == "img/marca.jpg"){
  //   acierto ++;
  //   alert("valor");
  // }else if (op.id == "img/libre.jpg") {
  //   falla ++;
  //   alert ("libre");
  // }else if (op.id == "img/bomba.jpg") {
  //   alert ("Bomba Perdiste ☺ ☻ ☺ ☻ ♪ ♫ ");
  //   location.href = paginaComenzar;
  // }
  // Comprobar();
  //   document.getElementById('acierto').innerHTML = acierto;
  //   document.getElementById('error').innerHTML = falla;

}

// function imgCheck(){
// this.style.visibility = "hidden";
// }
