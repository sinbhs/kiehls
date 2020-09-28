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
        $(this).toggleClass('activeM');//메뉴 모양 변경
        $('html').toggleClass('activeM');//배경 마스크 온오프
        $('aside').animate({left:0},500);//메뉴 등장
        const menu = $('.hamburgerMenu').hasClass('activeM');//first메뉴 열린 상태
        if(menu) {//first메뉴 열린 상태
            $('aside li').eq(0).on('click',function(){
                $('aside .second').removeClass('overlay');
                $('aside .brand').addClass('overlay')
            });
            $('aside li').eq(1).on('click',function(){
                $('aside .second').removeClass('overlay');
                $('aside .prd').addClass('overlay');
            });
        } else {
            $('aside').animate({left:'-100%'},200);
            $('aside .second').removeClass('overlay');
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
        /*
        // Responsive breakpoints
        breakpoints: {
            //when window width is >= 1440px
            1440: {
                slidesPerView: 6
            }
        }
        */
      });
    /*
    //pc버전 swiper 기능 off
    var wd = $(window).width();
    var width = $(window).resize().width();
    if(width >= 1440 || wd>= 1440) {
        $('.menuCategory').removeClass('swiper-container');
        $('.menuCategory ul').removeClass('swiper-wrapper');
        $('.menuCategory ul li').removeClass('swiper-slide');
    }
    */

    // Category 선택 마다 제품 보이기
    // category 변경
    $('.menuCategory ul li').eq(0).addClass('focus');

    $('.menuCategory ul li').on('click',function(){
        $('.menuCategory ul li').removeClass('focus');
        $(this).addClass('focus');
    });
    
    // 카테고리에 따른 컨텐츠 변경
    // 모든 스킨
    $('.menuCategory ul li').eq(0).on('click',function(){
        $('.prdList li').fadeIn('fast');
        $('.category-path ol li').eq(2).text('모든 스킨');
    });
    // 클렌저&스크럽
    $('.menuCategory ul li').eq(1).on('click',function(){
        $('.prdList li').fadeOut('fast');
        $('.prdList .cleansing').fadeIn('fast');
        $('.prdList li:last-child').hide();
        $('.category-path ol li').eq(2).text('클렌저&스크럽');
    });
    // 에센스
    $('.menuCategory ul li').eq(2).on('click',function(){
        $('.prdList li').fadeOut('fast');
        $('.prdList .essence').fadeIn('fast');
        $('.prdList li:last-child').show();
        $('.category-path ol li').eq(2).text('에센스');
    });
    // 마스크
    $('.menuCategory ul li').eq(3).on('click',function(){
        $('.prdList li').fadeOut('fast');
        $('.prdList .skinMask').fadeIn('fast');
        $('.prdList li:last-child').hide();
        $('.category-path ol li').eq(2).text('마스크');
    });
    // 토너
    $('.menuCategory ul li').eq(4).on('click',function(){
        $('.prdList li').fadeOut('fast');
        $('.prdList .toner').fadeIn('fast');
        $('.prdList li:last-child').hide();
        $('.category-path ol li').eq(2).text('토너');
    });
    // 크림
    $('.menuCategory ul li').eq(5).on('click',function(){
        $('.prdList li').fadeOut('fast');
        $('.prdList .cream').fadeIn('fast');
        $('.prdList li:last-child').hide();
        $('.category-path ol li').eq(2).text('크림');
    });

    //mouseenter 자세히 보기, 장바구니 버튼
    $('.prdList li').hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });
    //장바구니 버튼 클릭
    $('.shopB').on('click',function(e){
        confirm('장바구니에 상품이 담겼습니다.');
        e.preventDefault();
    });

    //view more 누르면 나타나는 9번째 제품
    $('.viewmoreBtn').on('click',function(){
        $('.prdList li:last-child').show();
    });

    // 페이지 셀렉트
    $('.page ul li').eq(2).addClass('select');
    $('.page ul li').on('click',function(){
        $('.page ul li').removeClass('select');
        $(this).addClass('select');
    });
});