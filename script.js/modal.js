
$(window).scroll(function(){
    if($(this).scrollTop()>500){
     $('#up').fadeIn(); 
    }else{
      $('#up').fadeOut();
    }  
  })
  $('#up').on('click', function(){
      $('html, body').animate({scrollTop: 0},400);
  })

  $('#button').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#phone').offset().top},500);
})

  $('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#main').offset().top},500);
})
  $('#about').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop: $('#our').offset().top},500);
  })
  $('#males').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#cat').offset().top},500);
})  
$('#females').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#cats').offset().top},500);
})

$('#kittens').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#new').offset().top},500);
  })
$('#gallery').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#photo').offset().top},500);
  })

  $('#contacts').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#phone').offset().top},500);
  })

