'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

 navToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    navMain.classList.toggle('main-nav--closed');
    navToggle.classList.toggle('main-nav__toggle--closed')
  });
})();
