<?php    
class ControllerCatalogGalleryalbum extends Controller { 
	private $error = array();
  
  	public function index() {
		$this->load->language('catalog/gallery_album');
		
		$this->document->setTitle($this->language->get('heading_title'));
				 
		$this->load->model('catalog/gallery_album');
		
    	$this->getList();
  	}
  
  	public function insert() {
		$this->load->language('catalog/gallery_album');

    	$this->document->setTitle($this->language->get('heading_title'));
		
		$this->load->model('catalog/gallery_album');
			
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$this->model_catalog_gallery_album->addAlbum($this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');
			
			$url = '';
			
			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}
			
			$this->redirect(HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . $url);
		}
    
    	$this->getForm();
  	} 
   
  	public function update() {
		$this->load->language('catalog/gallery_album');

    	$this->document->setTitle($this->language->get('heading_title'));
		
		$this->load->model('catalog/gallery_album');
		
    	if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$this->model_catalog_gallery_album->editAlbum($this->request->get['album_id'], $this->request->post);

			$this->session->data['success'] = $this->language->get('text_success');

			$url = '';
			
			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}
			
			$this->redirect(HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . $url);
		}
    
    	$this->getForm();
  	}   

  	public function delete() {
		$this->load->language('catalog/gallery_album');

    	$this->document->setTitle($this->language->get('heading_title'));
		
		$this->load->model('catalog/gallery_album');
			
    	if (isset($this->request->post['selected']) && $this->validateDelete()) {
			foreach ($this->request->post['selected'] as $album_id) {
				$this->model_catalog_gallery_album->deleteAlbum($album_id);
			}

			$this->session->data['success'] = $this->language->get('text_success');
			
			$url = '';
			
			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}
			
			$this->redirect(HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . $url);
    	}
	
    	$this->getList();
  	}  
	
	public function updateOrder() {
		$this->load->language('catalog/gallery_album');
		
		$this->load->model('catalog/gallery_album');
			
    	if (isset($this->request->post['selected']) && $this->validateDelete()) {
			foreach ($this->request->post['selected'] as $album_id) {
				$this->model_catalog_gallery_album->deleteAlbum($album_id);
			}

			$this->session->data['success'] = $this->language->get('text_success');
			
			$url = '';
			
			if (isset($this->request->get['page'])) {
				$url .= '&page=' . $this->request->get['page'];
			}

			if (isset($this->request->get['sort'])) {
				$url .= '&sort=' . $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url .= '&order=' . $this->request->get['order'];
			}
			
			$this->redirect(HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . $url);
    	}
	
    	$this->getList();
  	}  
    
  	private function getList() {
		if (isset($this->request->get['page'])) {
			$page = $this->request->get['page'];
		} else {
			$page = 1;
		}
		
		if (isset($this->request->get['sort'])) {
			$sort = $this->request->get['sort'];
		} else {
			$sort = 'name';
		}
		
		if (isset($this->request->get['order'])) {
			$order = $this->request->get['order'];
		} else {
			$order = 'ASC';
		}
		
		$url = '';
			
		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		$this->data['breadcrumbs'] = array();

   		$this->data['breadcrumbs'][] = array(
       		'text'      => $this->language->get('text_home'),
			'href'      => $this->url->link('common/home', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => false
   		);
		
	

   		$this->data['breadcrumbs'][] = array(
       		'text'      => $this->language->get('heading_title'),
			'href'      => $this->url->link('catalog/gallery_album', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => ' :: '
   		);
					
		$this->data['insert'] = HTTPS_SERVER . 'index.php?route=catalog/gallery_album/insert&token=' . $this->session->data['token'] . $url;
		$this->data['delete'] = HTTPS_SERVER . 'index.php?route=catalog/gallery_album/delete&token=' . $this->session->data['token'] . $url;	

		$this->data['albums'] = array();

		$data = array(
			'sort'  => $sort,
			'order' => $order,
			'start' => ($page - 1) * $this->config->get('config_admin_limit'),
			'limit' => $this->config->get('config_admin_limit')
		);
		
		$album_total = $this->model_catalog_gallery_album->getTotalAlbums();
	
		$results = $this->model_catalog_gallery_album->getAlbums($data);
 
		$this->load->model('tool/image');
		
    	foreach ($results as $result) {
    		if ($result['image']) {
				$image = $result['image'];
			} else {
				$image = 'no_image.jpg';
			}
    		
			$action = array();
			
			$action[] = array(
				'text' => $this->language->get('text_edit'),
				'href' => HTTPS_SERVER . 'index.php?route=catalog/gallery_album/update&token=' . $this->session->data['token'] . '&album_id=' . $result['album_id'] . $url
			);
						
			$this->data['albums'][] = array(
				'album_id'        => $result['album_id'],
				'name'            => $result['name'],
				'status'		  => $result['status'],
				'viewed'		  => $result['viewed'],
				'sort_order'      => $result['sort_order'],
			    'thumb'           => $this->model_tool_image->resize($image, 60, 60),
				'date_added'      => $result['date_added'],
				'selected'        => isset($this->request->post['selected']) && in_array($result['album_id'], $this->request->post['selected']),
				'action'          => $action
			);
		}	
	
		$this->data['heading_title'] = $this->language->get('heading_title');
		
		$this->data['text_no_results'] = $this->language->get('text_no_results');

		$this->data['text_viewed'] = $this->language->get('text_viewed');
		
		$this->data['text_enabled'] = $this->language->get('text_enabled');
    	$this->data['text_disabled'] = $this->language->get('text_disabled');
		
		$this->data['column_name'] = $this->language->get('column_name');
		$this->data['column_image'] = $this->language->get('column_image');		
		$this->data['column_sort_order'] = $this->language->get('column_sort_order');
		$this->data['column_action'] = $this->language->get('column_action');		
		
		$this->data['button_insert'] = $this->language->get('button_insert');
		$this->data['button_delete'] = $this->language->get('button_delete');
		
		
 
 		if (isset($this->error['warning'])) {
			$this->data['error_warning'] = $this->error['warning'];
		} else {
			$this->data['error_warning'] = '';
		}
		
		if (isset($this->session->data['success'])) {
			$this->data['success'] = $this->session->data['success'];
		
			unset($this->session->data['success']);
		} else {
			$this->data['success'] = '';
		}

		$url = '';

		if ($order == 'ASC') {
			$url .= '&order=DESC';
		} else {
			$url .= '&order=ASC';
		}

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}
		
		$this->data['sort_name'] = HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . '&sort=name' . $url;
		$this->data['sort_sort_order'] = HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . '&sort=sort_order' . $url;
		
		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}
												
		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		$pagination = new Pagination();
		$pagination->total = $album_total;
		$pagination->page = $page;
		$pagination->limit = $this->config->get('config_admin_limit');
		$pagination->text = $this->language->get('text_pagination');
		$pagination->url = HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . $url . '&page={page}';
			
		$this->data['pagination'] = $pagination->render();

		$this->data['sort'] = $sort;
		$this->data['order'] = $order;
		
		$this->template = 'catalog/gallery_album_list.tpl';
		$this->children = array(
			'common/header',	
			'common/footer'	
		);
		
		$this->response->setOutput($this->render(TRUE), $this->config->get('config_compression'));
	}
  
  	private function getForm() {
    	$this->data['heading_title'] = $this->language->get('heading_title');

    	$this->data['text_enabled'] = $this->language->get('text_enabled');
    	$this->data['text_disabled'] = $this->language->get('text_disabled');
		$this->data['text_default'] = $this->language->get('text_default');
    	$this->data['text_image_manager'] = $this->language->get('text_image_manager');
		
		$this->data['text_browse'] = $this->language->get('text_browse');
		$this->data['text_clear'] = $this->language->get('text_clear');
		
		$this->data['text_upload'] = $this->language->get('text_upload');
		
		$this->data['entry_name'] = $this->language->get('entry_name');
		$this->data['entry_keyword'] = $this->language->get('entry_keyword');
    	$this->data['entry_image'] = $this->language->get('entry_image');
		$this->data['entry_sort_order'] = $this->language->get('entry_sort_order');
		$this->data['entry_status'] = $this->language->get('entry_status');
		
		$this->data['button_multiimage'] = $this->language->get('button_multiimage');
  
    	$this->data['button_save'] = $this->language->get('button_save');
    	$this->data['button_cancel'] = $this->language->get('button_cancel');
		
		$this->data['button_add_image'] = $this->language->get('button_add_image');
		
		$this->data['button_remove'] = $this->language->get('button_remove');
	  
 		if (isset($this->error['warning'])) {
			$this->data['error_warning'] = $this->error['warning'];
		} else {
			$this->data['error_warning'] = '';
		}

 		if (isset($this->error['name'])) {
			$this->data['error_name'] = $this->error['name'];
		} else {
			$this->data['error_name'] = '';
		}
		    
		$url = '';
			
		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}
		
  		$this->data['breadcrumbs'] = array();

   		$this->data['breadcrumbs'][] = array(
       		'text'      => $this->language->get('text_home'),
			'href'      => $this->url->link('common/home', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => false
   		);

   		$this->data['breadcrumbs'][] = array(
       		'text'      => $this->language->get('heading_title'),
			'href'      => $this->url->link('catalog/gallery_album', 'token=' . $this->session->data['token'], 'SSL'),
      		'separator' => ' :: '
   		);
							
		if (!isset($this->request->get['album_id'])) {
			$this->data['action'] = HTTPS_SERVER . 'index.php?route=catalog/gallery_album/insert&token=' . $this->session->data['token'] . $url;
		} else {
			$this->data['action'] = HTTPS_SERVER . 'index.php?route=catalog/gallery_album/update&token=' . $this->session->data['token'] . '&album_id=' . $this->request->get['album_id'] . $url;
		}
		
		$this->data['cancel'] = HTTPS_SERVER . 'index.php?route=catalog/gallery_album&token=' . $this->session->data['token'] . $url;

		$this->data['token'] = $this->session->data['token'];
		
    	if (isset($this->request->get['album_id']) && ($this->request->server['REQUEST_METHOD'] != 'POST')) {
      		$album_info = $this->model_catalog_gallery_album->getAlbum($this->request->get['album_id']);
    	}

    	if (isset($this->request->post['name'])) {
      		$this->data['name'] = $this->request->post['name'];
    	} elseif (isset($album_info)) {
			$this->data['name'] = $album_info['name'];
		} else {	
      		$this->data['name'] = '';
    	}

		if (isset($this->request->post['image'])) {
			$this->data['image'] = $this->request->post['image'];
		} elseif (isset($album_info)) {
			$this->data['image'] = $album_info['image'];
		} else {
			$this->data['image'] = '';
		}
		
  		if (isset($this->request->post['status'])) {
			$this->data['status'] = $this->request->post['status'];
		} elseif (isset($album_info)) {
			$this->data['status'] = $album_info['status'];
		} else {
			$this->data['status'] = 1;
		}
		
		$this->load->model('tool/image');
		
		
		// Images
		if (isset($this->request->post['album_image'])) {
			$album_images = $this->request->post['album_image'];
		} elseif (isset($this->request->get['album_id'])) {
			$album_images = $this->model_catalog_gallery_album->getAlbumImages($this->request->get['album_id']);
		} else {
			$album_images = array();
		}
		
		$this->data['album_images'] = array();
		
		foreach ($album_images as $album_image) {
			if ($album_image['image'] && file_exists(DIR_IMAGE . $album_image['image'])) {
				$image = $album_image['image'];
			} else {
				$image = 'no_image.jpg';
			}
			
			$this->data['album_images'][] = array(
				'image'      => $image,
				'thumb'      => $this->model_tool_image->resize($image, 100, 100),
				'sort_order' => $album_image['sort_order']
			);
		}

		$this->data['no_image'] = $this->model_tool_image->resize('no_image.jpg', 100, 100);
		
		// Images
		
		if (isset($album_info) && $album_info['image'] && file_exists(DIR_IMAGE . $album_info['image'])) {
			$this->data['preview'] = $this->model_tool_image->resize($album_info['image'], 100, 100);
		} else {
			$this->data['preview'] = $this->model_tool_image->resize('no_image.jpg', 100, 100);
		}
		
		if (isset($this->request->post['sort_order'])) {
      		$this->data['sort_order'] = $this->request->post['sort_order'];
    	} elseif (isset($album_info)) {
			$this->data['sort_order'] = $album_info['sort_order'];
		} else {
      		$this->data['sort_order'] = '';
    	}
		
		$this->template = 'catalog/gallery_album_form.tpl';
		$this->children = array(
			'common/header',	
			'common/footer'	
		);
		
		$this->response->setOutput($this->render(TRUE), $this->config->get('config_compression'));
	}  
	 
  	private function validateForm() {
    	if (!$this->user->hasPermission('modify', 'catalog/gallery_album')) {
      		$this->error['warning'] = $this->language->get('error_permission');
    	}

    	if ((strlen(utf8_decode($this->request->post['name'])) < 3) || (strlen(utf8_decode($this->request->post['name'])) > 64)) {
      		$this->error['name'] = $this->language->get('error_name');
    	}
		
		if (!$this->error) {
	  		return TRUE;
		} else {
	  		return FALSE;
		}
  	}    
	
	public function image() {
		$this->load->model('tool/image');
		
		if (isset($this->request->get['image'])) {
			$this->response->setOutput($this->model_tool_image->resize(html_entity_decode($this->request->get['image'], ENT_QUOTES, 'UTF-8'), 100, 100));
		}
	}
	

	
	public function multiupload() {

		$this->load->language('common/filemanager');
		
		$json = array();

		if (!$this->user->hasPermission('modify', 'catalog/gallery_album')) {
      		$json['error'] = $this->language->get('error_permission');  
    	}

		if (!empty($this->request->files['image']['name'])) {

			$this->load->model('setting/setting');

			$image_dir = 'data/';

					if (!is_dir(rtrim(DIR_IMAGE . $image_dir .'/multiupload/'))) {
						mkdir(rtrim(DIR_IMAGE . $image_dir .'/multiupload/'), 0777);
					}
					$image_dir .=  '/multiupload/';
				
			
				
			$image_dir = rtrim($image_dir, '/');
				
			$directory = DIR_IMAGE . $image_dir;
			
			if (!is_dir($directory)) {
				$json['error']  = $this->language->get('error_directory');
			}

			$filename = array();

			foreach ($this->request->files['image']['name'] as $index => $name) {
				$filename[$index] = basename(html_entity_decode($name, ENT_QUOTES, 'UTF-8'));
				$json['name'][$index] = $filename[$index];
				
				if ((strlen($filename[$index]) < 3) || (strlen($filename[$index]) > 255)) {
					$json['error_file'][$index] = $this->language->get('error_filename');
				}
				
				$allowed = array(
					'image/jpeg',
					'image/pjpeg',
					'image/png',
					'image/x-png',
					'image/gif',
					'application/x-shockwave-flash'
				);
						
				if (!in_array($this->request->files['image']['type'][$index], $allowed)) {
					$json['error_file'][$index]  = $this->language->get('error_file_type');
				}
				
				$allowed = array(
					'.jpg',
					'.jpeg',
					'.gif',
					'.png',
					'.flv'
				);
						
				if (!in_array(strtolower(strrchr($filename[$index], '.')), $allowed)) {
					$json['error_file'][$index] = $this->language->get('error_file_type');
				}

				if ($this->request->files['image']['size'][$index] > 10485760) {
					$json['error_file'][$index] = $this->language->get('error_file_size');
				}

				if ($this->request->files['image']['error'][$index] != UPLOAD_ERR_OK) {
					$json['error_file'][$index] = 'error_upload_' . $this->request->files['image']['error'][$index];
				}
			}			
		} else {
			$json['error'] = $this->language->get('error_file');
		}
		
		if (!isset($json['error'])) {
			foreach ($this->request->files['image']['tmp_name'] as $index => $name) {
				if (!isset($json['error_file'][$index]) && @move_uploaded_file($name, $directory . '/' . $filename[$index])) {		
					$json['success'][$index] = $this->language->get('text_uploaded');
					$json['file'][$index] = $image_dir . '/' . $filename[$index];
				}
			}
		}
		
		
		
		$this->response->setOutput(json_encode($json));
	}

  	private function validateDelete() {
    	if (!$this->user->hasPermission('modify', 'catalog/gallery_album')) {
			$this->error['warning'] = $this->language->get('error_permission');
    	}	
				
		if (!$this->error) {
	  		return TRUE;
		} else {
	  		return FALSE;
		}  
  	}
}
?>