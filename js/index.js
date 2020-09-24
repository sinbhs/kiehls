$(function(){
    
    //swiper
    var swiper = new Swiper('.swiper-container',{
        autoplay: {delay:3000},//자동 슬라이드
        pagination: {el: '.swiper-pagination', type: 'bullets', clickable :true}
    })
    
    //scroll swiper
    var scroll = new Swiper('.scroll_container',{
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
          },
    });

    //문단 말줄임
    $('.con p').dotdotdot();

    //a 이벤트 방지
    $('a').on('click',function(e){
        e.preventDefault();
        // return false;
    });
});