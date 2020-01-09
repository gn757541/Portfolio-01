function hamburger_fun() {
    document.getElementsByClassName("hamburger_menu")[0].classList.toggle("show_hamburger_menu");
    if ( document.getElementsByClassName("hamburger_menu")[0]==document.querySelector("div.hamburger_menu.show_hamburger_menu") ) {
        document.body.style.overflowY = "hidden";
        document.body.paddingRight = "17px";
    } else {
        document.body.style.overflowY = "scroll";
        document.body.paddingRight = "none";
    }
}

function list_pair_fun() {
    document.getElementsByClassName("list_pair_item")[0].classList.toggle("show1");
    document.getElementsByClassName("list_pair")[0].classList.toggle("choose_list");
}

function list_practice_fun() {
    document.getElementsByClassName("list_practice_item")[0].classList.toggle("show2");
    document.getElementsByClassName("list_practice")[0].classList.toggle("choose_list");
}

function init() {
    document.getElementsByClassName("hamburger")[0].onclick = hamburger_fun;
    document.getElementById("list_pair").onclick = list_pair_fun;
    document.getElementById("list_practice").onclick = list_practice_fun;
}
window.onload = init;