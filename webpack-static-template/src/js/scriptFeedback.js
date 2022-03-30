 
const feedback = document.querySelector('.feedback');
const callback = document.querySelector('.callback');

  const buttonsMessage = document.querySelector('.footer-btn__chat');
  const btnChat = document.querySelector('.right-nav__button-chat');
  const buttonsCall = document.querySelector('.footer-btn__call');
  const btnCall = document.querySelector('.right-nav__button-call');



  buttonsMessage.addEventListener('click', function () {
    feedback.classList.add('feedback--show');
  } )

    btnChat.addEventListener('click', function () {
    feedback.classList.add('feedback--show');
  } )

buttonsCall.addEventListener('click', function () {
 callback.classList.add('feedback--show');
})

btnCall.addEventListener('click', function () {
 callback.classList.add('feedback--show');
})

  const btnClose = document.querySelectorAll('.btn-location');
  const aside =  document.querySelectorAll('.aside-back');

  for (var i = 0; i < btnClose.length; i++ ) {
    btnClose[i].addEventListener('click', function () {
        for (var i = 0; i < aside.length; i++) {
            aside[i].classList.remove('feedback--show');}
});
}

const callBackDiv = document.querySelector('.callback-div');
callBackDiv.addEventListener('click', function () {
callback.classList.remove('feedback--show');}) 

const feedBackDiv =  document.querySelector('.feedback-div');
feedBackDiv.addEventListener('click', function () {
feedback.classList.remove('feedback--show');}) 





const asideMenu = document.querySelector('.container-aside');
const btnMenu = document.querySelector('.left-nav__burger');
  btnMenu.addEventListener('click', function () {
    asideMenu.classList.add('aside-show');
  } )

const burgerClose = document.querySelector('.burger-close');
  burgerClose.addEventListener('click', function () {
        asideMenu.classList.remove('aside-show');})

const asideDiv = document.querySelector('.aside-div');
asideDiv.addEventListener('click', function () {
asideMenu.classList.remove('aside-show');}) 


// read-more
const readMore = document.querySelector('.read-more__button');
const aboutContinuation = document.querySelector('.description-main__about-continuation');
const aboutEnd = document.querySelector('.description-main__about-end');
const closeButton = document.querySelector('.read-close');

 readMore.addEventListener('click', function () {
    aboutContinuation.classList.add('about-show');
     aboutEnd.classList.add('about-show');
     readMore.classList.add('hide');
     closeButton.classList.remove('hide');
  } )

closeButton.addEventListener('click', function () {
  aboutContinuation.classList.remove('about-show');
     aboutEnd.classList.remove('about-show');
     closeButton.classList.add('hide');
     readMore.classList.remove('hide');
})
