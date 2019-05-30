$(document).ready(function () {
    $('#libraries-used').hide();
    $('#read-more-btn').click('click', function(e) {
        $('#libraries-used').toggle();
        // document.getElementById('displayDiv').style.display = 'block';
        e.preventDefault();
    })
});