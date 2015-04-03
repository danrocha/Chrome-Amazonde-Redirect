var deUrlPrefix = "http://www.amazon.de/dp/";

var url = window.location.href;
var regex = RegExp("http://www.amazon.com/([\\w-]+/)?(dp|gp/product|exec/obidos/asin)/(\\w+/)?(\\w{10})");
m = url.match(regex);
if (m) { 
	asin = m[4]; 
	deUrl = deUrlPrefix + asin;
	chrome.extension.sendRequest({redirect: deUrl});
}
