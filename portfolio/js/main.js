/* 파일명 : main.js
   작성자 : 유선호
   작성일 : 2024.03.20
   속  성 : 메인페이지에서 사용된 jqeury (header 빼고) */

$(document).ready(function(){
	const col_swiper = new Swiper('.swiperV', { /* 팝업을 감싼는 요소의 class명 */
		direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		allowTouchMove: false,
		keyboard: true,
		ally: true,
		on: {
			slideChange: function(){
				if((this.realIndex == 1) || (this.realIndex == 2)) {
					$('header').addClass('black')
				}else{
					$('header').removeClass('black')
				}
			}
		},
	});

	const row_swiper = new Swiper('.swiperH', { /* 팝업을 감싼는 요소의 class명 */
		direction: "horizontal",
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		allowTouchMove: false,
		keyboard: true,
		ally: true,
		nested: true,
	});
})