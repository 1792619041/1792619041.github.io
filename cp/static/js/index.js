// 场景切换
$(".scesel_left h4").addClass("hbiao");
$(".scesel_left p").css({"color":"#333"});
$(".scesel_left").click(function(){
	$(".scesel_right h4").removeClass("hbiao");
	$(".scesel_right p").css({"color":"#888"});
	$(".scesel_left h4").addClass("hbiao");
	$(".scesel_left p").css({"color":"#333"});
	$(".sceintro_left img").attr('src','/static/index/img/scewang.png');
	$(".sceintro_right2").hide();
	$(".sceintro_right1").fadeIn(500);
})
$(".scesel_right").click(function(){
	$(".scesel_left h4").removeClass("hbiao");
	$(".scesel_left p").css({"color":"#888"});
	$(".scesel_right h4").addClass("hbiao");
	$(".scesel_right p").css({"color":"#333"});
	$(".sceintro_left img").attr('src','/static/index/img/scewen.png');
	$(".sceintro_right1").hide();
	$(".sceintro_right2").fadeIn(500);
})

// 移动端步骤切换
layui.use('carousel', function(){
	var carousel = layui.carousel;
	//建造实例
	carousel.render({
		elem: '#exprebo'
		,width: '100%' //设置容器宽度
		,arrow: 'always' //始终显示箭头
		,autoplay: false //是否自动切换
	});
	carousel.on('change(exprebo)', function(obj){
		var exprecount = obj.index + 1;
		$(".expertip"+exprecount).siblings("div").hide();
		$(".expertip"+exprecount).fadeIn(500);
	});    
});

// PC端步骤切换
$('.experul .experli').each(function(index){
	var thexper = $(this);
	thexper.click(function(){
		thexper.siblings().find("img").each(function(i){
			if($(this)[0].src.indexOf('expresel') >= 0){
				var imgsrc = $(this)[0].src.replace('expresel','expre');
				$(this).attr('src',imgsrc);
			}
		})
		var licount = index + 1;
		thexper.find("img").attr('src','/static/index/img/expresel'+licount+'.png');
		$(".experintro").find("div").eq(index).fadeIn(500);
		$(".experintro").find("div").eq(index).siblings().hide();
	})
})

// 购买产品
$('.meals .setmeal').each(function(index){
	$(this).find(".mealbtn").click(function(){
		location.href = 'https://user.scdncn.com/#/cdn/meal-buy';
	})
})

