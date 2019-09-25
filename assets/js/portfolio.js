console.log("Enter portfolio.");

(function(){

    'use strict';

    $("#notification").show(1000).append('Sometimes there can be a glitch with the portfolio images. Just click on any filter and it should go back to normal.');
    $(".dismiss").click(function(){
        $("#notification").fadeOut("slow");
    });

    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ol.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ol.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });


})(jQuery);
