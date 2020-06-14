var x = document.querySelector(".red");
var y = document.querySelector(".orange");
var z = document.querySelector(".green");

var redVar = setInterval(changeRed, 3000);
var stopRed = setInterval(clearRed, 6000);


var orangeVar = setInterval(changeOrange, 6000);
var stopOrange = setInterval(clearOrange, 9000);

var  greenVar = setInterval(changeGreen, 9000);
var stopGreen = setInterval(clearGreen, 10000)



function changeRed() {
    x.style.backgroundColor = x.style.backgroundColor  == "red" ? "red" : "red";
    x.style.color = x.style.color == "white" ? "white" : "white";
}
function clearRed(){
   x.style.backgroundColor = x.style.backgroundColor  == "transparent" ? "transparent" : "transparent";
    x.style.color = x.style.color == "transparent" ? "transparent" : "transparent";
}



function changeOrange() { 
    y.style.backgroundColor = y.style.backgroundColor  == "orange" ? "orange" : "orange";
    y.style.color = y.style.color == "white" ? "white" : "white";
}
function clearOrange() {
    y.style.backgroundColor = y.style.backgroundColor  == "transparent" ? "transparent" : "transparent";
    y.style.color = y.style.color == "transparent" ? "transparent" : "transparent";
}



function changeGreen(){
    z.style.backgroundColor = z.style.backgroundColor == "green" ? "green" : "green";
    z.style.color = z.style.color == "white" ? "white" : "white";
}
function clearGreen(){
    
   z.style.backgroundColor = z.style.backgroundColor == "transparent" ? "transparent" : "transparent";
   z.style.color = z.style.color == "transparent" ? "transparent" : "transparent";
}




