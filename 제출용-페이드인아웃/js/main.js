$(document).ready(function(){
    $('.header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
    })
    $('.header .gnb .depth1 > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.container .board .list > li').on('click', function(){
        $('.container .board .list > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.notice .layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup .close button').on('click', function(){
        $('.layer_popup').hide()
    })

    /* console 전부 지우고 저장해야함
       페이드 인아웃 효과  */
       let idx = 1
       setInterval(function(){
           /* 팝업순 1-2-3-1-2-3 */
           if(idx < 3){
               idx++
           }else{
               idx = 1
           }
           //console.log(idx)
           $('.visual ul li').removeClass('active')
           $('.visual ul li').eq(idx-1).addClass('active') /* eq - ul li만 가능*/
       }, 3000)
   })

/* console 전부 지우고 저장해야함
   슬라이드 효과  */
//    let idx = 1
//    let obj_left = 0
//    setInterval(function(){
//        if(idx < 3){
//            idx++
//        }else{
//            idx = 1
//        }
//        /* 1번 팝업 */
//        $('.visual ul li').removeClass('active')
//        $('.visual ul li').eq(idx-1).addClass('active')
//    }, 3000)
// })