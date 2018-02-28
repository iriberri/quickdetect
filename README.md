# QuickDetect

<p align="center">
	<img src="https://image.ibb.co/dL6xkx/qd_mascot.png">
</p>

Current QD Status: **BETA**

QD is a vanilla JS library that offers a small API for determining browser characteristics (using feature-detection where possible). 

Copied largely from the [Stack Overflow community](https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser), I was inspired to take the SO answers and create QD from my experiences with front-end development and figuring out what I actually use versus what's a bell-and-whistle that I don't really need (that said there a couple just-for-funs here like QD.isSquare and the logging functionality). 

QD shouldn't conflict with third party libraries and is [Unlicensed](http://unlicense.org/).

## Compatibility

As of 2018 I work in a world where clients do not care about pre-IE8 support for their executions (or even pre IE10-ish really); QD reflects that and is best used in modern browsers on projects that don't expect or need a lot of backwards compatibility. That said, QD has been directly tested as compatible on:

*   Safari 11+
*   Chrome 64+
*   Firefox 58+
*   IE 9+
*   Opera 51+

Theoretically QD is compatible on:

*   Safari 3.0+
*   Chrome 1+
*   Firefox 1.0+
*   IE 9+ (I use getters in QD, which excludes IE 8 and below)
*   Edge 20+
*   Opera 8+

Tests have taken place on both Mac and PC hardware but don't take my word for it, this is still in beta.

## Installation

A few options (pick one):

*   Install via npm:
*   Add the dist/qd.min.js OR dist/qdp.min.js file to the head of your document (e.g.: ).
*   Copy and paste the code in dist/qd.min.js or dist/qdp.min.js into your code where you need.
*   Use the CDN in the head of your document: (e.g.: )

## API


*   `QD.dev.mode`: False by default, setting the dev mode to 'true' (e.g. "QD.dev.mode = true") will console log any QD function you invoke. Remember to remove this before moving to production. The dist/qdp.min.js file is minified/uglified and does NOT include this functionality either way so it's best for production (or replace qd.min.js with qdp.min.js).
*   `QD.browser`: Returns a string showing your browser marketname. Current possibilities are: "Safari", "Chrome", "Opera", "Firefox", "IE", "Edge", or "Unspecified".
*   `QD.ori`: Returns a string describing your current aspect ratio / orientation. Current possibilities are: "Landscape", "Portrait", or "Square".
*   `QD.IE.isBrowser`: Returns true/false about whether the user is on an IE browser (IE 8+).
*   `QD.edge.isBrowser`: Returns true/false about whether the user is on an Edge browser.
*   `QD.moz.isBrowser`: Returns true/false about whether the user is on a Mozilla/Firefox browser.
*   `QD.chrome.isBrowser`: Returns true/false about whether the user is on a Chrome browser.
*   `QD.safari.isBrowser`: Returns true/false about whether the user is on a Safari browser.
*   `QD.opera.isBrowser`: Returns true/false about whether the user is on an Opera browser.
*   `QD.isPortrait`: Returns true/false about whether the user's aspect ratio is in portrait mode.
*   `QD.isLandscape`: Returns true/false about whether the user's aspect ratio is in landscape mode.
*   `QD.isSquare`: Returns true/false about whether the user has an equal aspect ratio (for some reason).

Below are user-agent dependent functions... I recommmend designing responsively so as to mostly ignore the concerns of these, but these functions can still be useful for QA. 
*   `QD.isMobile`: Returns true/false about whether the user is on a non-desktop browser (laptops are still desktops in this case).
* 	`QD.mobDevice`: Returns a string describing your current mobile device type. Current possibilities are: "iPhone, "iPod", "iPad", "Android", "webOS", "BlackBerry", "IEMobile", "Opera Mini"... and "Desktop" if, for some reason, you've forgotten.
* 	`QD.platform`: Returns a string describing your current OS platform. I haven't found a 'master list' of all the possiblities here.
* 	`QD.version`: Returns a string describing the version of the browser you're using (long user-agent string).
