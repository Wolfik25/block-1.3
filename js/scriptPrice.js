const slider = document.querySelector('.swiper');

let mySwapper;

function mobileSlider() {
    if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
      mySwapper = new Swiper(slider, {
        slidesPerView: "auto",
         spaceBetween: 16,
         loop: true,
         slideClass: 'card3', 
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
       } 
    });
       slider.dataset.mobile = 'true';
    }

     if (document.documentElement.clientWidth > 767 ) {
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

