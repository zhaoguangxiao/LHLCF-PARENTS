function navm(){
	$('html').toggleClass('menu-open-to');	
}
function wxtc(){
	$('.wxnr').addClass('ateler');
}
function tttt(){
	$('body').removeClass('overflow');
	$('.san_ge').removeClass('hh');
}
function zxlxdk(){
	$('.zxly').addClass('ateler');
}
function zxlxgb(){
	$('.zxly').removeClass('ateler');
}
function zxlxgb(){
	$('.zxly').removeClass('ateler');
}
function zxlytc(){
	$('.zxlytc').addClass('ateler');
	$('body').addClass('modal-open');
}
function zxlygb(){
	$('.zxlytc').removeClass('ateler');
	$('body').removeClass('modal-open');
}
$(function(){
	$('.menu .san_ge').bind('click',function(){
		$(this).toggleClass('hh');	
		$('body').toggleClass('overflow');	
	});
});
function video(){
		var player = document.getElementById("player");
		if(player.play) {
			player.play();
		}
	$('.video').addClass('ateler');
	
}
function videogb(){
		var player = document.getElementById("player");
		if(player.play) {
			player.pause();
		}
	$('.video').removeClass('ateler');
}$(document).ready(function(){
	/*返回顶部*/
	$('#roll_top').hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 1000) {
			$('#roll_top').fadeIn(400);
			$('.header').addClass('nav_t');//当滑动栏向下滑动时，按钮渐现的时间
		} else {
			$('#roll_top').fadeOut(0);
			$('.header').removeClass('nav_t');//当页面回到顶部第一屏时，按钮渐隐的时间
		}
	});
	$('#roll_top').click(function () {
		$('html,body').animate({
			scrollTop : '0px'
		}, 1000);//返回顶部所用的时间 返回顶部也可调用goto()函数
	});
});