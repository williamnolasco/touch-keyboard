/**
* REGLAS
* 1. Detectar que no se repitan las letras si están dentro del área de la tecla.
* 2. Si el tiempo es prolongado se forma un espacio en blanco.
* 3. Definir cuanto es el tiempo mínimo que debe estar el cursos sobre la tecla para considerarlo dentro del texto.
* 4. Si la palabra coincide con alguna del banco de palabras se autocorrige.
* 5. El botón borrar debe ser clickeado para funcionar.
* 6. Para escribir solo es necesario mover el mouse sobre la tecla mas no presionarla.
* 7. El botón mayúscula se activa y desactiva al presionarla o al activar o desactivar la tecla mayus de tu terminal.
**/


var counter = 0;

document.getElementById("first").addEventListener("mouseover", function(){
    document.getElementById("message").value = "entre a 1";
});

document.getElementById("first").addEventListener("mouseout", function(){
    document.getElementById("message").value = "sali de 1";
});

document.getElementById("second").addEventListener("mouseover", function(){
    document.getElementById("message").value = "entre a 2";
  
});

document.getElementById("second").addEventListener("mouseout", function(){
    document.getElementById("message").value = "sali de 2";
});




// var min_posxQ = 48;
// var max_posxQ = 89;
// var min_posyQ = 147;
// var max_posyQ = 200;
//
// var min_posxW = 104;
// var max_posxW = 145;
// var min_posyW = 113;
// var max_posyW = 166;
//
// var min_posxE = 156;
// var max_posxE = 194;
// var min_posyE = 149;
// var max_posyE = 199;
//
// var min_posxA = 74;
// var max_posxA = 112;
// var min_posyA = 223;
// var max_posyA = 272;
//
// var min_posxS = 130;
// var max_posxS = 167;
// var min_posyS = 227;
// var max_posyS = 280;
//
// var min_posxD = 184;
// var max_posxD = 220;
// var min_posyD = 222;
// var max_posyD = 280;
//
// var word = "";
//
//
// (function(mouseStopDelay) {
//   var timeout;
//   document.addEventListener('mousemove', function(e) {
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       console.log(e.clientX + ", " + e.clientY);
//
//       document.getElementById("data").value = detectWord(e.clientX, e.clientY);
//       var event = new CustomEvent("mousestop", {
//         detail: {
//           clientX: e.clientX,
//           clientY: e.clientY
//         },
//         bubbles: true,
//         cancelable: true
//       });
//       e.target.dispatchEvent(event);
//     }, mouseStopDelay);
//   });
// }(100));
//
//
//
//
// function detectWord(x, y) {
//   if ( (x >= min_posxQ && x <= max_posxQ) && (y >= min_posyQ && y <= max_posyQ) ) {
//     word = word + "q";
//   }
//   if ( (x >= min_posxW && x <= max_posxW) && (y >= min_posyW && y <= max_posyW) ) {
//     word = word + "w";
//   }
//   if ( (x >= min_posxE && x <= max_posxE) && (y >= min_posyE && y <= max_posyE) ) {
//     word = word + "e";
//   }
//   if ( (x >= min_posxA && x <= max_posxA) && (y >= min_posyA && y <= max_posyA) ) {
//     word = word + "a";
//   }
//   if ( (x >= min_posxS && x <= max_posxS) && (y >= min_posyS && y <= max_posyS) ) {
//     word = word + "s";
//   }
//   if ( (x >= min_posxD && x <= max_posxD) && (y >= min_posyD && y <= max_posyD) ) {
//     word = word + "d";
//   }
//   return word;
// }
//
// function clearWord() {
//   document.getElementById("data").value = "";
//   word = "";
// }
