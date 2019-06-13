console.log("Enter about.");

$(document).ready(function () {
    $('#libraries-used').hide();
    $('#read-more-btn').click('click', function(e) {
        $('#libraries-used').toggle();
        // document.getElementById('displayDiv').style.display = 'block';
        e.preventDefault();
    });

    $('#position1').hide();
    $('#work1-btn').click('click', function(e) {
        $('#position1').toggle();
        e.preventDefault();
    });

    $('#position2').hide();
    $('#work2-btn').click('click', function(e) {
        $('#position2').toggle();
        e.preventDefault();
    });

    $('#position3').hide();
    $('#work3-btn').click('click', function(e) {
        $('#position3').toggle();
        e.preventDefault();
    });

});