//--------------------------------------swiper
// const 변수 = new Swiper('적용대상')
// const 변수 = new Swiper('적용대상', {옵션:값, 옵션:값,})
const swiper1 = new Swiper('.cloud_desc', {
    //슬라이드 진행 방향
    direction:'horizontal',
    //자동재생(기본설정3초(3000))
    autoplay:{delay:5000},
    loop:true, //기본값은 false
    // effect: 'coverflow',
    // depth: '100',
    // modifier: '0',
    // rotate: '50',
    // scale: '1',
    // slideShadows: 'true',
    // stretch: '1',
    effect: 'cards',
    perSlideRotate: '0',
    navigation:{
        nextEl:'.cloud_desc .swiper-button-next',
        prevEl:'.cloud_desc .swiper-button-prev'
    }
})
//--------------------------------------fullpage
        // $('#wrap').fullpage({
        //     scrollBar:true,
        //     scrollingSpeed:600,
        //     // //nav
        //     // navigation:true,
        //     // navigationTooltips:['소개','특징','프로젝트','연락처'],
        //     showActiveTooltip:false,
        //     // showActiveTooltip:true,
        //     // menu:'nav',
        //     // anchors:['intro','special','project','contact'],
        //     // //fullpage는 scrollTrigger와 함께 이용 불가
        //     // //fullpage(구) 제이쿼리 기능으로 애니메이션도 제이쿼리로 연결해야한다!!
        //     // onLeave:function(index, nextIndex, direction){
        //     //     console.log(index, nextIndex, direction)
        //     //     if(index==2){
        //     //         // $('.s3 h1').css('color','lightblue')
        //     //         $('.s3 h1').addClass('ani')
        //     //     }
        //     // }
        // })