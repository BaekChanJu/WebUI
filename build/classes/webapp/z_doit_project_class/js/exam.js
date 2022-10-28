$(function(){
	
	var date = new Date(); //현재 오늘의 날짜의미
	
	//년 월 일 따로 대려와서저장
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    
    //text로 클래스명 찾아서 받아온값 대입
    $(".year").text(year);
    $(".month").text(month+1);
    $(".date").text(day);
   
   


   //2번포커스
   $('#keyword').focus(function(){
		$(this).css('background' ,'url(" ")' )
	})


	$('#keyword').blur(function(){
			$(this).css('background' ,'url("../images/tab_line_bg.gif")' )
	})
	
	
	
	//////////////텝팬 이미지 변셩
	var btn1 = $('.tab_btn1 > a img');
	var btn2 = $('.tab_btn2 > a img');
	var btm3 =  $('.tab_btn3 > a img');
	
	
	btn1.click(function(){
		var src = $(this).attr('src'); //아예 src를 먼저받아옴
		$(this).attr('src', src.replace('out','over')); // 이미지 속성을 out에서 over로 변경함
		
        btn2.attr('src','images/tab_btn_2_out.gif');   // 남은 버튼은 out으로 출력
        btm3.attr('src','images/tab_btn_3_out.gif');  
    })
    
   
   	btn2.click(function(){
	var src = $(this).attr('src');
	
       $(this).attr('src', src.replace('out','over')); 
         btn1.attr('src','images/tab_btn_1_out.gif');
        btm3.attr('src','images/tab_btn_3_out.gif');  
    })
   
   
   
   btm3.click(function(){   
	var src = $(this).attr('src');
	
       $(this).attr('src', src.replace('out','over'));
       btn1.attr('src','images/tab_btn_1_out.gif');   
         btn2.attr('src','images/tab_btn_2_out.gif');
    })
	



	//탭펜
	$('#tabmenu').each(function(){
		var allDt = $(this).find('dt');
		var allDd =  $(this).find('dd');
		
		allDd.hide();
		allDd.first().show();
		allDt.css({'cursor':'pointer'});
		
		allDt.click(function(){
		
			allDd.hide();
			$(this).next().show(); // 무엇의 바로 다음요소 찾을때 사용
		
	})
	
})
	
	//4번의 슬라이더 효과
	$('#best_bg > ul').bxSlider({
		 auto: true,
     	autoControls: true,
     	stopAutoOnClick: true,
     	pager: true,
     	slideWidth: 600,
      	minSlides: 5,
      	 maxSlides: 5,
       	slideMargin: 10
		
	})
	
	
	
	//5번 로그인창 열고 닫기 기억하자  
	 //여기는 왜 css 쓰느냐 전체메뉴처럼 원래 있는 칸인데 css 란에가보면
	/* #login_f{
  width:305px;height:161px;background:url("../images/login_bg.png");
  position:absolute;left:-110px;
  top:-500px;z-index:15;padding:40px 0 0 30px; }*/
  
  //위에 보면 탑이 -로 잡혀있어서 안나오는거 그래서 이런걸 잘찾아서 확인을 해줘야함

	  $('.login_wrap > a > img').click(function(){
      $('#login_f').css("top","50px");    
        
   	})
   
   	  $('.login_close_btn > a > img').click(function(){
      $('#login_f').css("top","-200px");
      
   	})
   	
   	
   	//6번 전체메뉴 클릭시 보이게하고 닫으면 닫게하기
   	$('#total_btn > a > img').click(function(){
	  $('#total_menu').show();
   })
	
	 $('#total_close > a > img').click(function(){
      $('#total_menu').hide();
   })

	
	
	
}) //end of main
	
	
	