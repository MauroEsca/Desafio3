// assets/js/script.js

// Función de pintado que recibe el elemento y un color (por defecto "green")
function pintar(elemento, color = 'green') {
  elemento.style.backgroundColor = color;
}

// Obtener elementos
const ele = document.getElementById('ele1');
const par = document.getElementById('par');

// Event listener para el div: llama a pintar pasando el elemento clickeado
ele.addEventListener('click', function (event) {
  // event.currentTarget es el elemento al que se le asignó el listener
  pintar(event.currentTarget); // usa el color por defecto 'green'
});

// Event listener para el párrafo: pasa explicitamente 'yellow' como color
par.addEventListener('click', function (event) {
  pintar(event.currentTarget, 'yellow');
});