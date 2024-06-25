//------------------------------menu-botton
const $slide_btn = $('.slide_btn');
const $cloud_btn = $('#cloud_btn');
const $cut_btn = $('#cut_btn');
const $color_btn = $('#color_btn');
const $fusion_btn = $('#fusion_btn');
const $fairlight_btn = $('#fairlight_btn');
//----------------------------contents
const $swiper = $('.swiper');
//-------------------------------deco
const $desc_deco = $('.desc_deco');
const $deco_cloud = $('.deco_cloud');
const $deco_cut = $('.deco_cut');
const $deco_color = $('.deco_color');
const $deco_fusion = $('.deco_fusion');
const $deco_fairlight = $('.deco_fairlight');
//-----------------------------------------처음상태
$swiper.hide()
$swiper.eq(0).show()
$desc_deco.hide()
$desc_deco.eq(0).show()
$slide_btn.eq(0).addClass('menuBtnColor')
//----------------------------------------------
// $cut_btn.on('click',function(){
//     $swiper.hide()
//     $swiper.eq(1).show()
//     $desc_deco.hide()
//     $desc_deco.eq(1).show()
//     $slide_btn.removeClass('menuBtnColor')
//     $slide_btn.eq(1).addClass('menuBtnColor')
// })
$slide_btn.on('click',function(){
    $swiper.hide()
    $desc_deco.hide()
    $slide_btn.removeClass('menuBtnColor')
})
$cloud_btn.on('click',function(){
    $swiper.eq(0).show()
    $desc_deco.eq(0).show()
    $slide_btn.eq(0).addClass('menuBtnColor')
})
$cut_btn.on('click',function(){
    $swiper.eq(1).show()
    $desc_deco.eq(1).show()
    $slide_btn.eq(1).addClass('menuBtnColor')
    swiper2.destroy(true, false);
})
$color_btn.on('click',function(){
    $swiper.eq(2).show()
    $desc_deco.eq(2).show()
    $slide_btn.eq(2).addClass('menuBtnColor')
})
$fusion_btn.on('click',function(){
    $swiper.eq(3).show()
    $desc_deco.eq(3).show()
    $slide_btn.eq(3).addClass('menuBtnColor')
})
$fairlight_btn.on('click',function(){
    $swiper.eq(4).show()
    $desc_deco.eq(4).show()
    $slide_btn.eq(4).addClass('menuBtnColor')
})

