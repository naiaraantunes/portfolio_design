let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

$(document).ready(function(){
    $('.carrossel').slick({
      infinite: true, 
      slidesToShow: 3, 
      slidesToScroll: 1, 
      arrows: true, 
      dots: true, 
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
      ]
    });
  });
  
  