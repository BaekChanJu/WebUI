$(function(){
	
	$('#signup>form').validate({ //validate함수 -유효성검사
		rules : {
			name : {required : true}, //필수입력값을 입력해라 - 이름
			email : {required : true,
				email : true //이메일
			},
			website : { url : true}, //url
			password : {
				minlength : 6,
				maxlength : 12
				
			},
			passconf : {equalTo : '#password'}
			//암호확인 eq로 패스워드와 같냐
		},
		succes : function(label){
			label.addClass('valid');
			label.text('성공');
		}
		//제이쿼리 라이브 러리칸에서 구문찾아서 한글로 바꿀 수 있음
	}); 
	
	//////////////////////////////// validate 역활은 끝남
	//attr벨류값 가져오기 > prop써라	
	
	
	//전체 체크박스 클릭했을때 관련된체크 박스 모두 올 클릭되게만들기
	$('.check-all').click(function(){
		//alert('d');
		//전체체크박스가 is로 :checked 가 되어있다면 을 변수에 담은거임
			//즉 전체 체크박스가 체크되있다면??
	//	var H = $('.check-all').is(':checked');
		
		// if(H){
			//체크되있다면~ $('input:checkbox') 를 체크해라 트루
		  	// $('input:checkbox').prop('checked',true);
		  	//타입가져올떄 : 클래스로 .agree 해도됨
	//	}else{
			// $('input:checkbox').prop('checked',false);
	//	}
		
		
	//개별버튼 에 값을 가져온다
	//	$('.check-all').is(':checked') 로 전체버튼이 체크가됬냐안됬냐 여부를판단하고
	//클릭이 되어있을때 checked 를 한다 라는의미
	//클릭이 안되있다면 클리안한다
	$('.agree').prop('checked', $('.check-all').is(':checked'));
		
		
	})
})