var iframe_detect = function(redirect_url) {
	var is_iframe = false;
	try {
		is_iframe = (top.location.href !== window.location.href);
	} catch (e) {}
	if ( ! is_iframe) {
		window.location.href = redirect_url;
	};
};

iframe_detect('http://www.kanema.com.br/');