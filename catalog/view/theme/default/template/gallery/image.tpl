<?php echo $header; ?><?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content"><?php echo $content_top; ?>
  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>
 
  <div class="box">
  <div class="box-heading"><?php echo $heading_title; ?></div>
  <div class="box-content">
  
  <?php if ($images) { ?>
    
    <table class="table_album">
      <?php for ($i = 0; $i < sizeof($images); $i = $i + 4) { ?>
      <tr>
        <?php for ($j = $i; $j < ($i + 4); $j++) { ?>
        <td class="td_album_image">
	        <?php if (isset($images[$j])) { ?>
	          <a href="<?php echo $images[$j]['popup']; ?>" title="<?php echo $heading_title; ?>" data-lightbox="roadtrip"><img src="<?php echo $images[$j]['thumb']; ?>" title="<?php echo $heading_title; ?>" alt="<?php echo $heading_title; ?>" id="image" /></a><br />
	          <a href="<?php echo $images[$j]['href']; ?>" style="text-decoration:none;"><?php echo $images[$j]['name']; ?></a><br />
	        <?php } ?>
        </td>
        <?php } ?>
      </tr>
      <?php } ?>
    </table>

    <?php } ?>
  
  </div>
</div>



  <?php echo $content_bottom; ?></div>
<?php echo $footer; ?>