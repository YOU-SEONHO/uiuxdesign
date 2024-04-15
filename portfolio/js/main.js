/* 파일명 : main.js
   작성자 : 유선호
   작성일 : 2024.03.20
   속  성 : 메인페이지에서 사용된 jqeury (header 빼고) */

$(document).ready(function(){
   const myFullpage = new fullpage('#fullpage', {

		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['HOME', 'ABOUT', 'PORTFOLIO1', 'PORTFOLIO2', 'CONTACT'],
		showActiveTooltip: true,

		autoScrolling:true,
		scrollHorizontally: true,

		verticalCentered: true,
	
   });
})