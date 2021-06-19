// alert弹窗
	  document.querySelector('#alert-button').onclick = function () {
	    let option = {
	      hook: {
	        initStart: function () {
	          // 检查之前老旧实例如果存在则销毁
	          if (document.querySelector('#modal-layer-container'))
	            ModalLayer.removeAll();
	        }
	      },
	      popupTime: 0,
	      type: 'alert',
	      title: '<i class="fa fa-exclamation-triangle" style="color: crimson"></i>声明',
	      dragOverflow: true,
	      content: '本程序仅作研究学习演示，视频采集于网络，视频版权归原作者所有，原作者拍摄创作不易，请勿下载传播，商用，非法用途。违者后果自负！更多精彩内容请访问<a href="http://smbk.work/" target="_blank">诗梦博客</a>!',
	    };
	
	    ModalLayer.alert(option);
	  }