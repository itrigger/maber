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
<script src="catalog/view/theme/default/js/jqueryUI1.10.3.min.js"></script>
<script src="catalog/view/theme/default/js/modernizr-2.6.2.min.js"></script>


<?php foreach ($scripts as $script) { ?><script type="text/javascript" src="<?php echo $script; ?>"></script><?php } ?>

<!--<script type="text/javascript" src="catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js"></script>    -->
<link rel="stylesheet" type="text/css" href="catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css" />
<!--[if lte IE 8]><script src="catalog/view/javascript/static/layout/js/oldies.js" type="text/javascript"></script> <![endif]-->

</head>

<body>
  <!-- Parallax  midground clouds -->
  <div id="parallax-bg2">
    <img id="bg2-1" src="catalog/view/theme/default/image/cloud-lg1.png" alt="cloud"/>
    <img id="bg2-2" src="catalog/view/theme/default/image/cloud-lg1.png" alt="cloud"/>
    <img id="bg2-3" src="catalog/view/theme/default/image/cloud-lg1.png" alt="cloud"/>
    <img id="bg2-4" src="catalog/view/theme/default/image/cloud-lg1.png" alt="cloud"/>
    <img id="bg2-5" src="catalog/view/theme/default/image/cloud-lg1.png" alt="cloud"/>
  </div>

  <!-- Parallax  background clouds -->
  <div id="parallax-bg1">
    <img id="bg1-1" src="catalog/view/theme/default/image/cloud-lg2.png" alt="cloud"/>
    <img id="bg1-2" src="catalog/view/theme/default/image/cloud-lg2.png" alt="cloud"/>
    <img id="bg1-3" src="catalog/view/theme/default/image/cloud-lg2.png" alt="cloud"/>
    <img id="bg1-4" src="catalog/view/theme/default/image/cloud-lg2.png" alt="cloud"/>
  </div>
<div id="container">
<header id="header">
  <?php if ($logo) { ?>
    <div id="logo">
      <?php if ($home == $og_url) { ?>
            <div class="sitelogo sprite-logo"></div>
      <?php } else { ?>
            <a href="<?php echo $home; ?>" class="sitelogo sprite-logo" title="Logo"></a>
      <?php } ?>
    </div>
  <?php } ?>
  <div id="search">
    <div class="button-search"></div>
    <input type="text" name="search" placeholder="<?php echo $text_search; ?>" value="<?php echo $search; ?>" />
  </div>
  <div class="top-contact__wrapper"  id="getaddress">
        <div class="top-contact__list">
             <div class="top-contact__list__input">
                  Актау (выб.)
             </div>
             <div class="top-contact__list__input_open">
                  <div id="tab1" class="tabs_h active">Актау</div>
                  <div id="tab2" class="tabs_h">Жанаозен</div>
             </div>
        </div>
        <div class="top-contact__info">
             <div id="con_tab1" class="tabs active">номер в актау</div>
             <div id="con_tab2" class="tabs">Номер в жанаозен</div>
        </div>
  </div>
</header>
  <nav>
    <ul id="menu">
      <li><a href="/">Главная</a></li>
      <li><a href="/index.php?route=information/information&information_id=4">О компании</a></li>
      <li><a href="/index.php?route=product/category&path=59">Каталог</a></li>
      <li><a href="/index.php?route=information/blog&act=cat&catid=1">Новости</a></li>
      <li><a href="/index.php?route=information/blog&act=cat&catid=2">Акции</a></li>
      <li><a href="/index.php?route=information/information&information_id=6">Отзывы</a></li>
      <li><a href="/index.php?route=gallery/album">Фотогалерея</a></li>
      <li><a href="/index.php?route=information/contact">Контакты</a></li>
    </ul>
  </nav>
<div id="notification"></div>
