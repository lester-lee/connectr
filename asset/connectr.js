$(document).ready(function() {
    $('.nav-category').on('click', function() {
        $('.nav-category').removeClass('active-tab');
        $(this).addClass('active-tab');
        var catnum = $(this).attr('data-catnum');
        var extendID = "#extend" + catnum;
        $('.nav-extension').removeClass('show-content');
        $(extendID).addClass('show-content');
    });
});
