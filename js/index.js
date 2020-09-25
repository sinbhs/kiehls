$(function(){
    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
        // return false;
    });

    //scrollTop scroll event 스크롤 이벤트 - 헤더 높이 조정, top버튼 등장
    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},700);
        var scroll = $(this).scrollTop();
        if(scroll > 90) {
            $('.scrollTop').stop().animate({opacity:1});
            $('header').addClass('scrollDown');
        } else {
            $('header').removeClass('scrollDown');
        }
    });

    //mobile hamburgerMenu
    $('.hamburgerMenu').on('click',function(){
        $(this).toggleClass('activeM');
        $('html').toggleClass('activeM');
        $('aside').animate({left:0});
        const menu = $('.hamburgerMenu').hasClass('activeM');
        if(menu) {
            $('aside').animate({left:0},300);
            $('aside li').on('click',function(){
            $('aside .second').animate({opacity:1});
        });
        } else {
            $('aside').animate({left:'-100%'},200);
            $('aside .second').animate({opacity:0});
        }
        
    });

    //메인 배너 banner swiper
    var swiper = new Swiper('.swiper-container',{
        autoplay: {delay:3000},//자동 슬라이드
        speed:2000,//스피드
        pagination: {el: '.swiper-pagination', type: 'bullets', clickable :true}
    })
    

    //베스트 셀러 scroll swiper
    var scroll = new Swiper('.scroll_container',{
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
          }
    });

    //best seller focus
    $('.prd_tab li').on('click',function(){
        $('.prd_tab li').removeClass('focus');
        $(this).addClass('focus');
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

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    

    //문단 말줄임
    $('.con p').dotdotdot();
});