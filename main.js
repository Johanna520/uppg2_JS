

dokument.getElementById(checkBox1).onchange = function(e){
    let sec = document.getElementById("textWeather");
    sec.classList.toggle("hide");
}

dokument.getElementById(checkBox2).onchange = function(e){
    let sec = document.getElementById("textAttractions1");
    sec.classList.toggle("hide");
}