// Select 'Menu' button
var menubtn = document.getElementById("menubtn");
// Select menu
var mobmenu = document.getElementById("mobmenu");

// pick up interaction with 'Menu' button
menubtn.addEventListener("click", cluMenu);

// if menu close set as open/if open set as closed
function cluMenu() {
    mobmenu.classList.toggle('opened');
}

