$(function(){
    //banner swiper
    var swiper = new Swiper('.swiper-container',{
        autoplay: {delay:3000},//자동 슬라이드
        pagination: {el: '.swiper-pagination', type: 'bullets', clickable :true}
    })
    

    //scroll swiper
    var scroll = new Swiper('.scroll_container',{
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
          }
    });


    /*
    //화면비율
    $(window).on('resize',function(){
        var wd = $(window).width();
        if(wd >= 0 && wd < 1339) {
            var scroll = new Swiper('.scroll_container',{
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false,
                }
            });
        }
        if(wd >= 1440){
            var scroll = new Swiper('.scroll_container',{
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false,
                },
                slidesPerView:3
            });
        }
    });
    */

    //문단 말줄임
    $('.con p').dotdotdot();

    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
        // return false;
    });

    //scrollTop
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    //scrollTop scroll event
    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},200);
        var scroll = $(this).scrollTop();
        if(scroll > 150) {
            $('.scrollTop').stop().animate({opacity:1});
        }
    });

    //mobile hamburgerMenu
    $('.hamburgerMenu').on('click',function(){
        $(this).toggleClass('activeM');
        $('aside').animate({left:0});
        const menu = $('.hamburgerMenu').hasClass('activeM');
        if(menu) {
            $('aside').animate({left:0},300);
        } else {
            $('aside').animate({left:'-100%'},200);
        }
        $('aside li').on('click',function(){
            $('aside .second').animate({opacity:1});
        });
    });

    //best seller focus
    $('.prd_tab li').on('click',function(){
        $('.prd_tab li').removeClass('focus');
        $(this).addClass('focus');
    });
});