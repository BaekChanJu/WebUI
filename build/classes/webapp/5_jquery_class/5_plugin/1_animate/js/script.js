$(function(){
	
	$('#bio h3').css({'cursor' : 'pointer'});
	
	
	$('#bio div').hide(); //내용이없어져야함 
	$('#bio div').first().show();
	
	//이름을 클릭하면 해당사진만 나오도록
	$('#bio h3').click(function(){
		$(this).next().show(); //넥스트 없어도 될듯
		
		//새로 이징연결하면 애니메이트 3번째 매개변수 넣을 수있음
		//원래는 없었지만 이징연결했더니
		$(this).next().animate({'height' : 'toggle'},2000,'easeOutBounce');
	})
	
	
	
	
})//end starter