
var change1 = document.getElementById('firstPerson');
var dot1 = document.getElementById('dot1');
var change2 = document.getElementById('secondPerson');
var dot2 = document.getElementById('dot2');
var change3 = document.getElementById('thirdPerson');
var dot3 = document.getElementById('dot3');

change1.onmouseover = () => {
    dot1.style.color = "rgb(1, 1, 250)";
}
change1.onmouseleave = () => {
    dot1.style.color = "black" ;
}

change2.onmouseover = () => {
    dot2.style.color = "rgb(1, 1, 250)" ;
}
change2.onmouseleave = () => {
    dot2.style.color = "black" ;
}

change3.onmouseover = () => {
    dot3.style.color = "rgb(1, 1, 250)" ;
}
change3.onmouseleave = () => {
    dot3.style.color = "black" ;
}


var burger = document.getElementById('burger');
var cancel = document.getElementById('cancel');
var navigation = document.getElementById('navity');

burger.onclick = () => {
	burger.style.display = "none" ;
	cancel.style.display = "block" ;
	navigation.style.width = "25%" ;
}

cancel.onclick = () => {
	burger.style.display = "block" ;
	cancel.style.display = "none" ;
	navigation.style.width = "0" ;
}