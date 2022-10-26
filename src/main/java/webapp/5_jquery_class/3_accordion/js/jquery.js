$(function(){
	//첫번째 DL 과 두번째 DL 을 따로 쓰고싶으면 each함수로 구분한다
	$('.accordion').each(function(){
		var allDt = $(this).find('dt'); //첫번째에 DT요소 3개 담은것
		var allDd =  $(this).find('dd');
		
		//전부다 안보이게하자 dd를
		allDd.hide(); //안보이게 하는 
		//allDd.first().show(); //첫번째만 찾아서 보여줄꺼야
		
		//올려놓으면 손가락 나오게
		allDt.css({'cursor':'pointer'});
		
		
		
		allDt.click(function(){
			allDd.hide();
			$(this).next().show(); // 무엇의 바로 다음요소 찾을때 사용
			//dt의 바로다음인 dd 룰 의미한다
			
		});
		
	
	})
	
	
	
	
	
	
})