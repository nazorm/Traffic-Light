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
    x.style.backgroundColor  = "red";
    x.style.color = "white";
    clearOrange() ;
    clearGreen();
}
function clearRed(){
    x.style.backgroundColor  = "transparent";
    x.style.color = "transparent";
}




function changeOrange() { 
    y.style.backgroundColor  = "orange";
    y.style.color = "white";
    clearRed();
    clearGreen()
}
function clearOrange() {
    y.style.backgroundColor  = "transparent";
    y.style.color = "transparent";
    
}


function changeGreen(){
    z.style.backgroundColor = "green";
    z.style.color = "white";
    clearRed();
    clearOrange() 
}
function clearGreen(){
   z.style.backgroundColor = "transparent";
   z.style.color = "transparent";
}




