$(function(){
   
   var topDiv = $('.tabSet');//가장 최상위꺼 하나 찾아냄
   var anchors = topDiv.find('ul.tabs a');
   var panelDivs = topDiv.find('div.panels .panel');
   
   anchors.show();
   panelDivs.hide();
  
   //a태그중 on이라는 클래스를 가지고 있는 녀석을 찾아라/개발자모드 
   var lastAnchor = anchors.filter('.on');
     //그 찾은애중에  href 값을 가져와라
   var lastPanel = $(lastAnchor.attr('href'));
  
   lastPanel.show();
   
   
   
   anchors.click(function(){
      var curra = $(this);
      var currp = $(curra.attr('href'));
      
      lastPanel.hide();
      currp.show();
      
      lastAnchor.removeClass('on');
      currp.addClass('on');
      
      lastAnchor=curra;
      lastPanel = currp;
      
   });
   
   /*가장일단 최상위의 div에서 클래스 이름으로 찾아내서  topDiv 라는 변수에 먼저담는다
   최상의 topDiv 의 find 자식중에 'ul.tabs a' 테이블바 리스트 (첫번,두번) 거기를
   anchors 라는 변수에 저장한다
   동일하게 글 내용들을 최상위 부터 찾아나가서 panelDivs 변수에 저장한다 
   그럼  anchors 는 테이블봐 위 첫번쨰 두번째 세번째 거기를 의미하고
   panelDivs 는 그것들 안에있는 긴 글 내용들을 의미한다
   
   그다음 리스트 바만 보기위해서  anchors.show(); 로 보이게해주고
   아래내용들을 panelDivs.hide(); 로 안보이게 닫아둔다
   
   그다음으로
   anchors.filter('.on'); anchors 테이블바 변수에 on이라는 클래스를 찾아난다
   여기서 on은 css에서 만들어 놓은함수로 그 버튼에 색깔이 들어가게 해준다 
   그찾아온 on이라는 클래스가 있는녀석에 href 값을가져온다 즉
   on이 들어가 있는녀석을 anchors.filter('.on'); 로 찾은뒤 lastAnchor라는 변수에 담고
   그변수를 이용해서 $(lastAnchor.attr('href')); href 를 찾아내서 lastPanel 에 담는다
   그러면 결론은
   
   lastAnchor = on클래스가 담긴녀석이고
   lastPanel = on에서 href값를 포함한 녀석들이다 
     lastPanel.show(); 를 작성해주면 창이뜨자마자 첫번째의 내용까지 같이띄우게 된다
     없으면 그냥 판낼만뜸 여기서 중요한게 href 의 값은 href가 #으로 #panel1-1 이렇게
     긴글들으 아이디 값으로 지정이 되어있어서  $(lastAnchor.attr('href')); 룰담은
      lastPanel 이 변수는 각 내용들을 의미한다
      
      이어쓰기
   anchors 을 클릭했을 때 함수가 실행되고
     var curra = $(this); 값저장
      var currp = $(curra.attr('href')); 그저장된 값의 href 도 저장
   
   
     lastPanel.hide(); 안보이게해주고 
      currp.show(); 다른 첫번째 두번째 그걸 보여주게 해주고
      
      lastAnchor.removeClass('on'); on의 값들을 없애고 아래의 것이로 이동시킴으로 버튼색 변함
      currp.addClass('on');
      
      lastAnchor=curra;
      lastPanel = currp;
      마지막 교환까지
   
    */
   
});