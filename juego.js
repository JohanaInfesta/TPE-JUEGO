// let c1, c2, c3, c4, c5, c6, c7, c8;

// funcion comenarjuego(){
// fallas =0
// abarrajar();
// MostrarCartas()
// }



let paginaComenzar = "../index.html";
let partidas = 0;
let fallas = 0;
let aciertos = 0;
let resultado = [];
let win = [];

let paginaJuego = "html/juego.html";
let btn = document.getElementById('boton');
if (btn) {
  btn.addEventListener("click", function(e){
    Comenzar(paginaJuego);
  })
}
function Comenzar(){
  location.href = paginaJuego ;
}

function ProbabilidadCartas(id){
  let imagenes = ["../img/marca.jpg","../img/libre.jpg", "../img/bomba.jpg" ];
  let random = Math.random();
  let img = document.getElementById(id);

  if(random < 0.5){
    img.src = imagenes[0];
    resultado.push(0);
  }else{
    if (random < 0.9) {
      img.src = imagenes[1];
      resultado.push(1);
    }else {
      img.src = imagenes[2];
      resultado.push(2);
    }
  }
}

function MostrarCartas(){
  partidas ++ ;
  let c1 = ProbabilidadCartas('naipe1');
  let c2 = ProbabilidadCartas('naipe2');
  let c3 = ProbabilidadCartas('naipe3');
  let c4 = ProbabilidadCartas('naipe4');
  let c5 = ProbabilidadCartas('naipe5');
  let c6 = ProbabilidadCartas('naipe6');
  let c7 = ProbabilidadCartas('naipe7');
  let c8 = ProbabilidadCartas('naipe8');

  setTimeout ( function(){
    let cartas = document.querySelectorAll(".imgCarta");
    console.log(cartas);
    for (var i = 0; i < cartas.length; i++) {
      cartas[i].classList.toggle("ocultar");
    }
  }, 2000);
  document.getElementById('partidas').innerHTML = partidas;
}

function SeleccionarCarta(){
  let opcion = parseInt(document.getElementById('items').value, 10);
  console.log("opcion" + opcion);
  let cartas = document.querySelectorAll(".imgCarta");

  cartas[opcion].classList.toggle("ocultar");

  if (resultado[opcion]==0) {
    console.log("marca");
    win.push(0);
    aciertos++;
  }else if (resultado[opcion]==1) {
    console.log("libre");
    fallas++;
  }else {
    console.log("bomba");
    Bomba();
  }
  document.getElementById('acierto').innerHTML = aciertos;
  document.getElementById('error').innerHTML = fallas;

}

function Bomba(){
  alert("Perdiste ☻☺☻☺☻☺");
  setTimeout(function(){
    location.href = paginaComenzar;
  },2000);
}
function Ganaste(){

}
