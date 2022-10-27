$(function(){
	
	//a의 속성값으로 가져온것임 속성값은 [] 안에 담기가능 
		//2개뿐이니 first last 로도 됬음
	$('a[rel="prettyPopin"]:eq(0)').prettyPopin({
		width:500
	});
	
	
	$('a[rel="prettyPopin"]:eq(1)').prettyPopin({
		width:500,
		 
		//속성명 : 값
			//이번엔 값에 함수를 넣어볼까 (위 위드랑 같은 의미임) 
		callback : function(){
			alert('팝업이 닫힙니다');
		} //프리티 팝인이 닫힘 알아서 만들어줬었음
		
	});
	
	
	
	
})