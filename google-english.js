javascript:(
	function(){
		var url = document.URL;
		var from = url.indexOf("q=");
		var to = url.indexOf("&");
		var q = url.slice(from,to);
		var des = "http://www.google.com/search?hl=en&"+q;
		location.href=des;
	}
)
();
