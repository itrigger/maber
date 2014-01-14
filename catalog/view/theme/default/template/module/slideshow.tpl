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

<!--http://www.ryanbruzan.net/work/plugins/nerve-slider-->