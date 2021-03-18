$(document).ready(function() {
  var $toggleButton = $('.toggle-button');
  
  // Hamburger button
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
  });
});