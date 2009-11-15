javascript:(
	function(){
		u=document.URL;
		q=u.indexOf("q=");
		location.href="http://www.google.com/search?hl=en&"+u.slice(q,u.indexOf("&",q));
	}
)
();
