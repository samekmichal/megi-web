$(document).ready(function() {

  $(".refText").mCustomScrollbar();

  $('.menuLink').click(function(e) {
    e.preventDefault();

    var section = $(this).attr('href').substring(1);
    $('html, body').animate({
      scrollTop: $('#' + section + 'Section').offset().top
    }, 1000);
  });

  $('.arrowBar').click(function() {
    $('html, body').animate({
      scrollTop: $(this).next('section').offset().top
    }, 1000);
  });

  $('.arrowBar.up').unbind('click');
  $('.arrowBar.up').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  var resize = (function() {
    var articles = $('.refArticle');
    var windowWidth = $('.refArticlesWrapper').innerWidth();
    var bodyWeight = $('body').innerWidth();
    if (bodyWeight == 960) {
      refCols = 3;
    } else if (bodyWeight < 600) {
      refCols = 1;
    } else {
      refCols = 2;
    }
    var articleMargin = windowWidth * 0.1;
    var articleWidth = windowWidth * (1.0 - (refCols - 1) * 0.1) / refCols;

    articles.css({'width': articleWidth, 'margin-right': articleMargin});
    $('.refArticle.last').css({'margin-right': 0});
  });

  resize();
  $(window).resize(resize);

});


