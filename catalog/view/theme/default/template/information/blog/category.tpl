
  <?php echo $header; ?>
  <?php echo $column_left; ?>
  <?php echo $column_right; ?>

  <div id="content">
  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $i=> $breadcrumb) { ?>
      <?php echo $breadcrumb['separator']; ?><?php if($i+1<count($breadcrumbs)) { ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a> <?php } else { ?><?php echo $breadcrumb['text']; ?><?php } ?>
    <?php } ?>
  </div>
    <h1> <?php echo $cat['title']; ?> </h1>
    <div class="box">
      <div class="box-content">
        <?php foreach ($posts as $post) { ?>
          <div class="box-post">
            <a href="<?php echo $post['href']; ?>"><?php echo $post['title']; ?></a>
    <!--  <?php
        $date_created = strtotime($cat['created']);
        $date_created_time = date("H:i:s",$date_created);
        $date_year = date("Y/m/d",$date_created);
      ?>
      <div class="blog_date"> <?php echo $date_year; ?> <span class="blog_date_time"> <?php echo $date_created_time; ?> </span></div>-->
            <p><?php echo $post['anons']; ?></p>

          </div>
        <?php } ?>

        <?php if( ! empty($pagination) ): ?>
        <div class="pagination">
          <?php echo $pagination; ?>
        </div>
        <?php endif; ?>
      </div>
      <?php echo $content_bottom; ?>
    </div>
  </div>
<?php echo $footer; ?>
