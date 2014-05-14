if (typeof _sl_options == "undefined") _sl_options = {};
if (typeof _sl_options.iframe_base_path == "undefined") _sl_options.iframe_base_path = 'https://fightforthefuture.github.io/stoptheslowlane/widget/iframe';
if (typeof _sl_options.animation == "undefined") _sl_options.animation = 'loader';

var _sl_animations = {
	loader: {
		options: {
			modalAnimation: 'loader'
		},
		init: function(options) {
			for (var k in options) this.options[k] = options[k];
			return this;
		},
		start: function() {
			_sl_util.injectCSS('_sl_css', '._sl_overlay { position: fixed; background: white; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9001; opacity: 1; transition: all 5s ease-in; -ms-transition: all 5s ease-in; -o-transition: all 5s ease-in; -moz-transition: all 5s ease-in; -webkit-transition: all 5s ease-in; } ._sl_overlay._sl_halfTransparent { opacity: .4; background: black; }');

			var div = document.createElement('div');
			div.className = '_sl_overlay';
			div.id = '_sl_overlay';
			document.body.appendChild(div);

			var iframe = _sl_util.createIframe();
			_sl_util.bindIframeCommunicator(document.getElementById('_sl_iframe'), this);
		},
		stop: function() {
			var overlay = document.getElementById('_sl_overlay');
			overlay.parentNode.removeChild(overlay);
			var css = document.getElementById('_sl_css');
			css.parentNode.removeChild(css);
			_sl_util.destroyIframe();
		},
		fadeBackground: function() {
			_sl_util.addClass(document.getElementById('_sl_overlay'), '_sl_halfTransparent');
		}
	},
	blur: {
		options: {
			unblurMaxDelay: 6000,
			modalAnimation: 'comcast'
		},
		init: function(options) {
			for (var k in options) this.options[k] = options[k];
			return this;
		},
		start: function() {

			if (window.ActiveXObject || "ActiveXObject" in window)
			{
				console.log('do something stupid for IE');
			}

			var tags = document.body.childNodes;
			for (var i = 0; i < tags.length; i++)
				this._doBlur(tags[i]);

			var svg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="0" width="0"><defs><filter id="_sl_blur_30" x="0" y="0"><feGaussianBlur stdDeviation="30" /></filter><filter id="_sl_blur_15" x="0" y="0"><feGaussianBlur stdDeviation="15" /></filter><filter id="_sl_blur_7" x="0" y="0"><feGaussianBlur stdDeviation="7" /></filter><filter id="_sl_blur_3" x="0" y="0"><feGaussianBlur stdDeviation="3" /></filter><filter id="_sl_blur_1" x="0" y="0"><feGaussianBlur stdDeviation="1" /></filter></defs></svg>';
			var doc = new DOMParser().parseFromString(svg, 'application/xml');
			document.body.appendChild(document.body.ownerDocument.importNode(doc.documentElement, true));

			_sl_util.injectCSS('_sl_css', '._sl_overlay { position: fixed; background: black; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9001; opacity: 0; transition: opacity 1s linear; -ms-transition: opacity 1s linear; -o-transition: opacity 1s linear; -moz-transition: opacity 1s linear; -webkit-transition: opacity 1s linear; } ._sl_visible { opacity: .4; } ._sl_blur_30 { -webkit-filter: blur(30px); -moz-filter: blur(30px); -ms-filter: blur(30px); -o-filter: blur(30px); filter: blur(30px); filter: url(#_sl_blur_30); }._sl_blur_15 { -webkit-filter: blur(15px); -moz-filter: blur(15px); -ms-filter: blur(15px); -o-filter: blur(15px); filter: blur(15px); filter: url(#_sl_blur_15); } ._sl_blur_7 { -webkit-filter: blur(7px); -moz-filter: blur(7px); -ms-filter: blur(7px); -o-filter: blur(7px); filter: blur(7px); filter: url(#_sl_blur_7); } ._sl_blur_3 { -webkit-filter: blur(3px); -moz-filter: blur(3px); -ms-filter: blur(3px); -o-filter: blur(3px); filter: blur(3px); filter: url(#_sl_blur_3); } ._sl_blur_1 { -webkit-filter: blur(1px); -moz-filter: blur(1px); -ms-filter: blur(1px); -o-filter: blur(1px); filter: blur(1px); filter: url(#_sl_blur_1); }');

			var div = document.createElement('div');
			div.className = '_sl_overlay _sl_visible';
			div.onclick = _sl_animations.blur.stop;
			div.id = '_sl_overlay';
			document.body.appendChild(div);
			
			var iframe = _sl_util.createIframe();
			_sl_util.bindIframeCommunicator(document.getElementById('_sl_iframe'), this);
		},
		stop: function() {
			var overlay = document.getElementById('_sl_overlay');
			overlay.parentNode.removeChild(overlay);
			var css = document.getElementById('_sl_css');
			css.parentNode.removeChild(css);
			_sl_util.destroyIframe();
		},
		_doBlur: function(el) {
			var _curImageBlurDelay = 0;
			var _unblurMaxDelay = this.options.unblurMaxDelay;

			var _newDelay = function() {
				_curImageBlurDelay += (Math.random() * _unblurMaxDelay);
				return _curImageBlurDelay;
			}
			var addClass = _sl_util.addClass, removeClass = _sl_util.removeClass;

			addClass(el, '_sl_blur_30');
			setTimeout(function() {	removeClass(el, '_sl_blur_30'); addClass(el, '_sl_blur_15'); }, _newDelay());
			setTimeout(function() {	removeClass(el, '_sl_blur_15'); addClass(el, '_sl_blur_7'); }, _newDelay());
			setTimeout(function() {	removeClass(el, '_sl_blur_7'); addClass(el, '_sl_blur_3'); }, _newDelay());
			setTimeout(function() {	removeClass(el, '_sl_blur_3'); addClass(el, '_sl_blur_1'); }, _newDelay());
		}
	}
}

var _sl_util = {
	addClass: function(node, theClass)	{
		if (typeof node.className != "undefined" && typeof node.className.indexOf == "function" && node.className.indexOf(theClass) == -1)
			node.className = node.className + ' ' + theClass;
	},
	removeClass: function(node, remove) {
		if (!node.className)
			return;
		var newClassName = "";
	    var classes = node.className.split(" ");
	    for(var i = 0; i < classes.length; i++)
	        if(classes[i] !== remove)
	            newClassName += classes[i] + " ";
	    node.className = newClassName;
	},
	injectCSS: function(id, css)
	{
		var style = document.createElement('style');
		style.type = 'text/css';
		style.id = id;
		if (style.styleSheet) style.styleSheet.cssText = css;
		else style.appendChild(document.createTextNode(css));
		document.head.appendChild(style);
	},
	createIframe: function() {
		var iframe = document.createElement('iframe');
		iframe.id = '_sl_iframe';
		iframe.src = _sl_options.iframe_base_path + '/iframe.html';
		iframe.frameBorder = 0;
		iframe.allowTransparency = true; 
		iframe.style.display = 'none';
		document.body.appendChild(iframe);
		return iframe;
	},
	destroyIframe: function() {
		var iframe = document.getElementById('_sl_iframe');
		iframe.parentNode.removeChild(iframe);
	},
	bindIframeCommunicator: function(iframe, animation) {
		var sendMessage = function(requestType, data)
		{
			data || (data = {});
			data.requestType = requestType;
			data.SL_WIDGET_MSG = true;
			iframe.contentWindow.postMessage(data, '*');
		}

		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		eventer(messageEvent,function(e) {
			if (!e.data || !e.data.SL_IFRAME_MSG)
				return;

			delete e.data.SL_IFRAME_MSG;

			switch (e.data.requestType) {
				case 'getAnimation':
					iframe.style.display = 'block';
					sendMessage('putAnimation', animation.options);
					break;
				case 'stop':
					animation.stop();
					break;
				default:
					if (typeof animation[e.data.requestType] == 'function')
						animation[e.data.requestType]();
					break;
			}
		}, false);

	},
	setCookie: function(name,val,exdays)
	{
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = name + "=" + val + "; " + expires;
	},
	getCookie: function(cname)
	{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++)
  		{
  			var c = ca[i].trim();
  			if (c.indexOf(name)==0)
  				return c.substring(name.length,c.length);
  		}
		return "";
	} 
}

document.addEventListener('DOMContentLoaded', function () {

	var css_hide = document.getElementById('_sl_hide');
	if (css_hide) css_hide.parentNode.removeChild(css_hide);

	if (_sl_util.getCookie('_SL_WIDGET_SHOWN') && window.location.href.indexOf('ALWAYS_SHOW_SL_WIDGET') == -1)
		return;
	else
		_sl_util.setCookie('_SL_WIDGET_SHOWN', 'true', 365);

	_sl_util.injectCSS('_sl_iframe_css', '#_sl_iframe { position: fixed; left: 50%; margin-left: -375px; margin-top: -250px; top: 50%; width: 750px; height: 400px; z-index: 20000000; }');

	var animation = _sl_animations[_sl_options.animation].init(_sl_options).start();

	
}, false);



