$(document).ready(function() {
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');

}

$(window).load(function(){
    $(".img-rotator").sliderkit({
    	auto:false,
    	autospeed:3000,
    	panelbtnshover:false,
    	circular:true,
    	fastchange:true,
        panelfx:"sliding",
        panelfxspeed:1000,
        panelfxeasing:"easeOutExpo"
    });

});