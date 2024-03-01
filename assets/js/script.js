'use strict'

//----alternância da navbar no celular---
const navBar = document.querySelector("[data-nav]");
const navToggler = document.querySelector('[data-nav-toggler]');
//---- chamado do evento
navToggler.addEventListener('click',menuToggle);

function menuToggle(){
  navToggler.classList.toggle("active")
  navBar.classList.toggle("active")
}

//-----Estado de rolagem header-----
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () =>{
  if(window.scrollY > 50){
    header.classList.add("active");
  }else{
    header.classList.remove("active")
  }
});
//-----adicionar ao botão favorito alternar-----
const toggleBtns = document.querySelectorAll("[data-toggler-btn]");
toggleBtns.forEach((toggleBtn)=>{
  toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle("active")
  })
})




