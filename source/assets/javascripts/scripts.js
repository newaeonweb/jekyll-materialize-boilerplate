//
// Jekyll-Materialize-Boilerplate
// Author: @newaeonweb
//

// Init Materialize javascripts
(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    

  }); // end of document ready
})(jQuery); // end of jQuery name space
