let marca = "../img/marca.jpg";
let bomba = "../img/bomba.jpg";
let libre = "../img/libre.jpg";
let acierto = 0;
let falla = 0;
let partidas = 0;
// 'use strict';

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
  // let valor = Seleccionar();

  // let cartas = [ 1, 2, 3, 4, 5, 6, 7, 8];
  // let CartaMarca = " ";
  let random = Math.random();
  let i = document.getElementById(id);
  if (random <0.5) {
    i.src = marca;
  }else {
    if (random < 0.9) {
      i.src = libre;
    }else {
      i.src = bomba;
    }
  }
  // for (var j = 0; j < cartas.length; j++) {

}

function MostrarCartas(){
  partidas++;

  let c1 = ProbabilidadCarta('naipe1');
  let c2 = ProbabilidadCarta('naipe2');
  let c3 = ProbabilidadCarta('naipe3');
  let c4 = ProbabilidadCarta('naipe4');
  let c5 = ProbabilidadCarta('naipe5');
  let c6 = ProbabilidadCarta('naipe6');
  let c7 = ProbabilidadCarta('naipe7');
  let c8 = ProbabilidadCarta('naipe8');

    $('.partidas').html(partidas);
}

function Seleccionar(){
  let op = document.getElementById('items').value;
  // let cartas = document.getElementsByTagName('img');
  // for (var i = 0; i < cartas.length; i++) {
  //   op = cartas;
  // }
  let valores ;
  if (op == 1) {
    valores = document.getElementById('naipe1');
  }else if (op ==2) {
    valores = document.getElementById('naipe2');
  }else if (op == 3) {
    valores = document.getElementById('naipe3');
  }else if (op == 4) {
    valores = document.getElementById('naipe4');
  }else if (op == 5) {
    valores = document.getElementById('naipe5');
  }else if (op == 6) {
    valores = document.getElementById('naipe6');
  }else if (op == 7) {
    valores = document.getElementById('naipe7');
  }else if (op == 8) {
    valores = document.getElementById('naipe8');
  }
  document.getElementsByTagName('img').value;

  if (op = marca){
    acierto ++;
    alert("valor");
  }else if (op = libre) {
    falla ++;
    alert ("libre");
  }else if (op = bomba) {
    alert ("Bomba");
  }
  $('.acierto').html(acierto);
  $('.error').html(falla);
}
