$(document).ready(function(){
	
	$(function(){
		 var sum = 0;
	
   $('.menuCount').change(function(){
      
      //여기서 this 는 	<select name="menu1Count" id="menu1Count" class='menuCount'> 들의 값을의미
      	//왜냐 클래스 이름이 다같음 그래서 설명을 하자면
      	//select 의 부모td 의 자식 바로 span 에 인덱스 0번째 값은 메뉴
      let menu = $(this).parent().find('span:eq(0)').attr('value');
      let price =  $(this).parent().find('span:eq(1)').attr('value');
      let count = $(this).val();
      
      if(count ==0){
		alert('1개 이상 선택해주셈');
	}else{
		sum += count * price;
		 $('#total').attr('value',sum);
	}
      	
      	let tr   = $('<tr/ class="jumun">'); //새로붙혀지는 테이블리스트의 이름이 주문임
     
      
      // 중복일때 
      let flag = false;
      let list = $('#listTable tr.jumun');
      for(let i=0; i<list.length; i++){
         if(menu==$(list[i]).find('td:eq(0)').text()){
            let Count = Number($(list[i]).find('td:eq(1)').text());
            Count += Number(count);
            $(list[i]).find('td:eq(1)').text(Count);
            
            let Price = Number($(list[i]).find('td:eq(2)').text());
            Price += Number(price) * Number(count);
            $(list[i]).find('td:eq(2)').text(Price);
            
            flag = true;
         }
      }
      
      if(!flag){
      tr.append($('<td/>').text(menu));
      tr.append($('<td/>').text(count));
      tr.append($('<td/>').text(price));
      tr.append($('<td><button class="bttn">삭제</button></td>'));
      //그래서 새로생겨지는 테이블리스트 맨끝에 버튼이 생기는거임
  
      
      $('#listTable').append(tr);
	}

		})//end 
		
		
		// (2 1 3) - 버튼을 / 클릭했을때 / 그 함수가 실행된다 
		 $('#listTable').on('click','.bttn',function() {
			//부모의 부모의 자식은 삭제버튼 개발자모드 들어가면
			//버튼의 부모는 td td의 부모는만들어 놓은 tr 거기의 자식으로 값과 카운트를찾는다
         let price = $(this).parent().parent().find('td:eq(2)').text();
         let count = $(this).parent().parent().find('td:eq(1)').text();
         sum -= price * count;
         $('#total').attr('value',sum)
         //클로즈셋 가장 가까운 가장상위의 것을의미
          $(this).closest("tr").remove();
           $('.menuCount').val('0');
            
      }); //end
      
     
         $('#btn').click(function(){
          let result = confirm("주문 하시겠습니까?");
                 if(!result){
               $('.jumun').remove();
               $('#total').attr('value',0);
               $('.menuCount').val('0');
               return false;
            }else {
               $('.jumun').remove();
               $('#total').attr('value',0);
                $('.menuCount').val('0');
               return false;
            }
            
      });//end
     
   
		
	})//end of  $(function)
	
	
})//end of $(document).ready