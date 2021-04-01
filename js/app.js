"use strict"


const icono = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");

icono.addEventListener("click",function(){
    nav.classList.toggle("ver")

})

 



var foto  = document.querySelectorAll(".article");
var img   = document.querySelectorAll(".lightbox");
var equis = document.querySelectorAll(".fa-times");

foto.forEach(function (cadaIMG, i) {
  foto[i].addEventListener('click', function () {
    img[i].classList.add('ver');
  });
});

equis.forEach(function (cadaIMG, i) {
    equis[i].addEventListener('click', function () {
      img[i].classList.remove('ver');
    });
  });

  




