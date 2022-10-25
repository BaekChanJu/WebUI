$(document).ready(function(){ //DOM이 준비가 됬을때
	
	
	$('p#intro').animate({
		padding : '20px',
		fontSize : '30px'
		
		
	},2000);
	
	//#navigation li 는 자손을의미
	$('#navigation>ul>li').hover(function(){
			$(this).animate({paddingLeft : '+=15px'},200);
		},function(){
			$(this).animate({paddingLeft : '-=15px'},200);		
					
				});
				
				
				
	//고정 퀵메뉴 원리
		$(window).scroll(function(){
			$('#navigation').css({'top' : $(document).scrollTop()});
		})			
});