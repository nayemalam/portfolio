
console.log("Are you a developer? Let's talk!")


// var sidebar = document.querySelector('ul');
// var hamburger = document.getElementsByClassName('menu-toggler');

// hamburger[0].addEventListener('click', function(e){
//     sidebar.classList.toggle('active');
//     e.preventDefault();
// });


// js


//  jQuery
$(document).ready(function () {


    $(function() {
        AOS.init();
      });

    $(window).on('load', function() {
    AOS.refresh();
    });
    
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('ul').toggleClass('active open');
    })

    $('span#big').hover(function () {
        // $(this).attr('style', 'margin: 0 auto;');

        $(this).effect("shake", { times:2}, 1000);

    });
    
    
});

