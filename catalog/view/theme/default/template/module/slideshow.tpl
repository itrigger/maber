<div class="slideshow">
  <div id="slideshow">
    <?php foreach ($banners as $banner) { ?>
    <div class="ns_slideContainer">
    <?php if ($banner['link']) { ?>
    <a href="<?php echo $banner['link']; ?>"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" /></a>
    <?php } else { ?>
    <img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" />
    <?php } ?>
    </div>
    <?php } ?>
  </div>
</div>
<script type="text/javascript"><!--
$(document).ready(function() {
	  //SLIDESHOW SETTINGS
	$("#slideshow").nerveSlider({
        sliderWidth: "980px",
        sliderHeight: "300px",
        slideTransitionSpeed: 1800,
        slideTransitionDelay: 5000,
        slideTransitionEasing: "easeOutExpo",
        sliderResizable: true,
        sliderTheme: "dark",
        showTimer: false,
        showPause: false
	});
});
--></script>

<!--http://www.ryanbruzan.net/work/plugins/nerve-slider

Option Name 	            Default 	    Type 	    Description
sliderWidth 	            "1200px" 	    String 	    The width of the slider. Include units.
sliderHeight 	            "500px" 	    String 	    The height of the slider. Include units.
sliderHeightAdaptable 	    false 	        Boolean 	If true, the slider will adapt to either the current slide's image height or the current slide's content height, depending on which is tallest.
sliderFullscreen 	        false 	        Boolean 	If true, sets the slider as a backgound slideshow.
sliderAutoPlay      	    true 	        Boolean 	If true, slides automatically start timed transitions.
waitForLoad         	    false 	        Boolean 	If true, slider will wait for all slides to load before beginning timed transitions.
slideTransition 	        "slide" 	    String 	    The type of transition that will occur. Allowed values: "slide" | "fade"
slideTransitionDirection 	"left" 	        String 	    The direction in which the slide transitions. Only applicable when slideTransition is set to "slide". Allowed values: "up" | "right" | "down" | "left"
slideTransitionSpeed    	1000 	        Number 	    The speed of the transition, in milliseconds.
slideTransitionDelay 	    5000 	        Number 	    The duration each slide is shown, in milliseconds.
slideTransitionEasing 	    "swing" 	    String 	    The type of easing associated with the slide transition. May require jQueryUI.
slideTransitionStart 	    function(){} 	Function 	The callback function to occur just before the transition takes place.
slideTransitionComplete 	function(){} 	Function 	The callback function to occur just after the transition takes place.
slideImageScaleMode 	    "fill" 	        String 	    The type of image sizing/positioning for each slide. Allowed values: "fit" | "fill" | "stretch" | "center" | "none"
slideShuffle 	            false 	        Boolean 	If true, all slides will be displayed in a random order. Thanks to Joao Pedro for the idea!
slideReverse 	            false 	        Boolean 	If true, all slides will be displayed in reverse order.
startOnSlide 	            1 	            Number 	    The number of the slide to begin the slideshow on. This value is not zero-based.
showFilmstrip 	            false 	        Boolean 	If true, a set of thumbnails containing the slides will be shown on hover.
showCaptions 	            true 	        Boolean 	If true, all captions will be displayed (where applicable).
simultaneousCaptions 	    false 	        Boolean 	If true, captions will appear or disappear in time with the slide transition.
showTimer 	                true 	        Boolean 	If true, a timer showing the remaining duration of the current slide will be shown.
timerStartWidth 	        "0%" 	        String 	    The starting width of the timer bar. Include units.
timerEndWidth 	            "100%" 	        String 	    The ending width of the timer bar. Include units.
showPause 	                true 	        Boolean 	If true, a pause/resume button will be shown on hover.
showArrows 	                true 	        Boolean 	If true, arrows associated with previous/next slide functions will be shown on hover.
showDots 	                true 	        Boolean 	If true, a set of dots that correspond to each slide will be shown on hover.
showLoadingOverlay 	        true 	        Boolean 	If true, a loading icon will be shown while the slide image is busy loading.
sliderTheme 	            "light" 	    String 	    The theme the buttons, dots, and timer bar will aquire. Allowed values: "light" | "dark"
slidesDraggable 	        true 	        Boolean 	If true, slides will become draggable, allowing users to drag & drop to navigate to the next/previous slide. This property is also mobile-friendly.
slidesDraggableMobileOnly 	false 	        Boolean 	If true, slidesDraggable will be overridden to "true" only if on a mobile device. Only applicable if slidesDraggable is set to "true".
slidesDragLimitFactor 	    5 	            Number 	    The amount, divided from the current slider width/height, of space the user is required to drag in order for a function to be triggered. Only applicable if slidesDraggable is set to "true".
allowKeyboardEvents 	    true 	        Boolean 	If true, the slider will listen to the keyboard keys. Left: previous | Up: previous | Right: next | Down: next | Escape: pause/resume
sliderResizable 	        true 	        Boolean 	If true, the slider will adapt to the current parent size.
sliderKeepAspectRatio 	    true 	        Boolean 	If true, the slider will resize and maintain shape. Only applicable if sliderResizable is set to "true".
preDelay 	                0 	            Number 	    The amount of time the slider waits before beginning the timer, in milliseconds.

-->