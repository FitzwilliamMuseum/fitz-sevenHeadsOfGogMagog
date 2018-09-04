$(document).ready(function () {
    if ($(window).width() > 1024) {
        var height = $(window).height();
        //console.log(height);
        $('.has-banner, .overlay').css('height', height);
        $(window).resize(function () {
            var height = $(window).height();
            console.log(height);
            $('.has-banner, .overlay').css('height', height);
        });
    }
    $(window).resize(function () {
        if ($(".header-image").css("display") == "none") {
            var height = $(window).height();
            $('.has-banner, .overlay').css('height', height);
        } else {
            $('.has-banner, .overlay').css('height', 'auto');
        }
    });
    $('.sub-menu').hide();
    $('.main-navigation .children').hide();
    $('.menu-item').hover(
        function () {
            $(this).children('.sub-menu').slideDown();
        },
        function () {
            $(this).children('.sub-menu').hide();
        }
    );
    $('.main-navigation li').hover(
        function () {
            $(this).children('.main-navigation .children').slideDown();
        },
        function () {
            $(this).children('.main-navigation .children').hide();
        }
    );
    $("#page").show();
    //$('.top-bar').waypoint('sticky', {
    //    direction: 'up',
    //    handler: function(direction) {
    //        alert(direction);
    //    }
    //});
    $('.panel.widget').addClass('container');
    $('.social-area li a, .social-widget a').attr('target', '_blank');
    //parallax js
    $(document).ready(function(){
        var $window = $(window);
        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            });
        });
    });

//menu transition js
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $(".navbar").addClass("navbar-scroll");
            }
            else{
                $(".navbar").removeClass("navbar-scroll");
            }
            if (scroll > 200) {
                $(".navbar").addClass("bg-test");
            }

            else{
                $(".navbar").removeClass("bg-test");
            }
        })
    })




});