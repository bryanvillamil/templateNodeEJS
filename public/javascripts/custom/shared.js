var hamburguer = $('.nav-toggle');
var navigation = $('#navigation');
var divMenu = $(navigation).find('.nav-menus-wrapper');

$(document).ready(function() {

  versionMenu();

  $(hamburguer).click('on', function() {
    if ($(window).width() < 1025) {
      AddClass();
    } 
  });

  $(window).resize(function() {
    versionMenu();
    if ($(window).width() > 1025) {
      $('body').removeClass('no-scroll').css("transition-property", "");
      $(divMenu).removeClass('nav-menus-wrapper-open');
    }
  });

  $(window).scroll(function() {
    if ($(window).width() > 1025) {
      headerSticky();
    }
  });

  menuEvents();
  m_k_add_year_copyright();

});


// Header Fixed
function headerSticky() {
  var header = document.getElementById("myHeader");
  var headerFixed = header.offsetTop;
  if (window.pageYOffset > headerFixed) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

function AddClass() {
  $('body').toggleClass('no-scroll').css("transition-property", "left");
  $(divMenu).toggleClass('nav-menus-wrapper-open');
}

function versionMenu() {
  if ($(window).width() < 1024) {
    $(navigation).removeClass('navigation-landscape').addClass('navigation-portrait');
  } else if($(window).width() > 1025) {
    $(navigation).removeClass('navigation-portrait').addClass('navigation-landscape');
  }
}

function menuEvents() {
  $('a[data-menu]').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() < 1025) {
      AddClass();
    }
    var item = $(this).attr('data-menu');
    var top = 0;
    if(item !== 'home')
      top = $('#' + item).offset().top - 100;
    $('html, body').delay(200).animate({
      scrollTop: top
    }, 1000);
  });
}

function m_k_add_year_copyright() {
  var year = (new Date).getFullYear();
  $("#dataYear").text(year);
}