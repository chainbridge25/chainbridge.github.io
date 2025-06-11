"use strict";

window.addEventListener('DOMContentLoaded', function (event) {
  var navbarShrink = function navbarShrink() {
    var navbarCollapsible = document.body.querySelector('#mainNav');

    if (!navbarCollapsible) {
      return;
    }

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);
  var mainNav = document.body.querySelector('#mainNav');

  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%'
    });
  }

  ;
  var navbarToggler = document.body.querySelector('.navbar-toggler');
  var responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
  new SimpleLightbox({
    elements: '#portfolio a.portfolio-box'
  });
});