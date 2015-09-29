$(document).ready(function() {
    var my_hash = window.location.hash.substring(1);

    var id = '#' + my_hash;
    $(id).addClass('highlight');
});

