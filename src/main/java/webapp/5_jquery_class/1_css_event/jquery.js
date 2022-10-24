

$(function(){
	
	//제이쿼리에서 on click은이렇게 아니면 그냥 click 쓰장
	$('#hideButton').on('click',function(){
		$('#intro').hide();
		
	})
	
	$('#showButton').on('click',function(){
		$('#intro').show();
		
	})
	
	$('#toggleButton').on('click',function(){
		$('#intro').toggle(); //fadeToggle, slideToggle도 있음
		
	})
	/*
	//토글을 안썻다면
		$('#toggleButton').on('click',function(){
			if($(#intro).is(':visible')){ //is 이다 아니다 visible 보여지고있는상태
				$(#intro).fadeOut(1000);
			}else{
				$(#intro).fadeIn(1000);
			}
		}
   */
   
   //이젠 테이블의 내용중 홀수행의 배경색을 지정해보자
   //celebs table.data > tbody > tr:even
   //아이디celebs 테이블의 클래스data 의 자식인 tbody 의 자식인 tr: even
   //제이쿼리 인덱스 0부터 시작함
   //홀수만 표현하고 싶다면 even을해야하고 짝수줄만 표현하고 싶으면 odd
 //  $('#celebs table.data > tbody > tr:even').css({'background' : 'lightblue'})
   
   
   //html은 구조만 만들기임
   	//css 칸에 table_striping 이라는 이미 함수가 있음 그래서  addClass 로 가져와서 사용을 더많이
    $('#celebs table.data > tbody > tr:even').addClass('table_striping');
    
    
    
    
    //마우스가 올라갔을때 배경색이 변했으면 좋겠다

    // $('#celebs tr').hover(function(){}, function(){});
    $('#celebs tr').hover(function(){
		 $(this).addClass('td_mouseover'); //tr 너무많음 이벤트가 발생한 얘만 변해야하니 this
	
		}, function(){
	 		$(this).removeClass('td_mouseover');
	 })
	 
})
    

 