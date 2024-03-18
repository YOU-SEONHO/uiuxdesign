/* 파일명 : main.js
   작성자 : 유선호
   작성일 : 2024.02.28
   속  성 : 메인페이지에서 사용된 jqeury (header 빼고) */

$(document).ready(function(){
   const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
      autoplay: {  /* 팝업 자동 실행 */
      delay: 3000,
      disableOnInteraction: true,
      },
      loop: true, /* 끝나면 처음 팝업이 다시 나옴 */
      slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
      spaceBetween: 2, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
         768: {    /* 768px 이상일때 적용 */
            slidesPerView: 3,
            spaceBetween: 4,
         },
         1280: {    /* 1280px 이상일때 적용 */
            slidesPerView: 4,
            spaceBetween: 16,
         },
      },
   })
   
   const social_swiper = new Swiper('.social .swiper', { /* 팝업을 감싼는 요소의 class명 */
      slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
      spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
         768: {    /* 768px 이상일때 적용 */
            slidesPerView: 2,
            spaceBetween: 16,
         },
         1024: {   /* 1024px 이상일때 적용 */
            slidesPerView: 2,
            spaceBetween: 17,
         },
         1280: {    /* 1280px 이상일때 적용 */
            slidesPerView: 5,
            spaceBetween: 17,
         },
      },
   });
}) //$(document).ready