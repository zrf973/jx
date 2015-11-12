$(function(){
    var math = $(window).width() / 320;
    if($(window).width()>320){
        $(".public-img").css({width: 320 * math + "px",height:130 * math + "px"})
    }
})
if ($(window).width()<320||$(window).width()==320){

    $('html').css("font-size",($(window).width()-320)*0.195+62.5+"%");
    $(".ano_con").css("margin-left","30px");
}else{
    $('html').css("font-size",($(window).width()-375)*0.166+62.5+"%");
	}
$(window).resize(function(){
    if ($(window).width()<320||$(window).width()==320){
        $('html').css("font-size",
            ($(this).width()-320)*0.195+62.5+"%");
    }else{
		$('html').css("font-size",($(window).width()-375)*0.166+62.5+"%");
	}
})