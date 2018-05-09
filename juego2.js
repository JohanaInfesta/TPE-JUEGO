let marca = "img/marca.jpg";
let bomba = "img/bomba.jpg";
let libre = "img/libre.jpg";
let acierto = 0;
let falla = 0;
let partidas = 0;
// 'use strict';

let btn = document.getElementById('boton');
let paginaJuego = "html/juego.html";
let paginaComenzar = "index.html";

btn.addEventListener("click", function(e){
  Comenzar(paginaJuego);
})
function Comenzar(){
  location.href = paginaJuego ;
}
//↑ funcion donde click comenzar ↑//
function ProbabilidadCarta(id){
  let random = Math.random();
  let i = document.getElementById(id);
  if (random <0.5) {
    i.src ="../" + marca;
  }else {
    if (random < 0.9) {
      i.src = "../" + libre;
    }else {
      i.src = "../" + bomba;
    }
  }
}
function Comprobar(){
  let resultado = ProbabilidadCarta();

  if (resultado == 1) {

  }
}

function MostrarCartas(){
  partidas++;
  let imgClassCarta = document.getElementsByClassName('img');
  let cantCartas =  imgClassCarta.length;
  let array = Array();
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
}

function Seleccionar(){
  let op = document.getElementById('items').value;
  let imagen = document.getElementsByTagName('img');
  for (var i = 1; i < imagen.length; i++) {
    op == imagen;
  }
  // let imagen ;
  // if (op == 1) {
  //   imagen = document.getElementById('naipe1');
  // }else if (op ==2) {
  //   imagen = document.getElementById('naipe2');
  // }else if (op == 3) {
  //   imagen = document.getElementById('naipe3');
  // }else if (op == 4) {
  //   imagen = document.getElementById('naipe4');
  // }else if (op == 5) {
  //   imagen = document.getElementById('naipe5');
  // }else if (op == 6) {
  //   imagen = document.getElementById('naipe6');
  // }else if (op == 7) {
  //   imagen = document.getElementById('naipe7');
  // }else if (op == 8) {
  //   imagen = document.getElementById('naipe8');
  // }
  console.log("op " + op);
  console.log("imagen " + imagen);

  if (imagen ==  + marca){
    acierto ++;
    alert("valor");
  }else if (imagen ==  + libre) {
    falla ++;
    alert ("libre");
  }else if (imagen ==  + bomba) {
    alert ("Bomba Perdiste ☺ ☻ ☺ ☻ ♪ ♫ ");
    location.href = paginaComenzar;
  }
  // Comprobar();
  document.getElementById('acierto').innerHTML = acierto;
  document.getElementById('error').innerHTML = falla;
}
setTimeout(function() {
  MostrarCartas(id).style.display='none';
}, 3000);
// function imgCheck(){
// this.style.visibility = "hidden";
// }
