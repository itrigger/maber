<?php echo $header; ?>
<div id="container-outer">
  <div id="container-inner">
<?php echo $column_left; ?>

<!--<?php echo $column_right; ?>-->
<div id="content-2"><?php echo $content_top; ?>
  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $i=> $breadcrumb) { ?>
      <?php echo $breadcrumb['separator']; ?><?php if($i+1<count($breadcrumbs)) { ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a> <?php } else { ?><?php echo $breadcrumb['text']; ?><?php } ?>
    <?php } ?>
  </div>
  <h1><?php echo $heading_title; ?></h1>
  <?php if ($thumb || $description) { ?>
  <div class="category-info">
<!--    <?php if ($thumb) { ?>
    <div class="image"><img src="<?php echo $thumb; ?>" alt="<?php echo $heading_title; ?>" /></div>
    <?php } ?>-->
    <?php if ($description) { ?>
    <?php echo $description; ?>
    <?php } ?>
  </div>
  <?php } ?>
  <?php if ($categories) { ?>
  <h2><?php echo $text_refine; ?></h2>
  <div class="category-list">
    <?php if (count($categories) <= 5) { ?>
    <ul>
      <?php foreach ($categories as $category) { ?>
      <li><a href="<?php echo $category['href']; ?>" style="background: url('<?php echo $category['thumb']; ?>') no-repeat center top; "><span><?php echo $category['name']; ?></span></a></li>
      <?php } ?>
    </ul>
    <?php } else { ?>
    <?php for ($i = 0; $i < count($categories);) { ?>
    <ul>
      <?php $j = $i + ceil(count($categories) / 4); ?>
      <?php for (; $i < $j; $i++) { ?>
      <?php if (isset($categories[$i])) { ?>
      <li><a href="<?php echo $categories[$i]['href']; ?>"><img src="<?php echo $categories[$i]['thumb']; ?>"><span><?php echo $categories[$i]['name']; ?></span></a></li>
      <?php } ?>
      <?php } ?>
    </ul>
    <?php } ?>
    <?php } ?>
  </div>
  <?php } ?>
  <?php if ($products) { ?>
  <div class="product-filter">

    <div class="limit"><b><?php echo $text_limit; ?></b>
      <select onchange="location = this.value;">
        <?php foreach ($limits as $limits) { ?>
        <?php if ($limits['value'] == $limit) { ?>
        <option value="<?php echo $limits['href']; ?>" selected="selected"><?php echo $limits['text']; ?></option>
        <?php } else { ?>
        <option value="<?php echo $limits['href']; ?>"><?php echo $limits['text']; ?></option>
        <?php } ?>
        <?php } ?>
      </select>
    </div>

    <div class="sort"><b><?php echo $text_sort; ?></b>
      <select onchange="location = this.value;">
        <?php foreach ($sorts as $sorts) { ?>
        <?php if ($sorts['value'] == $sort . '-' . $order) { ?>
        <option value="<?php echo $sorts['href']; ?>" selected="selected"><?php echo $sorts['text']; ?></option>
        <?php } else { ?>
        <option value="<?php echo $sorts['href']; ?>"><?php echo $sorts['text']; ?></option>
        <?php } ?>
        <?php } ?>
      </select>
    </div>
  </div>
  <div class="product-list product-grid">
    <?php foreach ($products as $product) { ?>
    <div>
      <?php if ($product['thumb']) { ?>
      <!-- -----------------------------------  -->

      <div class="image img-rotator">
            <a href="<?php echo $product['href']; ?>" class="sliderkit-panels">
                  <!-- �������� ���������� ��������������� �������������
                  <div class="sliderkit-btn sliderkit-go-btn sliderkit-go-prev"><</div>
                  <div class="sliderkit-btn sliderkit-go-btn sliderkit-go-next">></div>
                  <!-- ------------------------------------------------- -->
                <!--<div class="sliderkit-panel">-->
                 <img src="<?php echo $product['thumb']; ?>" title="<?php echo $product['name']; ?>" alt="<?php echo $product['name']; ?>" />
                <!--</div>  -->
                <!-- �������������� ����������� � ���������, �����, ���� �� ����� -->
                <?php // foreach ($product['dop_img'] as $img) { ?>
                 <!--  <div class="sliderkit-panel">
                       <img src="<?php echo $img;?>" title="<?php echo $product['name']; ?>" alt="<?php echo $product['name']; ?>">
                   </div>-->
                <?php // } ?>
                <!-- ------------------------------------------------------------ -->
            </a>
      </div>
      <?php } ?>
      <div class="name"><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a></div>
      <div class="description"><?php echo $product['description']; ?></div>

      <?php if ($product['rating']) { ?>
      <div class="rating"><img src="catalog/view/theme/default/image/stars-<?php echo $product['rating']; ?>.png" alt="<?php echo $product['reviews']; ?>" /></div>
      <?php } ?>

    </div>
    <?php } ?>
  </div>
  <div class="pagination"><?php echo $pagination; ?></div>
  <?php } ?>
  <?php if (!$categories && !$products) { ?>
  <div class="content"><?php echo $text_empty; ?></div>
  <div class="buttons">
    <div class="right"><a href="<?php echo $continue; ?>" class="button"><?php echo $button_continue; ?></a></div>
  </div>
  <?php } ?>
  <?php echo $content_bottom; ?>
  </div>
  </div>
  </div>



<script type="text/javascript"><!--
function display(view) {

		$('.product-grid > div').each(function(index, element) {
			html = '';

			var image = $(element).find('.image').html();

			if (image != null) {
				html += '<div class="image">' + image + '</div>';
			}

			html += '<div class="name">' + $(element).find('.name').html() + '</div>';
			html += '<div class="description">' + $(element).find('.description').html() + '</div>';

			var price = $(element).find('.price').html();


			var rating = $(element).find('.rating').html();

			if (rating != null) {
				html += '<div class="rating">' + rating + '</div>';
			}


			$(element).html(html);
		});


}


//--></script>
<?php echo $footer; ?>