(function(QD, $, undefined) {

	// IE 6 - 11
	// QD.IE =  {

	// 	result:  /*@cc_on!@*/false || !!document.documentMode ? true : false,
	// 	get isBrowser(){
	// 		return this.result;
	// 	}
	// }
	QD.IE =  {
		isBrowser(){
			return  /*@cc_on!@*/false || !!document.documentMode ? true : false;
		}
	}
	// Edge 20+
	// QD.edge =  {

	// 	result: !QD.isIE && !!window.StyleMedia ? true : false,
	// 	get isBrowser(){
	// 		return this.result;
	// 	}			
	// }
	QD.edge =  {
		isBrowser(){
			return !QD.isIE && !!window.StyleMedia ? true : false;
		}			
	}

	// Firefox 1.0+
	// QD.moz =  {
	
	// 	result: !!window.netscape || !!window.moz || typeof InstallTrigger !== 'undefined' ? true : false,
	// 	get isBrowser(){
	// 		return this.result;
	// 	} 				
	// }

	QD.moz =  {
		isBrowser(){
			return !!window.netscape || !!window.moz || typeof InstallTrigger !== 'undefined' ? true : false;
		} 				
	}
	// Chrome 1+
	// QD.chrome =  {

	// 	result:  !!window.chrome && !window.opr ? true : false,
	// 	get isBrowser(){
	// 		return this.result;
	// 	}	

	// }

	QD.chrome =  {
		isBrowser(){
			return !!window.chrome && !window.opr ? true : false;
		}
		// result:  !!window.chrome && !window.opr ? true : false,
		// get isBrowser(){
		// 	return this.result;
		// }	

	}
			

	// Safari 3.0+
	// QD.safari =  {

	// 	result: /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification) || !!window.ApplePayError ? true : false,
	// 	get isBrowser(){
	// 		return this.result;
	// 	}
	// }
	QD.safari =  {
		isBrowser(){
			return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification) || !!window.ApplePayError ? true : false;
		}
	}

	// Opera 8.0+
	// QD.opera =  {

	// 	result: (!!window.opr && !!opr.addons) || !!window.opera ? true : false,
	// 	get isBrowser(){
	// 		return this.result;
	// 	}			
	// }
	QD.opera =  {
		isBrowser(){
			return (!!window.opr && !!opr.addons) || !!window.opera ? true : false;
		}			
	}
	// QD.isMobile = () => {
	// 	let result = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i) ? true : false;
	// 	return result;
	// }

	QD.isMobile = () => {
		return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i) ? true : false;
	}

	QD.isPortrait = () => {
		return document.documentElement.clientWidth < document.documentElement.clientHeight ? true : false;
		// return result;
	}

	QD.isLandscape = () => {
		return document.documentElement.clientWidth > document.documentElement.clientHeight ? true : false;
		// return result;
	}

	QD.isSquare = () => {
		return document.documentElement.clientHeight == document.documentElement.clientWidth ? true : false;		
		// return result;		
	}

	QD.ori = () => {
		let orient = document.documentElement.clientWidth > document.documentElement.clientHeight ? "Landscape" : "Portrait";
		let orientSame = document.documentElement.clientWidth == document.documentElement.clientHeight ? true : false;
		let result = orientSame ? "Square" : orient;
		return result;
	}

	QD.browser = () => {

		let brow;

		switch(true){
			case(QD.moz.isBrowser()):
				brow = "Firefox";
			break;
			case(QD.safari.isBrowser()):
				brow = "Safari";
			break;
			case(QD.chrome.isBrowser()):
				brow = "Chrome";
			break;
			case(QD.opera.isBrowser()):
				brow = "Opera";
			break;		
			case(QD.IE.isBrowser()):
				brow = "IE";
			break;	
			case(QD.edge.isBrowser()):
				brow = "Edge";
			break;		
			default:
				brow = "Unspecified";
		}

		return brow;
	}

	QD.mobDevice = () => {
		let result = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
		!result ? result = "Desktop" : result = result[0];
		return result;
	}	

	QD.platform = () => {
		return navigator.platform;
	}

	QD.version = () => {
		return navigator.appVersion;
	}

})(window.QD = window.QD || {});