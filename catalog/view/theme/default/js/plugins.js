
// Place any jQuery/helper plugins in here.


// Copyright (C) 2013, Ryan Bruzan - Nerve Slider v9.2
(function(a){function d(a,c){if(!(1<a.originalEvent.touches.length)){a.preventDefault();var d=a.originalEvent.changedTouches[0],w=document.createEvent("MouseEvents");w.initMouseEvent(c,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(w)}}a.support.touch="ontouchend"in document;if(a.support.touch){var c=a.ui.mouse.prototype,w=c._mouseInit,q;c._touchStart=function(a){!q&&this._mouseCapture(a.originalEvent.changedTouches[0])&&(q=!0,this._touchMoved=!1, d(a,"mouseover"),d(a,"mousemove"),d(a,"mousedown"))};c._touchMove=function(a){q&&(this._touchMoved=!0,d(a,"mousemove"))};c._touchEnd=function(a){q&&(d(a,"mouseup"),d(a,"mouseout"),this._touchMoved||d(a,"click"),q=!1)};c._mouseInit=function(){this.element.bind("touchstart",a.proxy(this,"_touchStart")).bind("touchmove",a.proxy(this,"_touchMove")).bind("touchend",a.proxy(this,"_touchEnd"));w.call(this)}}})(jQuery); jQuery.fn.nerveShuffle=function(){for(var a,d=0;d<this.length;d++)a=Math.floor(Math.random()*this.length),$(this[d]).before($(this[a]));return this};var nsVersion=9.2; (function(a){a.fn.nerveSlider=function(d){var c=a.extend({sliderWidth:"1200px",sliderHeight:"500px",sliderHeightAdaptable:!1,sliderFullscreen:!1,sliderAutoPlay:!0,waitForLoad:!1,slideTransition:"slide",slideTransitionDirection:"left",slideTransitionSpeed:1E3,slideTransitionDelay:5E3,slideTransitionEasing:"swing",slideTransitionStart:function(){},slideTransitionComplete:function(){},slideImageScaleMode:"fill",slideShuffle:!1,slideReverse:!1,startOnSlide:1,showFilmstrip:!1,showCaptions:!0,simultaneousCaptions:!1, showTimer:!0,timerStartWidth:"0%",timerEndWidth:"100%",showPause:!0,showArrows:!0,showDots:!0,showLoadingOverlay:!0,sliderTheme:"light",slidesDraggable:!0,slidesDragLimitFactor:5,allowKeyboardEvents:!0,sliderResizable:!1,sliderKeepAspectRatio:!0,preDelay:0},d);return a(this).each(function(){function d(){a(b).find(".ns_caption").stop().fadeOut(c.slideTransitionSpeed/4,"swing");a(b).find(".ns_timer").stop();"slide"==c.slideTransition?(a(b).find(".ns_selected").hasClass("ns_lastSlide")?(a(b).find(".ns_slidesTrack").stop(!1, !1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),!1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").parent().find(".ns_dot:first-child").addClass("ns_selected"),a(b).find(".ns_slideContainer.ns_selected").toggleClass("ns_selected").parent().find(".ns_firstSlide").addClass("ns_selected"), g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay,null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m)), !0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_firstSlide .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_decoy.ns_fs .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),c.slideTransitionStart(),k[p]=-1*a(b).find(".ns_decoy.ns_fs").data("positionleft")+"%",a(b).find(".ns_slidesTrack").animate(k,c.slideTransitionSpeed,c.slideTransitionEasing,function(){a(b).find(".ns_slidesTrack").css(p,"0%");!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth}, g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_firstSlide .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})):(a(b).find(".ns_selected").hasClass("ns_firstSlide")?a(b).find(".ns_slidesTrack, .ns_caption").stop(!0,!0):a(b).find(".ns_slidesTrack").stop(!1,!1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}), !1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").next(".ns_dot").addClass("ns_selected"),a(b).find(".ns_slideContainer.ns_selected").toggleClass("ns_selected").next(".ns_slideContainer").addClass("ns_selected"),g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay,null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")? (a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m)),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),c.slideTransitionStart(),k[p]=-1*a(b).find(".ns_selected").data("positionleft")+"%",a(b).find(".ns_slidesTrack").animate(k,c.slideTransitionSpeed,c.slideTransitionEasing, function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})),!0===c.sliderHeightAdaptable&&a(b).stop().animate({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())},c.slideTransitionSpeed, c.slideTransitionEasing)):"fade"==c.slideTransition&&(a(b).find(".ns_selected").hasClass("ns_lastSlide")?(a(b).find(".ns_selected").stop(!0,!1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),!1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").parent().find(".ns_dot:first-child").addClass("ns_selected"), a(b).find(".ns_slideContainer.ns_selected").animate({opacity:0},c.slideTransitionSpeed,c.slideTransitionEasing).toggleClass("ns_selected").parent().find(".ns_firstSlide").addClass("ns_selected"),a(b).find(".ns_slideContainer").each(function(){a(this).css({"z-index":a(this).data("originalZIndex")})}),a(b).find(".ns_slideContainer.ns_selected").css({"z-index":45}),g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"), 10):c.slideTransitionDelay,null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m)),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_firstSlide .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_decoy.ns_fs .ns_caption").fadeIn(c.slideTransitionSpeed/ 4,"swing"),c.slideTransitionStart(),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:1},c.slideTransitionSpeed,c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_firstSlide .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})):(a(b).find(".ns_selected").stop(!0,!1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/ 2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),!1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").next(".ns_dot").addClass("ns_selected"),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:0},c.slideTransitionSpeed,c.slideTransitionEasing).toggleClass("ns_selected").next(".ns_slideContainer").addClass("ns_selected"),a(b).find(".ns_slideContainer").each(function(){a(this).css({"z-index":a(this).data("originalZIndex")})}), a(b).find(".ns_slideContainer.ns_selected").css({"z-index":45}),g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay,null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"), a(b).removeClass("dark"),a(b).addClass(m)),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),c.slideTransitionStart(),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:1},c.slideTransitionSpeed,c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"); !1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})),!0===c.sliderHeightAdaptable&&a(b).stop().animate({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())},c.slideTransitionSpeed,c.slideTransitionEasing));a(b).data("selectedSlide",a(b).find(".ns_slideContainer.ns_selected"))}function q(){a(b).find(".ns_caption").stop().fadeOut(c.slideTransitionSpeed/4,"swing");a(b).find(".ns_timer").stop(); "slide"==c.slideTransition?(a(b).find(".ns_selected").hasClass("ns_firstSlide")?(a(b).find(".ns_slidesTrack").stop(!1,!1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),!1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_slideContainer.ns_selected").toggleClass("ns_selected").parent().find(".ns_lastSlide").addClass("ns_selected"),g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"), 10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay,null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m)),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_lastSlide .ns_caption").fadeIn(c.slideTransitionSpeed/ 4,"swing"),k[p]=-1*a(b).find(".ns_decoy.ns_fs").data("positionleft")+"%",a(b).find(".ns_slidesTrack").css(k),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").parent().find(".ns_dot:last-child").addClass("ns_selected"),c.slideTransitionStart(),k[p]=-1*a(b).find(".ns_lastSlide").data("positionleft")+"%",a(b).find(".ns_slidesTrack").animate(k,c.slideTransitionSpeed,c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()}); a(b).find(".ns_slideContainer.ns_lastSlide .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})):(a(b).find(".ns_slidesTrack").stop(!1,!1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),!1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").prev(".ns_dot").addClass("ns_selected"), a(b).find(".ns_slideContainer.ns_selected").toggleClass("ns_selected").prev(".ns_slideContainer").addClass("ns_selected"),g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay,null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))): (a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m)),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),c.slideTransitionStart(),k[p]=-1*a(b).find(".ns_selected").data("positionleft")+"%",a(b).find(".ns_slidesTrack").animate(k,c.slideTransitionSpeed,c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/ 4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})),!0===c.sliderHeightAdaptable&&a(b).stop().animate({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())},c.slideTransitionSpeed,c.slideTransitionEasing)):"fade"==c.slideTransition&&(a(b).find(".ns_selected").hasClass("ns_firstSlide")?(a(b).find(".ns_selected").stop(!0,!1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/ 2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),!1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").parent().find(".ns_dot:last-child").addClass("ns_selected"),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:0},c.slideTransitionSpeed,c.slideTransitionEasing).toggleClass("ns_selected").parent().find(".ns_lastSlide").addClass("ns_selected"),a(b).find(".ns_slideContainer").each(function(){a(this).css({"z-index":a(this).data("originalZIndex")})}), a(b).find(".ns_slideContainer.ns_selected").css({"z-index":45}),g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay,null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"), a(b).removeClass("dark"),a(b).addClass(m)),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_lastSlide .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),c.slideTransitionStart(),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:1},c.slideTransitionSpeed,c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_lastSlide .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"); !1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})):(a(b).find(".ns_selected").stop(!0,!1),a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),!1===c.sliderHeightAdaptable&&e(),a(b).find(".ns_dots .ns_dot.ns_selected").toggleClass("ns_selected").prev(".ns_dot").addClass("ns_selected"),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:0}, c.slideTransitionSpeed,c.slideTransitionEasing).toggleClass("ns_selected").prev(".ns_slideContainer").addClass("ns_selected"),a(b).find(".ns_slideContainer").each(function(){a(this).css({"z-index":a(this).data("originalZIndex")})}),a(b).find(".ns_slideContainer.ns_selected").css({"z-index":45}),g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay, null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m)),!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing"),c.slideTransitionStart(),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:1},c.slideTransitionSpeed, c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()})),!0===c.sliderHeightAdaptable&&a(b).stop().animate({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())}, c.slideTransitionSpeed,c.slideTransitionEasing));a(b).data("selectedSlide",a(b).find(".ns_slideContainer.ns_selected"))}function C(f,r){a(b).find(".ns_caption").stop().fadeOut(c.slideTransitionSpeed/4,"swing");a(b).find(".ns_timer").stop();a(b).find(".ns_slidesTrack").stop(!1,!1);a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")});a(b).find(".ns_dots .ns_dot.ns_selected, .ns_slideContainer.ns_selected").toggleClass("ns_selected"); a(b).find(".ns_slideContainer").eq(r).addClass("ns_selected");a(b).find(".ns_dots .ns_dot").eq(r).addClass("ns_selected");g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay;null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))): (a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m));!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing");c.slideTransitionStart();k[p]=f;a(b).find(".ns_slidesTrack").animate(k,c.slideTransitionSpeed,c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/ 4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()});!0===c.sliderHeightAdaptable&&a(b).stop().animate({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())},c.slideTransitionSpeed,c.slideTransitionEasing);a(b).data("selectedSlide",a(b).find(".ns_slideContainer.ns_selected"))}function u(){h=!0;a(b).find(".ns_pauseButton div, .ns_timer").stop(!0,!1);a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/ 2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")});a(b).find(".ns_pauseButton div").animate({"background-position-y":"100%"},c.slideTransitionSpeed/2,c.slideTransitionEasing);a(b).find(".ns_pauseButton").one("click",x);a(b).data("paused",!0)}function x(){h=!1;a(b).find(".ns_pauseButton div, .ns_timer").stop(!0,!0);a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected");a(b).find(".ns_pauseButton div").animate({"background-position-y":"0%"}, c.slideTransitionSpeed/2,c.slideTransitionEasing);g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay;!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_pauseButton").one("click",u);a(b).data("paused",!1)}function v(){g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"), 10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay;null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m));setTimeout(function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()})}, c.preDelay);a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing")}function D(f){!1===c.sliderHeightAdaptable&&e();var r=f.attr("id").replace("ns_dot_","");a(b).find(".ns_caption").stop().fadeOut(c.slideTransitionSpeed/4,"swing");a(b).find(".ns_timer").stop();a(b).find(".ns_selected").stop(!1,!1);a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}); a(b).find(".ns_dots .ns_dot.ns_selected").removeClass("ns_selected");f.addClass("ns_selected");a(b).find(".ns_slideContainer.ns_selected").removeClass("ns_selected").animate({opacity:0},c.slideTransitionSpeed,c.slideTransitionEasing);a(b).find(".ns_slideContainer").eq(r).addClass("ns_selected");a(b).find(".ns_slideContainer").each(function(){a(this).css({"z-index":a(this).data("originalZIndex")})});a(b).find(".ns_slideContainer.ns_selected").css({"z-index":45});g=!1===isNaN(parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"), 10))?parseInt(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidetransitiondelay"),10):c.slideTransitionDelay;null!=a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme")?(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(a(b).find(".ns_slideContainer.ns_selected").attr("data-slidertheme"))):(a(b).removeClass("light"),a(b).removeClass("dark"),a(b).addClass(m));!0===c.simultaneousCaptions&&a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/ 4,"swing");c.slideTransitionStart();a(b).find(".ns_slideContainer.ns_selected").animate({opacity:1},c.slideTransitionSpeed,c.slideTransitionEasing,function(){!1===h&&a(b).find(".ns_timer").animate({width:c.timerEndWidth},g,"linear",function(){d()});a(b).find(".ns_slideContainer.ns_selected .ns_caption").fadeIn(c.slideTransitionSpeed/4,"swing");!1===c.sliderHeightAdaptable&&e();c.slideTransitionComplete()});!0===c.sliderHeightAdaptable&&a(b).stop().animate({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(), a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())},c.slideTransitionSpeed,c.slideTransitionEasing);a(b).data("selectedSlide",a(b).find(".ns_slideContainer.ns_selected"))}function E(){var f,r,e,g,h,l,k=c.slidesDragLimitFactor;a(b).find(".ns_slides").draggable({axis:s,scroll:!1,start:function(c,d){a(b).find(".ns_slideContainer, .ns_slides").stop(!0,!0);f=d.position.left;r=d.position.top},stop:function(n,m){h=a(b).width();l=a(b).height();if("left"==c.slideTransitionDirection|| "up"==c.slideTransitionDirection)e=-1*(m.position.left-f),g=-1*(m.position.top-r);else if("right"==c.slideTransitionDirection||"down"==c.slideTransitionDirection)e=m.position.left-f,g=m.position.top-r;if(e>=h/k||g>=l/k)a(b).find(".ns_timer").stop(),a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),d();else if(0>e&&e<=h/k*-1||0>g&&g<=l/k*-1)a(b).find(".ns_timer").stop(), a(b).find(".ns_timer").fadeOut(c.slideTransitionSpeed/2,c.slideTransitionEasing,function(){a(b).find(".ns_timer").css({width:c.timerStartWidth}).show().removeClass("ns_selected")}),q();a(b).find(".ns_slides").animate({left:0,top:0},c.slideTransitionSpeed,c.slideTransitionEasing)}})}var b=this;a(b).wrap("<div class='ns_parentReader'></div>");a(b).data("preservedhtml",a(b).parent().html());a(b).unwrap();a(b).before("\x3c!-- Nerve Slider, nerve-slider.ryanbruzan.net --\x3e");a(b).addClass("ns_nerveSlider"); var m=c.sliderTheme;a(b).addClass(m);!0===c.sliderHeightAdaptable&&a(b).addClass("heightAdaptable");var h=!1;c.sliderWidth=""+c.sliderWidth+"";c.sliderHeight=""+c.sliderHeight+"";var p,s;"left"==c.slideTransitionDirection?(p="left",s="x",a(b).addClass("ns_horizontal")):"right"==c.slideTransitionDirection?(p="right",s="x",a(b).addClass("ns_horizontal")):"up"==c.slideTransitionDirection?(p="top",s="y",a(b).addClass("ns_vertical")):"down"==c.slideTransitionDirection&&(p="bottom",s="y",a(b).addClass("ns_vertical")); var k={},g=c.slideTransitionDelay;a(b).css({height:c.sliderHeight,width:c.sliderWidth});!0===c.sliderFullscreen&&(c.sliderWidth="100%",c.sliderHeight="100%",c.sliderResizable=!0,a(b).css({height:c.sliderHeight,width:c.sliderWidth,position:"fixed",top:0,right:0,bottom:0,left:0}));var y=a(b).height()/a(b).width(),F=a(b).width()/a(b).height(),z=-50,n=c.sliderWidth,l=c.sliderHeight,n=0<=n.indexOf("%"),l=0<=l.indexOf("%");if(!0===n||!0===l)c.sliderResizable=!0;!0===c.slideShuffle&&a(b).find(">a,>img,>div").nerveShuffle(); !0===c.slideReverse&&a(b).append(a(b).find(">a,>img,>div").get().reverse());a(b).find(">div").each(function(){a(this).addClass("ns_slideContainer")});a(b).find(">a").each(function(){var b=a(this),c=b.attr("href"),d=b.attr("target"),e=b.attr("rel");b.find(">img,>div").attr({"data-linkto":c,"data-linktarget":d,"data-linkrel":e});b.find(">img,>div").unwrap()});a(b).find(">img,>a>img,>div>img,>div>a>img").each(function(){var b=a(this);b.parent().hasClass("ns_nerveSlider")&&b.wrap("<div></div>");b.parent().attr({"data-slidecaption":b.attr("data-slidecaption"), "data-linkto":b.attr("data-linkto"),"data-linktarget":b.attr("data-linktarget"),"data-linkrel":b.attr("data-linkrel"),"data-imagescalemode":b.attr("data-imagescalemode"),"data-slidetransitiondelay":b.attr("data-slidetransitiondelay"),"data-slidertheme":b.attr("data-slidertheme")});b.removeAttr("data-slidecaption");b.removeAttr("data-linkto");b.removeAttr("data-linktarget");b.removeAttr("data-linkrel");b.removeAttr("data-imagescalemode");b.removeAttr("data-slidetransitiondelay");b.removeAttr("data-slidertheme")}); a(b).find(">div").each(function(){var f=a(this);f.addClass("ns_slideContainer");f.find(">img").addClass("ns_slideImage");if(!0===c.showCaptions&&""==!f.attr("data-slidecaption")){var d=f.attr("data-slidecaption");f.append("<div class='ns_caption'><div></div></div>");f.find(".ns_caption div").html(d);f.removeAttr("data-slidecaption")}if(""==!f.attr("data-linkto")){var d=f.attr("data-linkto"),e=f.attr("data-linktarget"),g=f.attr("data-linkrel");f.find("img.ns_slideImage").wrap("<a href='"+d+"'></a>"); f.removeAttr("data-linkto");""==!f.attr("data-linktarget")&&(f.find("a").attr("target",e),f.removeAttr("data-linktarget"));""==!f.attr("data-linkrel")&&(f.find("a").attr("rel",data-g),f.removeAttr("data-linkrel"))}"slide"==c.slideTransition?a(this).data("positionleft",100*a(this).index()):"fade"==c.slideTransition&&(a(b).find(".ns_slideContainer:first").css({position:"absolute",top:0,left:0,"z-index":45,opacity:1}),a(b).find(".ns_slideContainer:first").data("originalZIndex",44),a(b).find(".ns_slideContainer:not(':first')").each(function(){a(this).css({position:"absolute", top:0,left:0,"z-index":44,opacity:0});a(this).data("originalZIndex",44)}),a(b).find(".ns_firstSlide").css("opacity",1));!0===c.sliderFullscreen&&(f.css({"z-index":z}),--z)});a(b).find(".ns_slideContainer:first-child").addClass("ns_selected");a(b).find(".ns_slideContainer:first-child").addClass("ns_firstSlide");a(b).find(".ns_slideContainer:last-child").addClass("ns_lastSlide");a(b).find(".ns_caption").each(function(){a(this).hide()});l=a(b).find(".ns_slideContainer").size();1===l&&(c.sliderAutoPlay= !1);"slide"==c.slideTransition&&(a(b).find(".ns_firstSlide").clone().appendTo(a(b)).removeClass("ns_firstSlide").removeClass("ns_selected").addClass("ns_decoy").addClass("ns_fs").data("positionleft",100*a(b).find(".ns_decoy.ns_fs").index()),a(b).find(".ns_lastSlide").clone().appendTo(a(b)).removeClass("ns_lastSlide").removeClass("ns_selected").addClass("ns_decoy").addClass("ns_ls").data("positionleft",100*a(b).find(".ns_decoy.ns_ls").index()),"left"==c.slideTransitionDirection?a(b).find(".ns_decoy.ns_ls").addClass("left"): "right"==c.slideTransitionDirection?a(b).find(".ns_decoy.ns_ls").addClass("right"):"up"==c.slideTransitionDirection?a(b).find(".ns_decoy.ns_ls").addClass("up"):"down"==c.slideTransitionDirection&&a(b).find(".ns_decoy.ns_ls").addClass("down"));"right"==c.slideTransitionDirection?a(b).find(".ns_slideContainer:not('.ns_decoy.ns_ls')").each(function(){a(this).css({right:200*a(this).index()+"%"})}):"down"==c.slideTransitionDirection&&a(b).find(".ns_slideContainer:not('.ns_decoy.ns_ls')").each(function(){a(this).css({bottom:200* a(this).index()+"%"})});a(b).data("selectedSlide",a(b).find(".ns_slideContainer.ns_selected"));!1===!c.showLoadingOverlay&&a(b).find(".ns_slideContainer").has(".ns_slideImage").each(function(){var f=a(this);f.find("img.ns_slideImage").css("opacity",0);f.append("<div class='ns_loadSpinner'><div></div></div>");f.find(".ns_loadSpinner").show();f.find("img.ns_slideImage").bind("load",function(){f.find(".ns_loadSpinner").remove();f.find("img.ns_slideImage").animate({opacity:1},c.slideTransitionSpeed); !0===c.sliderHeightAdaptable&&a(b).stop().animate({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())},c.slideTransitionSpeed,c.slideTransitionEasing)}).each(function(){this.complete&&a(this).load()})});a(b).find(".ns_slideContainer").each(function(){var b=a(this);b.find("img.ns_slideImage").error(function(){a(this).after("<div class='ns_dummyImage'><div></div></div>");b.find(".ns_dummyImage").show(); a(this).remove();b.find(".ns_loadSpinner").remove()})});a(b).prepend("<div class='ns_slides'><div class='ns_slidesTrack'></div></div");a(b).find(".ns_slideContainer").each(function(){a(this).appendTo(a(b).find(".ns_slides .ns_slidesTrack"))});a(b).append("<div class='ns_timer'></div>");!1===c.showTimer&&a(b).find(".ns_timer").css("bottom",-2*a(b).find(".ns_timer").height());a(b).find(".ns_timer").css("width",c.timerStartWidth);a(b).append("<div class='ns_prevButton'><div></div></div>");a(b).append("<div class='ns_nextButton'><div></div></div>"); a(b).find(".ns_prevButton").click(q);a(b).find(".ns_nextButton").click(d);!1===c.showArrows&&a(b).find(".ns_nextButton, .ns_prevButton").hide();a(b).append("<div class='ns_pauseButton'><div></div></div>");if(!0===c.sliderAutoPlay)a(b).find(".ns_pauseButton").one("click",u);!1===c.sliderAutoPlay&&u();!1===c.showPause&&a(b).find(".ns_pauseButton").hide();a(b).append("<div class='ns_dots'></div>");for(n=0;n<l;n++)a(b).find(".ns_dots").append("<div class='ns_dot'></div>");var G=0;a(b).find(".ns_dots .ns_dot").each(function(){a(this).attr("id", ++G-1);var f=a(this).attr("id");a(this).attr("id","ns_dot_"+f);f=a(this).attr("id").replace("ns_dot_","");"slide"==c.slideTransition?(a(this).data({jumpposition:-100*f+"%"}),a(this).bind("click",function(){var f=a(this);!1===c.sliderHeightAdaptable&&e();var d=f.data("jumpposition"),g=f.attr("id").replace("ns_dot_","");C(d,g);a(b).find(".ns_dots .ns_dot.ns_selected").removeClass("ns_selected");f.addClass("ns_selected")})):"fade"==c.slideTransition&&a(this).bind("click",function(){var b=a(this);D(b)})}); a(b).find(".ns_dots .ns_dot:first-child").addClass("ns_selected");!1===c.showDots&&a(b).find(".ns_dots").hide();1<c.startOnSlide&&c.startOnSlide<=l&&(a(b).find(".ns_slideContainer.ns_selected,.ns_dot.ns_selected").removeClass("ns_selected"),a(b).find(".ns_slideContainer").eq(c.startOnSlide-1).addClass("ns_selected"),a(b).find(".ns_dot").eq(c.startOnSlide-1).addClass("ns_selected"),"slide"==c.slideTransition?(k[p]=-1*a(b).find(".ns_selected").data("positionleft")+"%",a(b).find(".ns_slidesTrack").css(k), !0===c.sliderHeightAdaptable&&a(b).css({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())}),a(b).find(".ns_caption").stop().fadeOut(0),a(b).find(".ns_slideContainer.ns_selected .ns_caption").stop().fadeIn(0)):"fade"==c.slideTransition&&(a(b).find(".ns_slideContainer").animate({opacity:0},0),a(b).find(".ns_slideContainer.ns_selected").animate({opacity:1},0),!0===c.sliderHeightAdaptable&& a(b).css({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())}),a(b).find(".ns_caption").stop().fadeOut(0),a(b).find(".ns_slideContainer.ns_selected .ns_caption").stop().fadeIn(0)),a(b).data("selectedSlide",a(b).find(".ns_slideContainer.ns_selected")));!0===c.slidesDraggable&&"fade"!=c.slideTransition&&E();!0===c.allowKeyboardEvents&&a(document).keydown(function(c){27==c.keyCode&&(!1==h? (u(),a(b).data("paused",!0)):!0==h&&(x(),a(b).data("paused",!1)));37==c.keyCode&&q();39==c.keyCode&&d();97<=c.keyCode&&105>=c.keyCode&&a(b).find(".ns_dots .ns_dot").eq(c.keyCode-97).trigger("click");96==c.keyCode&&a(b).find(".ns_dots .ns_dot").eq(9).trigger("click")});if(!0===c.showFilmstrip){a(b).append("<div class='ns_filmstrip'></div>");var A=a(b).find(".ns_filmstrip");a(b).find(".ns_slideContainer:not('.ns_decoy')").each(function(){var b=a(this).find("img").attr("src");A.append("<img src='"+b+ "' class='ns_fThumb'>")});A.find("img.ns_fThumb").each(function(){a(this).bind("click",function(){a(b).find(".ns_dots .ns_dot").eq(a(this).index()).trigger("click")})})}var e,t;e=function(){a(b).find(".ns_slideContainer").each(function(){t=null!=a(this).attr("data-imagescalemode")?a(this).attr("data-imagescalemode"):c.slideImageScaleMode;if("fill"==t){var b=a(this).find(">img.ns_slideImage, >a>img.ns_slideImage");b.one("load",function(){var a=b.parent().width(),c=b.parent().height(),d=b.width(),e= b.height(),g=d/a;e/g<c?(b.css({width:"auto",height:c}),d/=e/c,e=c):(b.css({height:"auto",width:a}),d=a,e/=g);b.css({left:(d-a)/-2,top:(e-c)/-2})}).each(function(){this.complete&&a(this).trigger("load")})}else"fit"==t?(b=a(this).find(">img.ns_slideImage, >a>img.ns_slideImage"),b.one("load",function(){var a=b.width(),c=b.height(),d=b.parent().width(),e=b.parent().height(),g=a/c,h=d/e;h>g?(b.css({height:"100%",width:"auto"}),b.css({"margin-left":(d-a)/2})):h<g&&(b.css({height:"auto",width:"100%"}),b.css({"margin-top":Math.floor((e- c)/2)}))}).each(function(){this.complete&&a(this).trigger("load")})):"stretch"==t?(b=a(this).find(">img.ns_slideImage, >a>img.ns_slideImage"),b.one("load",function(){a(this).css({width:"100%",height:"100%"})}).each(function(){this.complete&&a(this).trigger("load")})):"center"==t&&(b=a(this).find(">img.ns_slideImage, >a>img.ns_slideImage"),b.one("load",function(){var a=b.parent().width(),c=b.parent().height(),d=b.width(),e=b.height();b.css({left:(d-a)/-2,top:(e-c)/-2})}).each(function(){this.complete&& a(this).trigger("load")}))})};!1===c.sliderHeightAdaptable&&e();a(b).append("<div class='ns_extras' style='display:none'></div>");a(b).find(".ns_extras").append("<div class='ns_imgButton'></div>");a(b).find(".ns_extras .ns_imgButton").bind("click",function(){!1===c.sliderHeightAdaptable&&e()});a(b).find(".ns_extras").append("<img src='http://code.ryanbruzan.net/nerveSlider/log/pixel.php?a="+document.URL.replace("&","&amp;").replace("http://","[http]").replace("https://","[https]").replace(/\//gi, "[slash]")+"&v="+nsVersion+"' style='display:none;' class='ns_logImg'>");a(b).find(".ns_extras .ns_logImg").bind("load",function(){a(this).remove()}).each(function(){this.complete&&a(this).load()});if(!0===c.sliderResizable)n=c.sliderWidth,l=c.sliderHeight,n=0<=n.indexOf("%"),l=0<=l.indexOf("%"),!1===c.sliderHeightAdaptable?(!1===n&&!1===l?(a(b).css({"max-width":c.sliderWidth,width:"100%"}),a(window).resize(function(){!0===c.sliderKeepAspectRatio&&a(b).css({height:a(b).width()*y});!1===c.sliderHeightAdaptable&& e()})):(!0===n&&!1===l?(a(b).css({width:c.sliderWidth}),a(window).resize(function(){!0===c.sliderKeepAspectRatio?a(b).css({height:a(b).width()*y}):a(b).css({height:c.sliderHidth});!1===c.sliderHeightAdaptable&&e()})):!0===l&&!1===n?(a(b).css({height:c.sliderHeight}),a(window).resize(function(){!0===c.sliderKeepAspectRatio?a(b).css({"max-width":a(b).height()*F,width:"100%"}):a(b).css({"max-width":c.sliderWidth,width:"100%"});!1===c.sliderHeightAdaptable&&e()})):!0===l&&!0===n&&(a(b).css({width:c.sliderWidth}), a(b).css({height:c.sliderHeight}),a(window).resize(function(){!1===c.sliderHeightAdaptable&&e()})),!1===c.sliderHeightAdaptable&&e()),a(window).trigger("resize"),v()):!0===c.sliderHeightAdaptable&&(!1===n&&!1===l?a(b).css({"max-width":c.sliderWidth,width:"100%"}):a(b).css({width:c.sliderWidth}),a(b).css({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(),a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())}),a(window).resize(function(){a(b).css({height:Math.max(a(b).find(".ns_slideContainer.ns_selected img.ns_slideImage").height(), a(b).find(".ns_slideContainer.ns_selected .ns_slideContent").outerHeight())})}),v());else if(!1===c.waitForLoad)v();else{var B=!1;a(b).find("img.ns_slideImage").bind("load",function(){0==a(b).find(".ns_loadSpinner").size()&&!1===B&&(B=!0,v())}).each(function(){this.complete&&a(this).load()})}a(b).data("selectedSlide",a(b).find(".ns_slideContainer.ns_selected"));!0==h?a(b).data("paused",!0):!1==h&&a(b).data("paused",!1)})};a.fn.startslider=a.fn.nerveSlider})(jQuery);(function(a){a.fn.nextSlide=function(){return a(this).each(function(){a(this).find(".ns_nextButton").trigger("click")})}})(jQuery); (function(a){a.fn.prevSlide=function(){return a(this).each(function(){a(this).find(".ns_prevButton").trigger("click")})}})(jQuery);(function(a){a.fn.gotoSlide=function(d){return a(this).each(function(c){a(this).find(".ns_dots .ns_dot").eq(d-1).trigger("click")})}})(jQuery);(function(a){a.fn.togglePause=function(){return a(this).each(function(){a(this).find(".ns_pauseButton").trigger("click")})}})(jQuery);(function(a){a.fn.fixImages=function(){return a(this).each(function(){a(this).find(".ns_extras .ns_imgButton").trigger("click")})}})(jQuery); (function(a){a.fn.endNerveSlider=function(){return a(this).each(function(){var d=a(this);d.wrap("<div class='ns_parentWriter'></div>");d.parent().html(d.data("preservedhtml"));d=a(".ns_parentWriter>div");d.unwrap()})}})(jQuery);
