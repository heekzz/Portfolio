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