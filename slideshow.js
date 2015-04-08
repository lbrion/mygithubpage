function SlideShow(div_name, height, width) {
	var i = 0;
	var timer;
	var path = new Array();

	// LIST OF SLIDES
	for(var pic = 0; pic < arguments.length - 3; pic++) {
		path[0] = arguments[pic + 3];
		console.log(path[0]);
	}

	function swapImage()
	{
	   document.getElementById("slide").src=path[i];
	   if(i < path.length - 1) i++; else i = 0;
	   timer = setTimeout("swapImage()",2000);
	}

	function stopShow()
	{
	  clearTimeout(timer);
	}

	function runShow()
	{
	  swapImage();  
	}
}

var first = new SlideShow("test", 100, 100, "1", "2", "3");