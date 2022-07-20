let header__burger = document.querySelectorAll('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
header__burger.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
});
const we = document.querySelector('.swiper-reviews');
if(we) {
    const swiper = new Swiper('.swiper-reviews', {
      loop: true,
      pauseOnMouseEnter:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
}