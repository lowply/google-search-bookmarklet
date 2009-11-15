javascript:(
	function(){
		u=document.URL;
		location.href="http://www.google.com/search?hl=en&"+u.slice(u.indexOf("q="),u.indexOf("&"));
	}
)
();
