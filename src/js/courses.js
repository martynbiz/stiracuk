
$(function() {

    // initialize the course facilities carousel
    $('.course-facilities-carousel').slick({
        // infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });

    // initialize the course unistats carousel
    $('.course-unistats-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
    });

    // // initialize the course unistats carousel
    // $('.course-unistats-carousel').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerMode: true
    // });

    // // initialize the course unistats carousel
    // $('.course-test-carousel').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     variableWidth: true
    // });
});
