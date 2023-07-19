$(document).ready(function(){
  $('.fa-bars').click(function(){
   $(this).toggleClass('fa-times');
   $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll', function(){
    $(this).removeClass('fa-times');
   $('.navbar').removeClass('nav-toggle');


   if($(window).scrollTop() > 30){
    $('.header').css({'background':'#7938d9','box-shadow': '0 .2rem .5rem rgba(0, 0, 0, .9)'});
  }else{
    $('.header').css({'background':'none','box-shadow': 'none'});
  }
  });

  $('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp();
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
  });
 
});