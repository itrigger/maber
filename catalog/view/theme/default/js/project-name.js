$(document).ready(function() {
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });


  /*¬€œ¿ƒ¿ﬁŸ»… —œ»—Œ  Ã≈Õﬁ ƒÀﬂ —Ã≈Õ€ “≈À≈‘ŒÕ¿ ¬ ÿ¿œ ≈*/
    flag=0;
    $('#getaddress .tabs_h').click(function() {
        var tab_id=$(this).attr('id');
        tabClick(tab_id)
    });

    function tabClick(tab_id){
      if (tab_id != $('#tabs .tabs_h.active').attr('id')){
          $('#getaddress .tabs_h').removeClass('active');
          $('#getaddress .tabs').removeClass('active').css("opacity","0");
          $('#getaddress #'+tab_id).addClass('active');
          $('#getaddress .top-contact__list__input').text($('#getaddress #'+tab_id).text());
          $('#getaddress #con_'+tab_id).addClass('active').animate({opacity:"1"},500);
      }
    }
    function hideList(){
        $(".top-contact__list__input_open").animate({opacity:"0"},100).css({
            "display":"none",
            "width":"150px",
            "marginLeft":"4px"
            });
        flag = 0;
    };

    $("#getaddress").on("click", ".top-contact__list__input", function(event){
      event.stopPropagation();
      if(flag==0){
        $("#getaddress").find(".top-contact__list__input_open").css("display","block").animate({opacity:"1",width:"158px", marginLeft:"0px"},150);
        flag = 1;
      } else {
          hideList()
      }
    });
    $("#getaddress").on("click", ".tabs_h", function(event){
       event.stopPropagation();
        hideList()
    });

    $('html').click(function() {
        hideList()
    });
    /* ŒÕ≈÷ ¬€œ¿ƒ¿ﬁŸ≈√Œ —œ»— ¿*/

});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
}



$(window).load(function(){
/*    $(".img-rotator").sliderkit({
    	auto:false,
    	autospeed:3000,
    	panelbtnshover:false,
    	circular:true,
    	fastchange:true,
        panelfx:"sliding",
        panelfxspeed:1000,
        panelfxeasing:"easeOutExpo"
    });*/

});


