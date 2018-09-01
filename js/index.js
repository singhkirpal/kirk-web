$(".field").click(function(e){

    $(this).addClass("active");

  });

 

  

  $(".field .button").click(function(e){

    e.preventDefault();

    e.stopPropagation();

    $(this).parent('.field').removeClass("active");

  });

 

  setTimeout(function(){

    $('.wrapper').toggleClass("splash");

    $('.hello').toggleClass("splash"); },

    800);

