$(function () {
    $('.design__slider').slick({
        slidesToShow: 4,
        variableWidth: true,
        centerMode: true,
        prevArrow: '<img class="arrow arrow-prev" src="images/arrow-prev.svg" alt="">',
        nextArrow: '<img class="arrow arrow-next" src="images/arrow-next.svg" alt="">'
    });
});