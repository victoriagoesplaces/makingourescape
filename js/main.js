function loadImage(id, targetId) {
  // Either an <img>, or an element with a "data-image" attribute
  var el = document.getElementById(id);

  // Either the same element as above, or the targetId element
  var targetEl = targetId ? document.getElementById(targetId) : el;

  // Either the loaded <img>, or the path specified by the "data-image" attribute
  var imageToLoad;

  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === 'undefined') {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function () {
      targetEl.classList.add('is-loaded');
    };
  }
}

document.addEventListener('DOMContentLoaded', function () {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});

/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function () {

  if ($(window).scrollTop() > 300) {
    $('.main_nav').addClass('sticky');
  } else {
    $('.main_nav').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
  if ($('.main_nav').hasClass('open-nav')) {
    $('.main_nav').removeClass('open-nav');
  } else {
    $('.main_nav').addClass('open-nav');
  }
});

$('.main_nav li a').click(function () {
  if ($('.main_nav').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.main_nav').removeClass('open-nav');
  }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function ($) {

  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });
  });

});

// TweenMax.staggerFrom(".heading", 0.8, { opacity: 0, y: 20, delay: 0.2 }, 0.4);

//links to portfolio section
function portfolioLinks(url) {
  var page = window.open(url, '_blank');
  page.focus();
}

