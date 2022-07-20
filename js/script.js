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
let animItems = document.querySelectorAll("._anim-items");
if(animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active");
      }
      else {
          if(!animItem.classList.contains("_anim-no-hide")) {
              animItem.classList.remove("_active");
          }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top:rect.top + scrollTop, left : rect.left + scrollLeft}
  }
  setTimeout(() => {
      animOnScroll();
  }, 150)
}

