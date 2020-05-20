function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//--------------------------------------------------------------Sign In----------------------------------------------------------//
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//--------------------------------------------------------search --------------------------------------------------------------------//
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
//----------------------------------------------- nav background on scroll--------------------------------------------------
	// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() 
	{
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
		{
			document.getElementById("myTopnav").style.backgroundColor  = "white";
			document.getElementById("btnTop").style.display = "block";
			document.getElementById("myTopnav").style.boxShadow  = "0px .1px 16px 0px rgba(0,0,0,0.2)";
		} 
		else 
		{
			document.getElementById("myTopnav").style.backgroundColor  = "transparent";
			document.getElementById("btnTop").style.display = "none";
			document.getElementById("myTopnav").style.boxShadow  = "none";
		}
	}
	function topFunction() 
	{
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
		
		
		
		
		
		