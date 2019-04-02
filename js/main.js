console.log("Are you a developer? Let's talk!")


// var sidebar = document.querySelector('ul');
// var hamburger = document.getElementsByClassName('menu-toggler');

// hamburger[0].addEventListener('click', function(e){
//     sidebar.classList.toggle('active');
//     e.preventDefault();
// });

$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('ul').toggleClass('active open');
    })
    
});