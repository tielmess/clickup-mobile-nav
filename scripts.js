//
// ### OPEN AND CLOSE TOGGEL MENU WITH BUTTON ###
//
// Select 'Menu' button
var menubtn = document.getElementById("menubtn");
// Select menu
var mobmenu = document.getElementById("mobmenu");

// pick up interaction with 'Menu' button
menubtn.addEventListener("click", cluMenu);

//
// ~~~ TOGGLE AND ADD CLASS ~~~
//
function cluMenu() {
	var className=mobmenu.getAttribute("class")

	if(className=="closed") {
		// If class = opened
		// - If height of listHeight < 75% of windowHeight then set height of menu as total height of list
		// - - max-height: 75%;
		// - If height of listHeight > 75% of windowHeight then set height of menu to 75% and create scroll highlight
		// - - overflow-y: scroll;
		mobmenu.className="opened";
		if (Hl <= percent)
		{
			mobmenu.style.height = Hl + "px";
		}
		else
		{
			mobmenu.style.height = percent + "px";
			mobmenu.style.overflowY = "scroll";
		}
	}
	else {
		mobmenu.className="closed";
		mobmenu.style.height = 0;
	}
}

//
// ### DETERMINE IF SCROLL ON MENU REQUIRED ###
//
// ~~~ DETERMINE HIGHT OF UL ~~~
// Select UL and all LIs   
var liList = document.getElementById("mobmenu").getElementsByTagName("li");
// Amount of LIs = 5
var listTotal = liList.length
// Height of all LIs added together (50px * 5) plus additional 50px for last LI
var listHeight = (listTotal * 50 + 50)


// ~~~ DETERMINE HIGHT OF WINDOW ~~~
var windowHeight = function() {
  var myHeight = 0;
  if( typeof( window.innerHeight ) == 'number' ) {
    //Non-IE
    myHeight = window.innerHeight;
  } else if( document.documentElement && document.documentElement.clientHeight ) {
    //IE 6+ in 'standards compliant mode'
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && document.body.clientHeight )  {
    //IE 4 compatible
    myHeight = document.body.clientHeight;
  }
  return myHeight;
}

// ~~~ SET VARIABLES ~~~
	var Hl = listHeight;
	var Hw = windowHeight();
	var percent = ((Hw / 100) * 75);


