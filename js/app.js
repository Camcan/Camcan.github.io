
$(window).load(function() {
  $("#page-load").delay(800).fadeOut("slow");

});
$(document).ready(function(){
  $("#contact-btn").click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 2000);
  });
  $('#blerb')
    .mousemove(function(e){
      var moveX = (-(e.pageX)/ 30);
      var moveY = (-(e.pageY)/ 60);
      $(this).css('background-position', moveX + 'px ');
    })
    .mouseleave(function() {
      $(this).css('background-position', '0px 0px')
    });
});

