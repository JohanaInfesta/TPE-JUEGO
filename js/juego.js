let marca = "img/marca.jpg";
let bomba = "img/bomba.jpg";
let libre = "img/libre.jpg";
let acierto = 0;
let falla = 0;
let partidas = 0;

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

function MostrarCartas(){
  partidas++;
  let imgClassCarta = document.getElementsByClassName('img');
  let cantCartas =  imgClassCarta.length;
  for (let i = 0; i < cantCartas; i++) {
    let id = imgClassCarta[i].getAttribute('id');
    ProbabilidadCarta(id);
  }
  document.getElementById('partidas').innerHTML = partidas;
}

function Seleccionar(){
  let op = document.getElementById('items').value;
  let imagen = document.getElementsByTagName('img');
  for (var i = 1; i < imagen.length; i++) {
    op == imagen;
  }
  console.log("op " + op);
  console.log("imagen " + imagen);
  document.getElementById('acierto').innerHTML = acierto;
  document.getElementById('error').innerHTML = falla;
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
