<!--<div id="sidemenu" class="box">
  <div class="box-heading"><?php echo $heading_title; ?></div>
  <div class="box-content">
    <ul class="box-category">
      <?php foreach ($categories as $category) { ?>
      <li>
        <?php if ($category['category_id'] == $category_id) { ?>
        <a href="<?php echo $category['href']; ?>" class="active"><?php echo $category['name']; ?></a>
        <?php } else { ?>
        <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
        <?php } ?>
        <?php if ($category['children']) { ?>
        <ul>
          <?php foreach ($category['children'] as $child) { ?>
          <li>
            <?php if ($child['category_id'] == $child_id) { ?>
            <a href="<?php echo $child['href']; ?>" class="active"> - <?php echo $child['name']; ?></a>
            <?php } else { ?>
            <a href="<?php echo $child['href']; ?>"> - <?php echo $child['name']; ?></a>
            <?php } ?>
          </li>
          <?php } ?>
        </ul>
        <?php } ?>
      </li>
      <?php } ?>
    </ul>
  </div>
</div>
-->


<div class="box">
  <div class="box-heading hidden"><?php echo $heading_title; ?></div>
  <div class="box-content">
    <div class="box-category">
      <ul>
        <?php foreach ($categories as $category) { ?>
          <li>
          <?php if ($category['category_id'] == $category_id) { ?>
          <a href="<?php echo $category['href']; ?>" class="active hidden"><span><?php echo $category['name']; ?></span></a>
          <?php } else { ?>
          <a href="<?php echo $category['href']; ?>" class="active hidden"><span><?php echo $category['name']; ?></span></a>
          <?php } ?>
          <?php if ($category['children']) { ?>

          <ul>
            <?php foreach ($category['children'] as $child) { ?>

             <?php
               if($child['href'] == HTTP_SERVER."akcii" or $child['href'] == HTTP_SERVER."new") {
                echo '<li class="hidden">';
              } else  echo '<li>';
              ?>


              <?php if ($child['category_id'] == $child_id) { ?>
              <a href="<?php echo $child['href']; ?>" class="active"><span><?php echo $child['name']; ?></span></a>
              <?php } else { ?>
              <a href="<?php echo $child['href']; ?>"><span><?php echo $child['name']; ?></span></a>
              <?php } ?>
			  <?php if($child['sister_id']){ ?>
                <ul>
                <?php foreach($child['sister_id'] as $sisters) { ?>

                <li>
                <?php if ($sisters['category_id'] == $sisters_id) { ?>
                <a href="<?php echo $sisters['href']; ?>" class="active"><span><?php echo $sisters['name']; ?></span></a>
                <?php } else { ?>
                <a href="<?php echo $sisters['href']; ?>"><span><?php echo $sisters['name']; ?></span></a>
                <?php } ?>
                </li>
                <?php } ?>
                </ul>
                <?php } ?>
            </li>
            <?php } ?>
          </ul>
          <?php } ?>
        </li>
        <?php } ?>
      </ul>
    </div>
  </div>
</div>
