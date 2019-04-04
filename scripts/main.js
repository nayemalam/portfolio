
console.log("Are you a developer? Let's talk!")


// var sidebar = document.querySelector('ul');
// var hamburger = document.getElementsByClassName('menu-toggler');

// hamburger[0].addEventListener('click', function(e){
//     sidebar.classList.toggle('active');
//     e.preventDefault();
// });



$(document).ready(function () {

    // include aos framework
    $(function() {
        AOS.init();
      });

    $(window).on('load', function() {
    AOS.refresh();
    });
    
    // open the menu on mobile (add .active and .open class)
    function openMenu () {
        $(this).toggleClass('open');
        $('ul, .social-links').toggleClass('active open');
    }

    $('.menu-toggler').on('click', openMenu);

    // trigger on body to close sidenav
    $('#main').click(function() {
        if ($('ul, .social-links').hasClass('active open') || $('.menu-toggler').hasClass('open')) {
          $('ul, .social-links').toggleClass('active open');
          $('.menu-toggler').toggleClass('open');
        }
    });

    //close hamburger menu when resizing display
    $(window).resize(function (e) {
        var windowWidth = $(window).width();
        if(windowWidth > 868) {
            $('ul').removeClass('active open');
            $('.menu-toggler').removeClass('open');

        } if(windowWidth==868){
            $('.menu-toggler').removeClass('open');
        }
    });

    // add wiggle to wave emoji
    $('span#big').hover(function () {
        // $(this).attr('style', 'margin: 0 auto;');
        $(this).effect("shake", { times:2}, 1000);

    });
    
    
});

