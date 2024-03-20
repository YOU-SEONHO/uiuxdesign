/* 파일명 : main.js
   작성자 : 유선호
   작성일 : 2024.03.20
   속  성 : 메인페이지에서 사용된 jqeury (header 빼고) */

$(document).ready(function(){

   const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['MAIN', '나무심기', '활동소개', '활동이야기', 'FOOTER'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */

		afterLoad: function(origin, destination, direction, trigger){
			if((destination.index == 0) || (destination.index == 2)){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				console.log('흰색으로 바뀌어라');
            $('#fp-nav').attr('data-color', '')
            $('header').removeClass('black')
			}else{
            console.log('검은색으로 바뀌어라');
            $('#fp-nav').attr('data-color', 'black')
            $('header').addClass('black')
         }
		},

		responsiveWidth: 768 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});

   const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

      effect: "fade", /* fade 효과 */

      autoplay: {  /* 팝업 자동 실행 */
         delay: 3000,
         disableOnInteraction: true,
      },

      loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
   });
})