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

				$('header .gnb ul li').on('click', function(){
					$('header .gnb ul li').removeClass('on')
					$(this).addClass('on')
				 })
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

	$('.gnb li a[data-href="home"], .page a[data-href="home"]').on('click', function(){
		col_swiper.slideTo(0, 500);
	});
	$('.gnb li a[data-href="about"], .page a[data-href="about"]').on('click', function(){
		col_swiper.slideTo(1, 500);
	});
	$('.gnb li a[data-href="portfolio1"], .page a[data-href="portfolio1"]').on('click', function(){
		col_swiper.slideTo(2, 500);
		row_swiper.slideTo(0, 500);
	});
	$('.gnb li a[data-href="portfolio2"], .page a[data-href="portfolio2"]').on('click', function(){
		col_swiper.slideTo(2, 500);
		row_swiper.slideTo(1, 500);
	});
	$('.gnb li a[data-href="contact"], .page a[data-href="contact"]').on('click', function(){
		col_swiper.slideTo(3, 500);
	});
})