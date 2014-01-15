  <?php echo $header; ?><?php echo $column_left; ?><?php echo $column_right; ?>


  <div id="content">
  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $i=> $breadcrumb) { ?>
      <?php echo $breadcrumb['separator']; ?><?php if($i+1<count($breadcrumbs)) { ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a> <?php } else { ?><?php echo $breadcrumb['text']; ?><?php } ?>
    <?php } ?>
  </div>
    <h1> <?php echo $post['title']; ?></h1>
    <div class="box">
      <div class="box-content">
        <div class="box-news" <?php if ($post['img']) { echo 'style="min-height: ' . $min_height . 'px;"'; } ?>>
          <?php if ($post['img']) { ?>
            <a href="<?php echo $post['popup']; ?>" title="<?php echo $post['title'] ?>" data-lightbox="roadtrip"><img align="right" style="border: none; margin-left: 10px;" src="<?php echo $post['thumb']; ?>" title="<?php echo $post['title']; ?>" alt="<?php echo $post['title']; ?>" /></a>
          <?php } ?>
          <?php echo html_entity_decode($post['descr'],ENT_QUOTES,'UTF-8'); ?>
        </div>
      </div>
      <?php echo $content_bottom; ?>
    </div>
  </div>
<?php echo $footer; ?>
