/**
 * Created by Fredrik on 2017-03-21.
 */
window.sr = ScrollReveal({
    reset: true
});

// Customizing a reveal set
sr.reveal('.featurette', {
    duration: 1000
});

sr.reveal('.reveal', 100);

$("#current-year").html(new Date().getFullYear());

$('.nav a').on('click', function(){
    $('.navbar-collapse').collapse('hide')
});

// Show and hide tabs in "Previous work" page
$(".expand").click(function (e) {
    var target = $(this).data("target");
    if ($(target).is(":visible")) {
        $(this).html("show")
    } else {
        $(this).html("hide")
    }
    $(target).collapse("toggle");
});


// GitHub
var source = $("#github-template").html();
var template = Handlebars.compile(source);
$("#github-placeholder").html(template());

$.ajax({
    url: "https:/api.github.com/users/heekzz/repos",
    success: function (response) {
        var context = {repos: response};
        var html = template(context);
        $("#github-placeholder").html(html);

    }
});

