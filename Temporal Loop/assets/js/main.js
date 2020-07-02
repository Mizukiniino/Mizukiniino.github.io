$(document).ready(function(){
  console.log("I'm Ready");

  $('.h-1').click(function(){
    $('.t-1').slideToggle("fast");
  });

  $('.h-2').click(function(){
    $('.t-2').slideToggle("fast");
  });

  $('.h-3').click(function(){
    $('.t-3').slideToggle("fast");
  });


// start shape popup
$('.l-morning').click(function() {
  $('.pill1').addClass('show');
});
// end shape popup

// start shape popup
$('.l-lunch').click(function() {
  $('.pill2').addClass('show');
});
// end shape popup

// start shape popup
$('.l-dinner').click(function() {
  $('.pill3').addClass('show');
});
// end shape popup

// CLOSE ANY OPEN SHAPE
$('.pill').click(function() {
  $(this).removeClass('show');
});
// CLOSE ANY OPEN SHAPE


  // 100g popup    
  $('.l-100g').click(function() {
    $('.p-100g').addClass('show');
  });

  $('.p-100g').click(function() {
    $('.p-100g').removeClass('show');
  });

  // 13 types popup
  $('.l-13types').click(function() {
    $('.p-13types').addClass('show');
  });

  $('.p-13types').click(function() {
    $('.p-13types').removeClass('show');
  });

  // 29.8g popup
  $('.l-298g').click(function() {
    $('.p-298g').addClass('show');
  });

  $('.p-298g').click(function() {
    $('.p-298g').removeClass('show');
  });

});
