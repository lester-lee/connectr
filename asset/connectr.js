$(document).ready(function() {
    $('.nav-category').on('click', function() {

        var postings = $('.posting-wrapper');
        for (var i = 0; i < postings.length; i++) {
            postings[i].style.display = "none";
        }
        $('.nav-category').removeClass('active-tab');
        $(this).addClass('active-tab');
        var catnum = $(this).attr('data-catnum');
        var extendID = "#extend" + catnum;
        $('.nav-extension').removeClass('show-content');
        $(extendID).addClass('show-content');
    });

    $('#open-german').on('click', function() {
        var postings = $('.posting-wrapper');
        for (var i = 0; i < postings.length; i++) {
            postings[i].style.display = "none";
        }
        $('#postings-German')[0].style.display = "flex";
    });

    $('#open-math').on('click', function() {
        var postings = $('.posting-wrapper');
        for (var i = 0; i < postings.length; i++) {
            postings[i].style.display = "none";
        }
        $('#postings-Math')[0].style.display = "flex";
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

    $('#make-posting').on('click', function() {
        var postings = $('.posting-wrapper');
        for (var i = 0; i < postings.length; i++) {
            postings[i].style.display = "none";
        }
        $('#create-post')[0].style.display = "flex";
    });
});
