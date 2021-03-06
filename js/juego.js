'use strict';
let partidas = 0;
let fallas = 0;
let aciertos = 0;
let resultado = [];
let salioMarca = 0;
let totalAciertos = 0;
let totalFallas = 0;


let inic = document.getElementsByClassName('iniciar');
let comenzarGame = document.getElementsByClassName('comenzarJuego');
let btn = document.getElementById('boton');
if (btn) {
  btn.addEventListener("click", function(){
    MostrarCartas();
    MostrarOcultarJuego();
  })
}

function ProbabilidadCartas(id){
  let imagenes = ["img/marca.jpg","img/libre.jpg", "img/bomba.jpg" ];
  let random = Math.random();
  let img = document.getElementById(id);

  if(random < 0.5){
    img.src = imagenes[0];
    resultado.push(0);
    salioMarca++;
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
  for (let i = 0; i < 8; i++) {
    let cartas = ProbabilidadCartas('naipe' + i);
  }
  setTimeout ( function(){
    let cartas = document.querySelectorAll(".imgCarta");
    console.log(cartas);
    for (let i = 0; i < cartas.length; i++) {
      cartas[i].classList.toggle("ocultar");
    }
    console.log(cartas);
  }, 2000);
  document.getElementById('partidas').innerHTML = partidas;
}

function SeleccionarCarta(){
  let opcion = parseInt(document.getElementById('items').value, 10);
  console.log("opcion" + opcion);

  let cartas = document.querySelectorAll(".imgCarta");
  cartas[opcion].classList.toggle("ocultar");

  if (resultado[opcion]==0) {

    let select = document.getElementById('items');
    select.options[select.selectedIndex].disabled= true;
    console.log("marca");
    aciertos++;
    totalAciertos++;

    if (salioMarca == aciertos) {
      alert("ganaste ♪♫♪♫");
      FinGame();
    }
  }else if (resultado[opcion]==1) {
    console.log("libre");
    fallas++;
    totalFallas++;
  }else {
    fallas++;
    totalFallas++;
    console.log("bomba");
    alert("Bombaa ☺☻☺☻☺☻");
    FinGame();
  }
  document.getElementById('acierto').innerHTML = aciertos;
  document.getElementById('error').innerHTML = fallas;
  document.getElementById('totalAcierto').innerHTML = totalAciertos;
  document.getElementById('totalError').innerHTML = totalFallas;
}
function FinGame(){
  reiniciarVariables();

  setTimeout(function(){
    let cartas = document.querySelectorAll(".imgCarta");
    console.log(cartas);
    for (var i = 0; i < cartas.length; i++) {
      if (cartas[i].classList.toggle("ocultar")== true) {
        cartas[i].classList.toggle("ocultar");
      }
    }
    habilitarOpcion();
    MostrarOcultarJuego();
  },2000);
}
function MostrarOcultarJuego(){
  inic[0].classList.toggle("iniciarJuego");
  comenzarGame[0].classList.toggle("iniciarJuego");
}

function reiniciarVariables(){
  aciertos = 0;
  fallas =0;
  resultado = [];
  salioMarca = 0;
}

function habilitarOpcion(){
  let select = document.getElementById('items');
  for (let i = 0; i < select.length; i++) {
      select.options[i].disabled = false;
      select.options[i].selected = false;
  }
}
