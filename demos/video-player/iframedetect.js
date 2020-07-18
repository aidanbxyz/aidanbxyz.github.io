if (window.location !== window.parent.location) {
	document.location = "/iframesarebad.html";
} else {
   	try {
   	    return window.self !== window.top;
   	} catch (e) {
		document.location = "/iframesarebad.html";
	}
}