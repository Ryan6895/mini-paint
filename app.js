$('document').ready(function(){

  var $box = $('.box');

  $box.on('click', function() {
    $(this).addClass(color);
  });

  $box.on('dblclick', function() {
    $(this).removeClass(color);
  });

  $('#reset').on('click', function() {
    $box.removeClass('white red blue green yellow');
  });

  var color = 'white';

  $('#red').on('click', function() {
    color = 'red' ;
  });

  $('#blue').on('click', function() {
    color = 'blue' ;
  });

  $('#green').on('click', function() {
    color = 'green' ;
  });

  $('#yellow').on('click', function() {
    color = 'yellow' ;
  });

  $('#white').on('click', function() {
    color = 'white' ;
  });

});
