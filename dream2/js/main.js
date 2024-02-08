$(document).ready(function(){
    // html문서가 로딩되면 단 1번 실행

    /* 스크롤시 header 스타일 변경 */ 
    let scrolling // 스크롤 된 값
    
    function scroll_chk(){ // 함수의 선언
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){ // 스크롤 된 값이 0보다 크다면 - fixed 클래스 추가
            $('.header').addClass('fixed')
        }else{ // 0이거나 0보다 작거나 - fixed 클래스 삭제
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() // 함수의 호출

    $(window).scroll(function(){
        // 브라우저가 스크롤 될때마다 1번만 실행
        scroll_chk()
    }) // $(window).scroll

    /* pc버전시 메뉴에 오버하면 header 스타일 변경 */
    $('.header .gnb').on('mouseenter focusin', function(){
        $('.header').addClass('menu_over')
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    /* 메뉴 바로 뒤에서 로그인 버튼이 있음
       로그인 버튼에 포커스가 되면 메뉴의 오버상태를 해제 */ 
    $('.header .tnb .login').on('focusout', function(){
        $('.header').removeClass('menu_over')
    })

}) // $(document).ready