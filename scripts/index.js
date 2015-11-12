$(function(){
	if($(window).width() >= 560){
		$(".pc").show();
		$(".moblie").hide();
		//font-size
	}else{
		$(".pc").hide();
		$(".moblie").show();
		if ($(window).width()<320||$(window).width()==320){
		    $('html').css("font-size",($(window).width()-320)*0.195+62.5+"%");
		    $(".ano_con").css("margin-left","30px");
		}else{
		    $('html').css("font-size",($(window).width()-375)*0.166+62.5+"%");
		};
		//resize
		$(window).resize(function(){
		    if ($(window).width()<320||$(window).width()==320){
		        $('html').css("font-size", 
		            ($(this).width()-320)*0.195+62.5+"%");
		    }else{
				$('html').css("font-size",($(window).width()-375)*0.166+62.5+"%");
			}
		});
	}
	//手机
	$(".moblie,.dialog-con").css({width:$(window).width()+"px",height:$(window).height()+"px"});
	//自定义位置以及尺寸
	$(".domcu").css("margin-top","-" + $(".domcu").height() / 2 + "px");
	for(var img = 0;img < $(".dom-img").length;img++){
		$(".dom-img").eq(img).css("margin-top","-" + $(".dom-img").eq(img).height() / 2 + "px");
	}
	//手机
	phone();
	function phone(){
		$(".in-row").css({width:3 * $(window).width()+"px"});
		$(".row-one").css({width:$(window).width()+"px"});
		for(var i = 0;i<2;i++){
			$(".list a").eq(i).click(function(){
				$(".in-row").css({transform:"translateX(-"+$(window).width() * ($(this).index()+1)+"px)"});
				if($(this).index() == 0){
					timeout();
				}
			})
		};
		for(var j = 0;j<3;j++){
			$(".dom-link a").eq(j).click(function(){
				$(".dialog-con").eq($(this).index()).show();
			})
		};
		$(".close-mob").click(function(){
			$(".dialog-con").hide();
		})
	};
	//鼠标滑动平台图标显示二维码
	platfrom();
	function platfrom(){
		$(".platform-link a").mouseover(function(){
			var platform_img = $(".platform-img").children().eq($(this).index()).slideDown(150);
			$(this).mouseout(function(){
				platform_img.hide();
			})
		})
	};

	//鼠标经过导航提示显示
	nav();
	function nav(){
		$(".nav_link").mouseover(function(){
			var nav_text = $(this).siblings(".nav_text").slideDown(100);
			$(this).mouseout(function(){
				nav_text.hide();
			})
		})
	};

	//文字旋转事件
	font();
	function font(){
		setTimeout(function(){
			$(".intro_font").addClass("intro_ani");
		},300)
	};

	//滚动条判断事件
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		console.log(scroll);
		//导航栏事件
		if(scroll>=10){
			//导航栏
			$(".logo img").css({height:"30px",width:"75px"});
			$(".nav_content").css("padding-top","0");
			$(".platform").css("padding-top","5px");
		}else{
			$(".logo img").css({height:"60px",width:"150px"});
			$(".nav_content").css("padding-top","15px");
			$(".platform").css("padding-top","20px");
		}
		//大圆盘动画
		if(scroll>=500){
			clip();
			$(".fly_font").addClass("deg")
			$(".setion_center").addClass("rotate");
			$(".aim_left").css("left","-60px");
			$(".aim_right").css("right","-60px");
		}else{
			$(".fly_font").removeClass("deg")
			$(".setion_center").removeClass("rotate");
			$(".radius_con").css({transform:"scale(0)"});
			$(".aim_left").css("left","-120px");
			$(".aim_right").css("right","-120px");
		}
		if(scroll>=900){
			canvas();
		};
		if(scroll>=1220){
			$(".help_link_one").removeClass("tran_right");
			$(".help_link_two").removeClass("tran_left");
		}else{
			$(".help_link_one").addClass("tran_right");
			$(".help_link_two").addClass("tran_left");
		}
		if(scroll>=1600){
			if(!$(".gallery_list").is(":animated")){
				$(".gallery_list").animate({left:"-7300px"},70000,'linear',function(){
					$(this).animate({left:"0px"},70000,'linear');
				});
			}else{
				return false;
			}
		}
	});
	$(".gallery_list li").mouseover(function(){
		$(this).parent().stop();
	});
	$(".gallery_list li").mouseout(function(){
			var posit = 7300 - Math.abs($(".gallery_list").position().left) - 600;
			var time = posit / (7300 / 70000);
			console.log(posit);
			console.log(time);
			$(".gallery_list").animate({left:"-"+posit+"px"},time,'linear',function(){
				$(this).animate({left:"0px"},70000,'linear')
			});
	});

	//圆心设置
	color();
	function color(){
		var right = ["30px","30px","60px","60px"];
		for(var i = 0;i<right.length;i++){
			$(".setion_link").eq(i).css({bottom:right[i]});
		}
	}

	//圆心四个东西位置	
	four();
	function four(){
		var top = ["-8px","-8px","260px","260px"];
		var top1 = ["-5px","-5px","263px","263px"]
		var left = ["150px","430px","150px","430px"]
		var left1 = ["130px","640px","130px","640px"]
		var hoz_top = ["-10px","-10px","255px","255px"]
		var hoz_left = ["-50px","652px","-50px","652px"]
		var ver_top = ["15px","15px","172px","172px"];
		var ver_left = ["-10px","750px","-10px","750px"]
		for(var i = 0;i<top.length;i++){
			$(".fly_font").eq(i).css({top:top[i],left:left[i]});
			$(".radius_con").eq(i).css({top:top1[i],left:left1[i]});
			$(".hoz").eq(i).css({top:hoz_top[i],left:hoz_left[i]});
			$(".ver").eq(i).css({top:ver_top[i],left:ver_left[i]});
		}
	};
	//定义成绩文字的位置
	position();
	function position(){
		var top = ["-30px","230px","80px","70px"]
		var left = ["500px","320px","850px","100px"];
		for(var i = 0;i<top.length;i++){
			$(".able_tip").eq(i).css({top:top[i],left:left[i]});
		}
	};
	//点击按钮弹出视频
	$(".margin_button").click(function(){
		var video = $(".video");
		left(video);
	});
	 
})
 //取消弹窗插件
function left(elem){
	elem.removeClass("tran_left");
	console.log(arguments[0]);
	return elem;
};
//添加left插件
function addleft(ele){
	ele.addClass("tran_left");
	return ele;
}
//切线动画
function clip(){
	$(".hoz:odd").css({clip:"rect(0,0px,20px,0px)"});
	$(".hoz:even").css({clip:"rect(0,180px,20px,180px)"});
	setTimeout(function(){
		$(".radius_con").css({transform:"scale(1.0)"});
	},950)
};
function canvas(){
	var arcNum = Math.PI / 50 
	var textNum = 0;
	setInterval(drawArc, 10);
	function drawArc() {
	    if (textNum > 95) {
	        return false;
	}
	var $cir = $('.circle')[0].getContext('2d');
	    //        cricle
	    $cir.lineWidth = 10;
	    $cir.strokeStyle = "#FFF";
	    $cir.beginPath();
	    $cir.arc(100, 100, 80, arcNum - Math.PI / 40, arcNum + 0.010);
	    $cir.stroke();
	    $cir.closePath();
	    arcNum = arcNum + Math.PI / 50;

	    //        font
	    $cir.clearRect(75, 75, 60, 60);
	    $cir.font = "40px Arial";
	    $cir.fillStyle = "#FFF";
	    $cir.textAlign = "center";
	    $cir.beginPath();
	    $cir.fillText(textNum + "%", 100, 110, 50);
	    $cir.closePath();
	    textNum = textNum + 1;
	}
}
var time;
//部门点击事件
$(".setion_link").click(function(){
	var count = $(this).parent(".setion_block").index();
	console.log(count);
	$(".right_next").click(function(){
		count++;
		if(count>=4) count = 0;
		$(".department_row").hide();
		$(".department_row").eq(count).fadeIn(200);
	});
	$(".left_next").click(function(){
		count--;
		if(count<=0) count = 3;
		$(".department_row").hide();
		$(".department_row").eq(count).fadeIn(200);
	});
	$(".department").removeClass("margin-left");
	setTimeout(function(){$(".department_row").eq(count).fadeIn()},400)
});
//关闭按钮事件
$(".close").click(function(){
	addleft($(".dialog"));
	addleft($(".domcu"));
	$(".department").addClass("margin-left");
	$(".department_row").hide();
	clearInterval(time);
});
//报修按钮
function timeout(){
	var ten = 11;
	time = setInterval(function(){
		if(ten<2){
			$(".agree").removeAttr("disabled");
			$(".agree-link").attr("href","repair.html");
			$(".time").hide();
			return false;
		}else{
			ten--;
			$(".time").text(ten);}
	},1000)
}
$(".rep").click(function(){
	left($(".repair"));
	timeout();
});
//文档按钮
$(".dom").click(function(){
	left($(".domcu"));
});
$(".agree").click(function(){
	$(".state").addClass("tran_left");
	$(".data").removeClass("tran_left");
});
//教程事件
$(".domcu_row a").mouseover(function(){
	var index = $(this).index();
	$(".dom-img").eq(index).fadeIn();
	$(this).mouseout(function(){
		$(".dom-img").hide();
	})
});
//首页返回事件
$(".back").click(function(){
	$(".in-row").css({transform:"translateX(0)"});
	clearInterval(time);
})
