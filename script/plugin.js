//--------------------------------------swiper
// const 변수 = new Swiper('적용대상')
// const 변수 = new Swiper('적용대상', {옵션:값, 옵션:값,})
const swiper1 = new Swiper('.cloud_desc', {
    //슬라이드 진행 방향
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    effect: 'cards',
    observer: true,
    observeParents: true,
    navigation:{
        nextEl:'.cloud_desc .swiper-button-next',
        prevEl:'.cloud_desc .swiper-button-prev'
    }
})
const swiper2 = new Swiper('.cut_desc', {
    //슬라이드 진행 방향
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    effect: 'cards',
    observer: true,
    observeParents: true,
    navigation:{
        nextEl:'.cut_desc .swiper-button-next',
        prevEl:'.cut_desc .swiper-button-prev'
    }
})
const swiper3 = new Swiper('.color_desc', {
    //슬라이드 진행 방향
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    effect: 'cards',
    observer: true,
    observeParents: true,
    navigation:{
        nextEl:'.color_desc .swiper-button-next',
        prevEl:'.color_desc .swiper-button-prev'
    }
})
const swiper4 = new Swiper('.fusion_desc', {
    //슬라이드 진행 방향
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    effect: 'cards',
    observer: true,
    observeParents: true,
    navigation:{
        nextEl:'.fusion_desc .swiper-button-next',
        prevEl:'.fusion_desc .swiper-button-prev'
    }
})
const swiper5 = new Swiper('.fairlight_desc', {
    //슬라이드 진행 방향
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    effect: 'cards',
    observer: true,
    observeParents: true,
    navigation:{
        nextEl:'.fairlight_desc .swiper-button-next',
        prevEl:'.fairlight_desc .swiper-button-prev'
    }
})
// preventDefault('video')
//--------------------------------------fullpage
        $('#wrap').fullpage({
            scrollBar:true,
            scrollingSpeed:600,
            // //nav
            // navigation:true,
            // navigationTooltips:['소개','특징','프로젝트','연락처'],
            showActiveTooltip:false,
            // showActiveTooltip:true,
            // menu:'nav',
            // anchors:['intro','special','project','contact'],
            // //fullpage(구) 제이쿼리 기능으로 애니메이션도 제이쿼리로 연결해야한다!!
            // onLeave:function(index, nextIndex, direction){
            //     console.log(index, nextIndex, direction)
            //     if(index==2){
            //         // $('.s3 h1').css('color','lightblue')
            //         $('.s3 h1').addClass('ani')
            //     }
            // }
        })