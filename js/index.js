$(function(){
    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
        // return false;
    });

    //header 마우스 이벤트 (소메뉴 제어)
    $('.sub').hide();
    $('header .gnb > li').eq(0).hover(function(){
        $('.sub_menu1').stop().slideDown();
    },function(){
        $('.sub_menu1').stop().slideUp();
    });
    $('header .gnb > li').eq(1).hover(function(){
        $('.sub_menu2').stop().slideDown();
    },function(){
        $('.sub_menu2').stop().slideUp();
    });

    //scrollTop scroll event 스크롤 이벤트 - 헤더 높이 조정, top버튼 등장
    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},700);
        var scroll = $(this).scrollTop();
        if(scroll > 90) {
            $('.scrollTop').stop().animate({opacity:1});
            $('header').addClass('scrollDown');
            $('html').addClass('scrollDown');
        } else {
            $('header').removeClass('scrollDown');
            $('html').removeClass('scrollDown');
        }
    });

    //검색 버튼
    $('header .right a img').on('click',function(){
        $('.searchBox').toggleClass('click');//서치박스 opacity 제어
        $('html').toggleClass('activeM');//마스크
        $('.searchBox .close-icon').on('click',function(){
            $('.searchBox').removeClass('click');
            $('html').removeClass('activeM');
        });
    });

    //모바일 햄버거 메뉴 이벤트
    $('.hamburgerMenu').on('click',function(){
        $(this).toggleClass('activeM');
        $('html').toggleClass('activeM');
        $('aside').animate({left:0});
        const menu = $('.hamburgerMenu').hasClass('activeM');
        if(menu) {
            $('aside').animate({left:0},300);
            $('aside li').eq(0).on('click',function(){
                $('aside .second').css({opacity:0});
                $('aside .brand').animate({opacity:1});
            });
            $('aside li').eq(1).on('click',function(){
                $('aside .second').css({opacity:0});
                $('aside .prd').animate({opacity:1});
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
            draggable:true
          },
        speed:500,
        grabCursor: true,
        //Responsive breakpoints
        breakpoints: {
            //when window width is >= 1440
            1440: {
                slidesPerView:2.5
            }
        }
    });

    //best seller focus
    $('.prd_tab li').on('click',function(){
        //메인 분류 명
        $('.prd_tab li').removeClass('focus');
        $(this).addClass('focus');
        
        let width = $(window).width();
        let wd = $(window).resize().width();
        $('.prd_tab li p').hide();

        if(wd >= 1440 || width>=1440) {
            //아래 설명
            $('.prd_tab li p').stop().slideUp();
            $(this).children('p').stop().slideDown();
        }
    });

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    

    //문단 말줄임
    $('.con p').dotdotdot();
});