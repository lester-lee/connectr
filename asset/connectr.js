$(document).ready(function() {
    $('.nav-category').on('click', function() {
        $('.nav-category').removeClass('active-tab');
        $(this).addClass('active-tab');
        var catnum = $(this).attr('data-catnum');
        var extendID = "#extend" + catnum;
        $('.nav-extension').removeClass('show-content');
        $(extendID).addClass('show-content');
    });

    $('.searchbar').on('keyup', function() {
        var filter, list, li, i;
        filter = $(this)[0].value.toUpperCase();
        list = $(this).siblings('ul');
        li = list[0].getElementsByTagName('li');
        for (i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });
});
