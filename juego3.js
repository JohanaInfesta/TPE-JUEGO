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
  let imagenes = new Array(3);
  imagenes [0] = "../img/marca.jpg";
  imagenes [1] = "../img/libre.jpg";
  imagenes [2] = "../img/bomba.jpg";
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

function Seleccionar(){
  let opcion = parseInt(document.getElementById('items').value, 10);
  console.log("opcion" + opcion);
  let cartas = document.querySelectorAll(".imgCarta");

  if (opcion == 0) {
    cartas[0].classList.toggle("ocultar");

      if (resultado[0] == 0 ) {;
        console.log("marca");
        aciertos++;
      }else if (resultado[0] == 1) {
        console.log("libre");
        fallas++;
      }else {
        Bomba();
        console.log("bomba");
      }
  }else if (opcion == 1) {
    cartas[1].classList.toggle("ocultar");

    if (resultado[1] == 0 ) {;
      console.log("marca");
      aciertos++;
    }else if (resultado[1] == 1) {
      console.log("libre");
      fallas++;
    }else {
      Bomba();
      console.log("bomba");
    }

  }else if (opcion == 2) {
    cartas[2].classList.toggle("ocultar");

    if (resultado[2] == 0 ) {;
      console.log("marca");
      aciertos++;
    }else if (resultado[2] == 1) {
      console.log("libre");
      fallas++;
    }else {
      Bomba();
      console.log("bomba");
    }

  }else if (opcion == 3) {
    cartas[3].classList.toggle("ocultar");

    if (resultado[3] == 0 ) {;
      console.log("marca");
      aciertos++;
    }else if (resultado[3] == 1) {
      console.log("libre");
      fallas++;
    }else {
      Bomba();
      console.log("bomba");
    }

  }else if (opcion == 4) {
    cartas[4].classList.toggle("ocultar");

    if (resultado[4] == 0 ) {;
      console.log("marca");
      aciertos++;
    }else if (resultado[4] == 1) {
      console.log("libre");
      fallas++;
    }else {
      Bomba();
      console.log("bomba");
    }

  }else if (opcion == 5) {
    cartas[5].classList.toggle("ocultar");

    if (resultado[5] == 0 ) {;
      console.log("marca");
      aciertos++;
    }else if (resultado[5] == 1) {
      console.log("libre");
      fallas++;
    }else {
      Bomba();
      console.log("bomba");
    }

  }else if (opcion == 6) {
    cartas[6].classList.toggle("ocultar");

    if (resultado[6] == 0 ) {;
      console.log("marca");
      aciertos++;
    }else if (resultado[6] == 1) {
      console.log("libre");
      fallas++;
    }else {
      Bomba();
      console.log("bomba");
    }

  }else{
    cartas[7].classList.toggle("ocultar");

    if (resultado[7] == 0 ) {;
      console.log("marca");
      aciertos++;
    }else if (resultado[7] == 1) {
      console.log("libre");
      fallas++;
    }else {
      Bomba();
      console.log("bomba");
    }
  }
  document.getElementById('acierto').innerHTML = aciertos;
  document.getElementById('error').innerHTML = fallas;
}

function Bomba(){
  alert("Perdiste ☻☺☻☺☻☺");
  location.href = paginaComenzar;
}
