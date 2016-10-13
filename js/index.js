$(function(){
	//切换图
	var mySwiper = new Swiper('.swiper-container',{
		direction: 'vertical',//设定轮播是垂直
		
		pagination: '.swiper-pagination',//出现分页器

		// autoplay: 5000,//设定自动轮播

		loop: true,
		
		onInit: function(swiper){
			swiperAnimateCache(swiper);//隐藏动画元素
			swiperAnimate(swiper);//初始化完成开始的动画
		},
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper);//每个slide切换结束的时候也运行当前的slide动画
		}
	});

	//音乐

	$('#music').on('tap', function(){
		var oAudio = $('audio',this)[0];//jq对象转为dom对象
		if(oAudio.paused){
			oAudio.play();
			$('.ico_music').addClass('on');
			$('.fly').show();

		}else{
			oAudio.pause();
			$('.ico_music').removeClass('on');
			$('.fly').hide();

		}
	});
	// $('#music').click(function() {
	// 	console.log('1');
	// })
})