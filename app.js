console.log("Portafolio cargado correctamente");
function saludar() {
  alert("Gracias por visitar mi portafolio");
}
document.addEventListener("DOMContentLoaded",saludar);
function resaltarMenuActivo() {
  console.log("Resaltando el enlace activo del menu");
}
document.addEventListener("DOMContentLoaded", resaltarMenuActivo);
function marcarSeccionActiva() {
  const secciones = document.querySelectorAll("section");
  console.log("Marcando la seccion activa segun scroll");
}
document.addEventListener("DOMContentLoaded", marcarSeccionActiva);
// resaltar_enlace_pagina
let yaSaludo = false;
function saludarUnaVez() {
  if (!yaSaludo) { saludar(); yaSaludo = true; }
}