(function(QD, $, undefined) {

	// Many thanks to the Stack Overflow community for this thread: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser, particularly Rob W, Will Squire, and Pilau, as this lib is mostly just a convenience abstraction of their answers. 

	const log = (msg) => {
		let browserColor = QD.moz.result || QD.chrome.result ? true : false;
		!!browserColor ? console.log("%c QD DEV MESSAGE: " + msg, "background: #ddd; color:blue") : console.log("QD DEV MESSAGE: " + msg);
	}

	QD.dev = {
		devMode:false,
		get currentMode(){
			return this.devMode;
		},
		set mode(update){
			this.devMode = update;
		}
	}

	// IE 6 - 11
	QD.IE =  {

		result:  /*@cc_on!@*/false || !!document.documentMode ? true : false,
		get isBrowser(){
			if(!!QD.dev.currentMode){
				this.result ? log('Browser is IE.') : log('Browser is not IE.');
			} 				
			return this.result;
		}
	}

	// Edge 20+
	QD.edge =  {

		result: !QD.isIE && !!window.StyleMedia ? true : false,
		get isBrowser(){
			if(!!QD.dev.currentMode){
				this.result ? log('Browser is Edge.') : log('Browser is not Edge.');
			} 	
			return this.result;
		}			
	}

	// Firefox 1.0+
	QD.moz =  {
	
		result: !!window.netscape || !!window.moz || typeof InstallTrigger !== 'undefined' ? true : false,
		get isBrowser(){
			if(!!QD.dev.currentMode){
				this.result ? log('Browser is Firefox.') : log('Browser is not Firefox.');
			
			} 				
			return this.result;
		}
	}


	// Chrome 1+
	QD.chrome =  {

		result:  !!window.chrome && !window.opr ? true : false,
		get isBrowser(){
			if(!!QD.dev.currentMode){
				this.result ? log('Browser is Chrome.') : log('Browser is not Chrome.');
			}				
			return this.result;
		}	

	}
			

	// Safari 3.0+
	QD.safari =  {

		result: /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification) || !!window.ApplePayError ? true : false,
		get isBrowser(){
			if(!!QD.dev.currentMode){
				this.result ? log('Browser is Safari.') : log('Browser is not Safari.');
			} 
			return this.result;
		}
	}

	// Opera 8.0+
	QD.opera =  {

		result: (!!window.opr && !!opr.addons) || !!window.opera ? true : false,
		get isBrowser(){
			if(!!QD.dev.currentMode){
				this.result ? log('Browser is Opera.') : log('Browser is not Opera.');
			} 				
			return this.result;
		}			
	}

	QD.isMobile = () => {
		let result = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i) ? true : false;

		if(!!QD.dev.currentMode){
			result ? log('Browser is mobile.') : log('Browser is not mobile.');
		} 

		return result;
	}

	QD.isPortrait = () => {
		let result = document.documentElement.clientWidth < document.documentElement.clientHeight ? true : false;

		if(!!QD.dev.currentMode){
			result ? log('Browser is in portrait orientation.') : log('Browser is not in portrait orientation.');
		} 

		return result;
	}

	QD.isLandscape = () => {
		let result = document.documentElement.clientWidth > document.documentElement.clientHeight ? true : false;

		if(!!QD.dev.currentMode){
			result ? log('Browser is in landscape orientation.') : log('Browser is not in landscape orientation.');
		} 

		return result;
	}

	QD.isSquare = () => {
		let result = document.documentElement.clientHeight == document.documentElement.clientWidth ? true : false;

		if(!!QD.dev.currentMode){
			result ? log('Browser is in square orientation.') : log('Browser is not in square orientation.');
		} 
		
		return result;		
	}

	QD.ori = () => {
		let orient = document.documentElement.clientWidth > document.documentElement.clientHeight ? "Landscape" : "Portrait";
		let orientSame = document.documentElement.clientWidth == document.documentElement.clientHeight ? true : false;
		let result = orientSame ? "Square" : orient;

		if(!!QD.dev.currentMode){
			log('Browser is in "' + result + '" orientation');
		} 

		return result;
	}

	QD.browser = () => {

		let brow;

		switch(true){
			case(QD.moz.result):
				brow = "Firefox";
			break;
			case(QD.safari.result):
				brow = "Safari";
			break;
			case(QD.chrome.result):
				brow = "Chrome";
			break;
			case(QD.opera.result):
				brow = "Opera";
			break;		
			case(QD.IE.result):
				brow = "IE";
			break;	
			case(QD.edge.result):
				brow = "Edge";
			break;		
			default:
				brow = "Unspecified";
		}

		if(!!QD.dev.currentMode){
			log('Browser is: ' + brow);
		} 

		return brow;
	}

	QD.mobDevice = () => {
		let result = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
		!result ? result = "Desktop" : result = result[0];
		if(!!QD.dev.currentMode){
			log('Device is: ' + result);
		}

		return result;
	}	

	QD.platform = () => {
		let result = navigator.platform;
		if(!!QD.dev.currentMode){
			log("Platform is: " + result);
		}

		return result;
	}

	QD.version = () => {
		let result = navigator.appVersion;
		if(!!QD.dev.currentMode){
			log("Version is: " + result);
		}

		return result;
	}

})(window.QD = window.QD || {});