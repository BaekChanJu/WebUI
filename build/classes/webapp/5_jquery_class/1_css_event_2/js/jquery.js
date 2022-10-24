$(function(){
	$(".header ul.menu > li > a > img" ).hover(function(){
		var src = $(this).attr('src'); //아예 src를 받아온다 
		//어떤버튼에 어떤사진 어떤버튼에 어떤사진이기 때문에
			$(this).attr('src',src.replace('_off','_on'));
		
	},function(){
		var src = $(this).attr('src');
			$(this).attr('src',src.replace('_on','_off'));

	});
	
	});





/*$('.menu').click(function(){
	$('.rollover').hover(function(){
		$(this).attr('src','imgs/menu01_on.png')
	},function(){
		$(this).removeAttr('src','imgs/menu01_off.png')
	})
})*/