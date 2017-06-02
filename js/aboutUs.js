/*修改topNav*/
flag = 3;
mvList.style.left = 3 * lis[0].offsetWidth + 'px';

var aboutUsclientW = document.documentElement.clientWidth,
	aboutUsclientH = document.documentElement.clientHeight,
	abuBox = document.getElementById('abuBox'),
	particles_js = document.getElementById('particles-js');
particles_js.style.position = 'fixed';
/*打开网页直接把获取到的浏览器窗口宽高赋值给背景的宽高*/
particles_js.style.height = aboutUsclientH + 'px';
particles_js.style.width = aboutUsclientW + 'px';
/*打开网页，获取浏览器窗口高度来设置left、top的值*/
abuBox.style.left = (aboutUsclientW - abuBox.offsetWidth) / 2 + 'px';
abuBox.style.top = (aboutUsclientH - abuBox.offsetHeight) / 2 + 'px';
window.onresize = function() {
	/*浏览器窗口发生变化时候，刷新浏览器窗口值大小*/
	aboutUsclientW = document.documentElement.clientWidth;
	aboutUsclientH = document.documentElement.clientHeight;
	/*修改背景的大小*/
	particles_js.style.height = aboutUsclientH + 'px';
	particles_js.style.width = aboutUsclientW + 'px';
	/*修改填写区域的left、top值，使其居中*/
	abuBox.style.left = (aboutUsclientW - abuBox.offsetWidth) / 2 + 'px';
	abuBox.style.top = (aboutUsclientH - abuBox.offsetHeight) / 2 + 'px';

}

/*控制输入框样式*/
var inp1 = document.getElementById('inp1'),
	inp2 = document.getElementById('inp2'),
	userWords = document.getElementById('userWords');
inp1.onfocus = function() {
	if(this.value == '姓名') this.value = '';
	this.style.color = 'aqua';

}
inp1.onblur = function() {
	if(this.value == '') {
		this.value = '姓名';
		this.style.color = 'gray';
	}
}
inp2.onfocus = function() {
	if(this.value == 'Email') this.value = '';
	this.style.color = 'aqua';

}
inp2.onblur = function() {
	if(this.value == '') {
		this.value = 'Email';
		this.style.color = 'gray';
	}
}
userWords.onfocus = function() {
	if(this.value == '您的意见，就是对我们最大的支持!') this.value = '';
	this.style.color = 'aqua';

}
userWords.onblur = function() {
	if(this.value == '') {
		this.value = '您的意见，就是对我们最大的支持!';
		this.style.color = 'gray';
	}
}

var reg = /^[a-zA-Z0-9]+([_\.]?[a-zA-Z0-9]){0,3}@[a-zA-Z0-9]{1,24}(\.[a-z]{2,3}){1,3}$/;
//onblur当光标移开输入框时
inp2.onblur = function() {
	if(!reg.test(inp2.value)) {

		if(inp2.value == '') {
			inp2.value = 'Email';
			inp2.style.color = 'gray';
		} else {
			inp2.className = "animated shake 0.5s";
			inp2.style.color = 'red';
		}
	}
	setTimeout(function() {
		inp2.className = '';
	}, 500);
}
var enterBtn = document.getElementById('abuBoxBtn');
var thxMark = document.getElementById('thxMark');
var closeBtn = document.getElementById('closeBtn');
enterBtn.onclick = function() {
	if(inp1.value == '姓名') {
		inp1.className = 'animated shake 0.5s';
	}
	if(inp2.value == 'Email' || !reg.test(inp2.value)) {
		inp2.className = 'animated shake 0.5s';
	}
	if(userWords.value == '您的意见，就是对我们最大的支持!') {
		userWords.className = 'animated shake 0.5s';
	}
	setTimeout(function() {
		inp1.className = '';
		inp2.className = '';
		userWords.className = '';
	}, 500);

	if(inp1.value != '姓名' && inp2.value != '邮箱' && userWords.value != '您的意见，就是对我们最大的支持!') {
		if(inp1.value && userWords && reg.test(inp2.value) == true) {
			inp1.value = '姓名';
			inp2.value = 'Email';
			userWords.value = '您的意见，就是对我们最大的支持!';
			inp1.style.color = 'gray';
			inp2.style.color = 'gray';
			userWords.style.color = 'gray';

			thxMark.style.webkitAnimation = 'bounceInDown 2s';
			thxMark.style.MozAnimation = 'bounceInDown 2s';
			thxMark.style.msAnimation = 'bounceInDown 2s';
			thxMark.style.animation = 'bounceInDown 2s';

			thxMark.style.top = '35%';
			closeBtn.onclick = function() {
				thxMark.style.webkitAnimation = 'bounceOutUp 2s';
				thxMark.style.MozAnimation = 'bounceOutUp 2s';
				thxMark.style.msAnimation = 'bounceOutUp 2s';
				thxMark.style.animation = 'bounceOutUp 2s';
				setTimeout(function() {
					thxMark.style.top = '-17%';
				}, 2000);

			}
			/*var thxMark = document.createElement('div');
			thxMark.innerHTML = '<div class="thxWords">感谢您为我们提出宝贵的意见！</div><img id="closeBtn" src="img/close.png"><div class="share"><div class="share-platform"><div class="share-platform-l">分享：</div><div class="share-platform-r"><div class="bdsharebuttonbox"><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a></div></div></div></div>';
			var scr1 = document.createElement('script');
			scr1.src = 'share/jquery-1.11.1.min.js';
			document.body.appendChild(scr1);
			var scr2 = document.createElement('script');
			scr2.src = 'js/share.js';
			document.body.appendChild(scr2);
			var scr3 = document.createElement('script');
			scr3.src = 'share/ZeroClipboard.js';
			document.body.appendChild(scr3);

			thxMark.setAttribute('id', 'thxMark');
			document.body.appendChild(thxMark);
			var closeBtn = document.getElementById('closeBtn');
			closeBtn.onclick = function() {
				thxMark.style.animation = 'bounceOutUp 2s';
				setTimeout(function() {
					document.body.removeChild(thxMark);
					document.body.removeChild(scr1);
					document.body.removeChild(scr2);
					document.body.removeChild(scr3);
				}, 2000);
			}*/
			//			setTimeout(function() {
			//				thxMark.style.animation = 'bounceOutUp 2s';
			//				setTimeout(function() {
			//					document.body.removeChild(thxMark);
			//				}, 2000);
			//			}, 5000);
		}

	}

}