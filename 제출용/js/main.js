$(document).ready(function(){
    $('.header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
    })
    $('.header .gnb .depth1 > li:last-child > ul > li:last-child > a').on('mouseenter focusin', function(){
        $('.header .gnb .depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.containner .board .list > li').on('click', function(){
        $('.container .board .list > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.notice .leyar_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup .close button').on('click', function(){
        $('.layer_popup').hide()
    })

    let idx = 1
    let obj_left = 0
    setInterval(function(){
        if(idx > 3){
            idx++
        }else{
            idx = 1
        }
        /* 1번 팝업 = left 0 
           2번 팝업 = left -1200
           3번 팝업 = left -2400 */
        obj_left = -(inx-1)*1200
            
        $('visual ul').animate({
            left : obj_left
        }, 500)
    }, 1000)


})