"strict mode";

/*
search-city
i min sök-input skriver jag in den stadjag vill söka efter. 
jag använder mig av event "change". när användaren trycker på 
Enter ändras id="city" till det användaren skriver in i sökfältet. 

*/

let input = document.querySelector('#executeSearch');
let outputElement = document.querySelector('#city');

input.onchange = function cityName(e) {
  outputElement.innerText = e.target.value;
}


//City name = getCityWeatherURL (Se freläsnignen kl 11.00)

/*för att man ska kunna få fram informationen  från checkbox ang väder. 
*/
{
    document.getElementById("checkBox1").onchange = function showWeather (){
        let text = document.getElementById("textWeather");
        if (checkBox1.checked === true){
            text.style.display = "block";
          } else {
             text.style.display = "none";
          }
    }
}

/*för att man ska kunna få fram informationen  från checkbox ang attraktioner. 
*/

{
    document.getElementById("checkBox2").onchange = function showAttractions (){
        let text = document.getElementById("textAttractions");
        if (checkBox2.checked === true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
}


/*
fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid=a0d70789704075e6099712d8603723f3 ') hämta api*/ 


//if - else if om ett land som inte finns med på listan = error


/* 
något sånt här för att få ut max 10 populära sevärdigheter?
se föreläsning ca kl 10
}


*/