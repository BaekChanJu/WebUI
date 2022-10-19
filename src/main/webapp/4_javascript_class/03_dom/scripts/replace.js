
// window.onload = function(){	
		
  var list = document.getElementById('list');//ul에 아이디
  var pic = document.getElementById('pic'); //div에 아이디
  var del = document.getElementById('del'); //input 아이디

  // 리스트에서 선택(클릭했을 때)
  	list.onclick = function(evt){ //ul태그라 버튼정확이가아니라 그 언저리가 눌려도 이벤트가남
		var isbn =	evt.target.getAttribute('data-isbn') //속성중에 data-isbn 속성을 가져와라
		if(isbn){
			var img = document.createElement('img');
			img.src = 'images/' + isbn + '.jpg'; //.jpg 앞에는 생략되있는것임 무엇무엇마다 다르니
			img.height = 150;
			img.width = 100;
			
			
			if(pic.getElementsByTagName("img").length == 0){ //길이가 없을때가 0일때가 
			//처음이니까 if가 한번만돌아감 그다음부터는 else로 계속 덧붙혀야하니까
				pic.appendChild(img); //pic img태그가 없다면
				del.disabled = false; // 첫 사진띄우고는 삭제버튼이 돌아갈 수 있게
			}else{
				pic.replaceChild(img, pic.lastChild) //리플레이스는 바꿔버린다 - 있으면 덧붙히기
				
			}
			
		}
}


  
  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
  	//disabled 가 붙어있으면 작동이안됨 처음에 풀어주고 시작 위 if문에서
  
  	del.onclick = function(){
		pic.removeChild(pic.lastChild);
}
  
//};
