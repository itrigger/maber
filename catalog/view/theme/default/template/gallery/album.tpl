<?php echo $header; ?><?php echo $column_left; ?><?php echo $column_right; ?>
<div id="content"><?php echo $content_top; ?>
  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $i=> $breadcrumb) { ?>
      <?php echo $breadcrumb['separator']; ?><?php if($i+1<count($breadcrumbs)) { ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a> <?php } else { ?><?php echo $breadcrumb['text']; ?><?php } ?>
    <?php } ?>
  </div>
 
  <div class="box">
  <div class="box-heading"><?php echo $heading_title; ?></div>
  <div class="box-content">
  <?php if ($albums) { ?>
       
        <table class="table_album">
          <?php for ($i = 0; $i < sizeof($albums); $i = $i + 4) { ?>
          <tr>
            <?php for ($j = $i; $j < ($i + 4); $j++) { ?>
	            <td class="td_album">
	              <?php if (isset($albums[$j])) { ?>
	              <div class="album">
	              	<a href="<?php echo $albums[$j]['href']; ?>"><img src="<?php echo $albums[$j]['thumb']; ?>" title="<?php echo $albums[$j]['name']; ?>" alt="<?php echo $albums[$j]['name']; ?>" /></a>
	              </div>
	              <a href="<?php echo $albums[$j]['href']; ?>" class="album_name"><?php echo $albums[$j]['name']; ?></a><br />
	              <p class="album_date_added"><?php echo $albums[$j]['date_added'][0]; ?></p>
	              <?php } ?>
	            </td>
            <?php } ?>
          </tr>
          <?php } ?>
        </table>
        <div class="pagination"><?php echo $pagination; ?></div>
        <?php } ?>
  </div>
</div>
 
  <?php echo $content_bottom; ?></div>
<?php echo $footer; ?>
