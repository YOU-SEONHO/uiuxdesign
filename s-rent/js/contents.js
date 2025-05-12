/* 파일명 : contents.js
   작성자 : 유선호
   작성일 : 2024.02.28
   속  성 : 각각의 콘텐츠 페이지에서 작동되는 jqeury */


$(document).ready(function(){     
   $('.cts_car .car_list > ul > li').on('click', function(){
        $('.cts_car .car_list > ul > li').removeClass('active')
        $(this).addClass('active')
   })
})