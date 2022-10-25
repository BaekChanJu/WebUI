$(document).ready(function(){
	
	$(function(){
		 var sum = 0;
	
   $('.menuCount').change(function(){
      
      let menu = $(this).parent().find('span:eq(0)').attr('value');
      let price =  $(this).parent().find('span:eq(1)').attr('value');
      let count = $(this).val();
      sum+= count*price;
      $('#total').attr('value',sum);
      
      let tr   = $('<tr/ class="jumun">');
      
      tr.append($('<td/>').text(menu));
      tr.append($('<td/>').text(count));
      tr.append($('<td/>').text(price));
      tr.append($('<td><button class="bttn">삭제</button></td>'));
      
      $('#listTable').append(tr);
	
		})//end 
		
		
		 $('#listTable').on('click','.bttn',function() {
			//부모의 부모의 자식은 삭제버튼 개발자모드 들어가면
			//버튼의 부모는 td td의 부모는만들어 놓은 tr 거기의 자식으로 값과 카운트를찾는다
         let price = $(this).parent().parent().find('td:eq(2)').text();
         let count = $(this).parent().parent().find('td:eq(1)').text();
         sum -= price * count;
         $('#total').attr('value',sum)
         //클로즈셋 가장 가까운 가장상위의 것을의미
          $(this).closest("tr").remove();
            
      }); //end
      
         $('#btn').click(function(){
          let result = confirm("주문 하시겠습니까?");
                 if(!result){
               $('.jumun').remove();
               $('#total').attr('value',0);
               return false;
            }else {
               $('.jumun').remove();
               $('#total').attr('value',0);
               return false;
            }
      });//end


		
		
		
		
	})//end of  $(function)
	
	
})//end of $(document).ready