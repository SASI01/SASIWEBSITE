$(document).ready(function () {
    var scrollPos = function () {
        console.log('scroll top', $(this).scrollTop());
    }
    //   setInterval(scrollPos, 1000);

    $('.navbar').stop().animate({ backgroundColor: 'white' }, 5000);

    if ($(this).scrollTop() > 500) {
        $('.navbar').addClass('bg-white');
    }
    // Transition effect for navbar 
    $(window).scroll(function () {
        console.log('scroll', 'scroll');
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 500) {
            //    $('.navbar').addClass('bg-white');
            $('.navbar').stop(true, true).animate({ backgroundColor: 'white' }, 5000);
        } else {
            //   $('.navbar').removeClass('bg-white');
            $('.navbar').stop(true, true).animate({ backgroundColor: 'transparent' }, 5000);
        }
    });
});