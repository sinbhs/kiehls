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
        
        // 해당 카테고리 부가설명
        let width = $(window).width();
        let wd = $(window).resize().width();
        $('.prd_tab li p').hide();

        if(wd >= 1440 || width>=1440) {
            //아래 설명
            // $('.prd_tab li p').stop().slideUp(); 
            $(this).siblings().children('p').stop().slideUp(); 
            $(this).children('p').stop().slideDown();
        }

        //보이는 list 바꿈
        const idx = $(this).index();
        if(idx == 0) {
            $('.img1').attr({"src":"images/best1.png"});
            $('.img2').attr({"src":"images/bestSkin_h1.jpg"});
            $('.title1').text('울트라 페이셜 크림');
            $('.img3').attr({"src":"images/best2.png"});
            $('.img4').attr({"src":"images/bestSkin_h2.jpg"});
            $('.title2').text('크리미 아이 트리트먼트');
            $('.img5').attr({"src":"images/best3.png"});
            $('.img6').attr({"src":"images/bestSkin_h3.jpg"});
            $('.title3').text('칼렌듈라 허벌 엑스트렉트 토너');
            $('.img7').attr({"src":"images/best4.png"});
            $('.img8').attr({"src":"images/bestSkin_h4.jpg"});
            $('.title4').text('클리어리 코렉티브 다크 스팟 솔루션');
        }
        if(idx == 1) {
            $('.img1').attr({"src":"images/bestB1.jpg"});
            $('.img2').attr({"src":"images/bestBody_h1.jpg"});
            $('.title1').text('끄렘 드 꼬르');
            $('.img3').attr({"src":"images/bestB2.jpg"});
            $('.img4').attr({"src":"images/bestBody_h2.jpg"});
            $('.title2').text('크렘 드 꼬르 휘프트 바디 크림');
            $('.img5').attr({"src":"images/bestB3.jpg"});
            $('.img6').attr({"src":"images/bestBody_h3.jpg"});
            $('.title3').text('인텐시브 트리트먼트 앤 모이스처라이저');
            $('.img7').attr({"src":"images/bestB4.jpg"});
            $('.img8').attr({"src":"images/bestBody_h4.jpg"});
            $('.title4').text('배스 앤드 샤워 리퀴드 바디 클렌저');
        }
        if(idx == 2) {
            $('.img1').attr({"src":"images/besth1.jpg"});
            $('.img2').attr({"src":"images/bestHair_h1.jpg"});
            $('.title1').text('데미지 리페어링 & 리하이드레이팅 샴푸');
            $('.img3').attr({"src":"images/besth2.jpg"});
            $('.img4').attr({"src":"images/bestHair_h2.jpg"});
            $('.title2').text('아미노 애시드 샴푸');
            $('.img5').attr({"src":"images/besth3.jpg"});
            $('.img6').attr({"src":"images/bestHair_h3.jpg"});
            $('.title3').text('아르간 스무딩 오일 에센스');
            $('.img7').attr({"src":"images/besth4.jpg"});
            $('.img8').attr({"src":"images/bestHair_h4.jpg"});
            $('.title4').text('배스 앤드 샤워 리퀴드 바디 클렌저');
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