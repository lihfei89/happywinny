;$(function(){
	'use strict';
	
	var sidebar = $('.sidebar'), //選擇側欄
	mask = $('.mask'),
	backButton=$('.back-to-top'),
	sidebar_trigger=$("#sidebar_trigger");
	
	function showSideBar()
	{
		mask.fadeIn();
		//sidebar.animate({'right':0});
		sidebar.css('right',0);//结合transition
	}
	
	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	sidebar_trigger.on('click',showSideBar)
	mask.on('click',hideSideBar)
	
	backButton.on('click',function(){
		$('html, body').animate({
			scrollTop:0
		},800)
	})
	
	$(window).on('scroll',function(){
		
		if($(window).scrollTop()>$(window).height())
		{
			backButton.fadeIn();
		}else{
			backButton.fadeOut();
		}
		
	})
	
	$(window).trigger('scroll');
})
