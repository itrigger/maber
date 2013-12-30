<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<meta charset="UTF-8" />
<title><?php echo $title; ?></title>
<base href="<?php echo $base; ?>" />
<?php if ($description) { ?><meta name="description" content="<?php echo $description; ?>" /><?php } ?>
<?php if ($keywords) { ?><meta name="keywords" content="<?php echo $keywords; ?>" /><?php } ?>
<?php if ($icon) { ?><link href="<?php echo $icon; ?>" rel="icon" /><?php } ?>
<?php foreach ($links as $link) { ?><link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" /><?php } ?>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/css/screen.css" />
<?php foreach ($styles as $style) { ?><link rel="<?php echo $style['rel']; ?>" type="text/css" href="<?php echo $style['href']; ?>" media="<?php echo $style['media']; ?>" /><?php } ?>

<!--<script src="catalog/view/theme/default/js/jquery-1.7.1.min.js"></script>  УБРАТЬ ДО РЕЛИЗА-->

<script src="catalog/view/theme/default/js/jquery1.10.2.min.js"></script>
<script src="catalog/view/theme/default/js/modernizr-2.6.2.min.js"></script>

<?php foreach ($scripts as $script) { ?><script type="text/javascript" src="<?php echo $script; ?>"></script><?php } ?>

<script type="text/javascript" src="catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js"></script>
<link rel="stylesheet" type="text/css" href="catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css" />

<!--[if lte IE 8]><script src="catalog/view/javascript/static/layout/js/oldies.js" type="text/javascript"></script> <![endif]-->

</head>

<body>
<div id="container">
<header id="header">
  <?php if ($logo) { ?>
    <div id="logo">
      <?php if ($home == $og_url) { ?>
            <img src="<?php echo $logo; ?>" title="<?php echo $name; ?>" alt="<?php echo $name; ?>" />
      <?php } else { ?>
            <a href="<?php echo $home; ?>"><img src="<?php echo $logo; ?>" title="<?php echo $name; ?>" alt="<?php echo $name; ?>" /></a>
      <?php } ?>
    </div>
  <?php } ?>
  <div id="search">
    <div class="button-search"></div>
    <input type="text" name="search" placeholder="<?php echo $text_search; ?>" value="<?php echo $search; ?>" />
  </div>
</header>
  <nav>
    <ul id="menu">
      <li><a href="#">Пункт 1</a></li>
      <li><a href="#">Пункт 2</a></li>
      <li><a href="#">Пункт 3</a></li>
      <li><a href="#">Пункт 4</a></li>
      <li><a href="#">Пункт 5</a></li>
      <li><a href="#">Пункт 6</a></li>
      <li><a href="#">Пункт 7</a></li>
    </ul>
  </nav>
<div id="notification"></div>
