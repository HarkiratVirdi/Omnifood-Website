$(function(){
    
$('.js--section-features').waypoint(function(direction){
    if(direction == 'down'){
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
    }
}, {

    offset: '100px;'
});



$('.js--scroll-to-plans').click(function(){

$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
})



$('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);
})

$(function(){
$('a[href*=#]:not([href=#])').click(function(){
    if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if(target.length){
            $('html, body').animate({scrollTop: target.offset().top}, "slow");
            return false;
        }
    }
})
});


 
$('.js--section-features').waypoint(function(direction){
    if(direction == 'down'){
        $('.js--section-features-row').addClass('animate__animated animate__fadeIn');
    }

}, {
    offset: '15%;'
});



$('.js--meals-showcase-2').waypoint(function(direction){
    if(direction == 'down'){
        $('.js--app-screen').addClass('animate__animated animate__fadeInUp');
    }

}, {
    offset: '15%;'
});



$('.js--works-step-3').waypoint(function(direction){
    if(direction == 'down'){
        $('.js--section-cities-row').addClass('animate__animated animate__fadeIn');
    }

});



$('.js--section-plans').waypoint(function(direction){
    if(direction == 'down'){
        $('.js--plan-box-1').addClass('animate__animated animate__pulse animate__faster');
    }

});


$('a.mobile-nav-icon').click(function(){
    var nav = $('.main-nav');
    var icon = $('.j-mobile-icon');
    var cross = $('.cross');

    nav.slideToggle(100);

    if(icon.hasClass('ion-navicon-round')){
        icon.removeClass('ion-navicon-round');
        icon.addClass('ion-close-round');
    }else{
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
    



})





});