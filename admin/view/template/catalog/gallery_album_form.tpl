<?php echo $header; ?>
<div id="content">
  <div class="breadcrumb">
    <?php foreach ($breadcrumbs as $breadcrumb) { ?>
    <?php echo $breadcrumb['separator']; ?><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
    <?php } ?>
  </div>
  <?php if ($error_warning) { ?>
  <div class="warning"><?php echo $error_warning; ?></div>
  <?php } ?>
  <div class="box">
    <div class="heading">
      <h1><img src="view/image/category.png" alt="" /> <?php echo $heading_title; ?></h1>
      <div class="buttons"><a onclick="$('#form').submit();" class="button"><span><?php echo $button_save; ?></span></a><a onclick="location = '<?php echo $cancel; ?>';" class="button"><span><?php echo $button_cancel; ?></span></a></div>
    </div>
    <div class="content">
      
      <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="form">
      <table class="form">
        <tr>
          <td><span class="required">*</span> <?php echo $entry_name; ?></td>
          <td><input name="name" value="<?php echo $name; ?>" size="100" />
            <?php if ($error_name) { ?>
            <span class="error"><?php echo $error_name; ?></span>
            <?php } ?></td>
        </tr>
        <!--
        <tr>
          <td><?php echo $entry_keyword; ?></td>
          <td><input type="text" name="keyword" value="<?php echo $keyword; ?>" /></td>
        </tr>
        -->
        <tr>        
        <td><?php echo $entry_image; ?></td>
              <td><div class="image"><img src="<?php echo $preview; ?>" alt="" id="preview" /><br />
                  <input type="hidden" name="image" value="<?php echo $image; ?>" id="image" />
                  <a onclick="image_upload('image', 'preview');"><?php echo $text_browse; ?></a>&nbsp;&nbsp;|&nbsp;&nbsp;<a onclick="$('#thumb').attr('src', '<?php echo $no_image; ?>'); $('#image').attr('value', '');"><?php echo $text_clear; ?></a></div></td>
            </tr>
            
            
        <tr>
            <td><?php echo $entry_status; ?></td>
            <td><select name="status">
                <?php if ($status) { ?>
                <option value="1" selected="selected"><?php echo $text_enabled; ?></option>
                <option value="0"><?php echo $text_disabled; ?></option>
                <?php } else { ?>
                <option value="1"><?php echo $text_enabled; ?></option>
                <option value="0" selected="selected"><?php echo $text_disabled; ?></option>
                <?php } ?>
              </select></td>
        </tr>
        <tr>
          <td><?php echo $entry_sort_order; ?></td>
          <td><input name="sort_order" value="<?php echo $sort_order; ?>" size="1" /></td>
        </tr>
      </table>
      <a id="multiupload" class="button" style="margin-bottom: 10px;"><?php echo $button_multiimage; ?></a>
      
      <table id="images" class="list" style="cursor: move;">
            <thead>
              <tr>
                <td class="left"><?php echo $entry_image; ?></td>
                <td class="right"><?php echo $entry_sort_order; ?></td>
                <td></td>
              </tr>
            </thead>
            <?php $image_row = 0; ?>
            <?php foreach ($album_images as $album_image) { ?>
            <tbody id="image-row<?php echo $image_row; ?>">
              <tr>
                <td class="left"><div class="image"><img src="<?php echo $album_image['thumb']; ?>" alt="" id="thumb<?php echo $image_row; ?>" />
                    <input type="hidden" name="album_image[<?php echo $image_row; ?>][image]" value="<?php echo $album_image['image']; ?>" id="image<?php echo $image_row; ?>" />
                    <br />
                    <a onclick="image_upload('image<?php echo $image_row; ?>', 'thumb<?php echo $image_row; ?>');"><?php echo $text_browse; ?></a>&nbsp;&nbsp;|&nbsp;&nbsp;<a onclick="$('#thumb<?php echo $image_row; ?>').attr('src', '<?php echo $no_image; ?>'); $('#image<?php echo $image_row; ?>').attr('value', '');"><?php echo $text_clear; ?></a></div></td>
                
                <td class="right"><input type="text" name="album_image[<?php echo $image_row; ?>][sort_order]" value="<?php echo $album_image['sort_order']; ?>" size="2" /></td>
                
                
                
                <td class="left"><a onclick="$('#image-row<?php echo $image_row; ?>').remove();" class="button"><?php echo $button_remove; ?></a></td>
              </tr>
            </tbody>
            <?php $image_row++; ?>
            <?php } ?>
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td class="left">
					<a onclick="addImage();" class="button"><?php echo $button_add_image; ?></a><br/><br/>
				</td>
              </tr>
            </tfoot>
          </table>
      
    </form>
      
    </div>
  </div>
</div>


<script type="text/javascript"><!--
function image_upload(field, thumb) {
	$('#dialog').remove();
	
	$('#content').prepend('<div id="dialog" style="padding: 3px 0px 0px 0px;"><iframe src="index.php?route=common/filemanager&token=<?php echo $token; ?>&field=' + encodeURIComponent(field) + '" style="padding:0; margin: 0; display: block; width: 100%; height: 100%;" frameborder="no" scrolling="auto"></iframe></div>');
	
	$('#dialog').dialog({
		title: '<?php echo $text_image_manager; ?>',
		close: function (event, ui) {
			if ($('#' + field).attr('value')) {
				$.ajax({
					url: 'index.php?route=common/filemanager/image&token=<?php echo $token; ?>&image=' + encodeURIComponent($('#' + field).attr('value')),
					dataType: 'text',
					success: function(text) {
						$('#' + thumb).replaceWith('<img src="' + text + '" alt="" id="' + thumb + '" />');
					}
				});
			}
		},	
		bgiframe: false,
		width: 800,
		height: 400,
		resizable: false,
		modal: false
	});
};
//--></script> 
<script type="text/javascript"><!--
var image_row = <?php echo $image_row; ?>;

function addImage() {
    html  = '<tbody id="image-row' + image_row + '">';
	html += '  <tr>';
	
	html += '    <td class="left"><div class="image"><img src="<?php echo $no_image; ?>" alt="" id="thumb' + image_row + '" /><input type="hidden" name="album_image[' + image_row + '][image]" value="" id="image' + image_row + '" /><br /><a onclick="image_upload(\'image' + image_row + '\', \'thumb' + image_row + '\');"><?php echo $text_browse; ?></a>&nbsp;&nbsp;|&nbsp;&nbsp;<a onclick="$(\'#thumb' + image_row + '\').attr(\'src\', \'<?php echo $no_image; ?>\'); $(\'#image' + image_row + '\').attr(\'value\', \'\');"><?php echo $text_clear; ?></a><br/></div></td>';
	
	html += '    <td class="right"><input type="text" name="album_image[' + image_row + '][sort_order]" value="" size="2" /></td>';
	html += '    <td class="left"><a onclick="$(\'#image-row' + image_row  + '\').remove();" class="button"><?php echo $button_remove; ?></a></td>';
	html += '  </tr>';
	html += '</tbody>';
	
	$('#images tfoot').before(html);
	
	image_row++;
}
//--></script> 

<script type="text/javascript" src="view/javascript/jquery/ajaxupload.js"></script>
				<script type="text/javascript"><!--
					new AjaxUpload('#multiupload', {
						action: 'index.php?route=catalog/gallery_album/multiupload&token=<?php echo $token; ?>',
						name: 'image[]',
						autoSubmit: true,
						multiple: true,
						responseType: 'json',
						onComplete: function(file, json) {
							$('#images tfoot td').first().html('');
							if (json.error) {
								alert(json.error);
							} else if (json.success) {
								$.each(json.success, function(index, value){
									$.ajax({
										url: 'index.php?route=catalog/gallery_album/image&token=<?php echo $token; ?>&image=' + json.file[index],
										success: function(data) {
											html  = '<tbody id="image-row' + image_row + '">';
											html += '  <tr>';
											html += '    <td class="left"><div class="image"><img src="' + data + '" alt="" id="thumb' + image_row + '" /><input type="hidden" name="album_image[' + image_row + '][image]" value="' + json.file[index] + '" id="image' + image_row + '" /></div></td>';
											html += '    <td class="right"><input type="text" name="album_image[' + image_row + '][sort_order]" value="" size="2" /></td>';
											html += '    <td class="left"><a onclick="$(\'#image-row' + image_row  + '\').remove();" class="button"><?php echo $button_remove; ?></a></td>';
											html += '  </tr>';
											html += '</tbody>';		

											$('#images tfoot').before(html);
											
											image_row++;

										}
									})
								})
							}

							if (json.error_file) {
								html = '';
								$.each(json.error_file, function(index, value){
									html += json.name[index] + ' ' + value + '\n\n';
								})

								alert(html);
							}
						}
					});
					
$(document).ready(function()
			{
				$('#images').sortable({
					axis: 'y',
					forcePlaceholderSize: true,
					placeholder: 'group_move_placeholder',
					stop: function(event, ui)
					{
						$('#images input[name$="[sort_order]"]').each(function(i)
						{
							$(this).val(i);
						});			
					}
				});
			});
			
				//--></script>
            

	
<?php echo $footer; ?>