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

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    //Category 메뉴 swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween:0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

    //Category 선택 마다 제품 보이기
    $('.swiper-slide').eq(0).addClass('focus');
    $('.swiper-slide').on('click',function(){
        $('.swiper-slide').removeClass('focus');
        $(this).addClass('focus');
    });
});