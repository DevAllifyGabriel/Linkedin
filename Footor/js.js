$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
        $(".funcao").addid("soon");
      } else {
        $(".funcao").removeid("soon");
      }
    });
  })