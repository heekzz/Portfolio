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





// GitHub -- WARNING: SYNCHRONOUS!!
var source = $("#github-template").html();
var template = Handlebars.compile(source);
$("#github-placeholder").html(template());
var repositories = [];
$.ajax({
    url: "https:/api.github.com/users/heekzz/repos",
    async: false,
    success: function (response) {
        for (var i = 0; i < response.length; i++) {
            var repo = {
                name: response[i].name,
                description: response[i].description,
                html_url: response[i].html_url
            };
            repositories.push(repo);
        }
        var context = {repos: repositories};
        var html = template(context);
        $("#github-placeholder").html(html);
    }
});

$(".expand").click(function (e) {
    var target = $(this).data("target");
    if ($(target).is(":visible")) {
        $(this).html("show")
    } else {
        $(this).html("hide")
    }
    $(target).collapse("toggle");
});
