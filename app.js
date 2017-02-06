	$('.menu__item').on("click", function(){
		//$(this).addClass('menu__item-active');
		//$(".menu__item").not(this).removeClass("menu__item-active");
		var a=$(this).children("a").attr("href");
		return $.scrollTo(a,500),!1
	});