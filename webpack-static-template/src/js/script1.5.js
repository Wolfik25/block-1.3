import Swiper, {Pagination} from "swiper";

Swiper.use([Pagination]);


const slider = document.querySelector('.swiper');

let mySwapper;

function mobileSlider() {
	if(window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
      mySwapper = new Swiper(slider, {
        slidesPerView: 'auto',
         spaceBetween: 10,
         loop: false,
         slideClass: 'card', 
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
       } 
    });
       slider.dataset.mobile = 'true';
    }

     if (window.innerWidth > 767 ) {
     	slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-initialized')) {
            mySwapper.destroy();
         }  
	   }
   }

   mobileSlider();
   window.addEventListener('resize', () => {
   mobileSlider();
});


// КНОПКИ SHOW AND HIDE

var popup = document.querySelectorAll('.modal');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = document.querySelector('.button-close');

openPopupButton.addEventListener('click', function () {
for (var i = 0; i < popup.length; i++) {
    popup[i].classList.add('modal--show');
  }

openPopupButton.classList.add('hide');
closePopupButton.classList.remove('hide');

})

closePopupButton.addEventListener('click', function () {
  for (var i = 0; i < popup.length; i++) {
    popup[i].classList.remove('modal--show');
}

closePopupButton.classList.add('hide');
openPopupButton.classList.remove('hide')
});


