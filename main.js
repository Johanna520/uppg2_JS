"strict mode";


//för att man ska kunna få fram informationen  från checkbox ang väder. 
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

//för att man ska kunna få fram informationen  från checkbox ang attraktioner. 
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

let input = document.querySelector('#executeSearch');
let outputElement = document.querySelector("#textWeather");

function getCityWeatherUrl(input) {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");

  url.searchParams.append("q", input.value);
  url.searchParams.append("appid", "a0d70789704075e6099712d8603723f3");
  url.searchParams.append("mode", "json");
  url.searchParams.append("units", "metric");
  url.searchParams.append("lang", "se");

  outputElement.innerText = url;

  return url;
}
const url = getCityWeatherUrl(input);
window.url = url;


input.onchange = async function() {
    
    const url = getCityWeatherUrl(input);

    
    const serverResponse = await fetch(url); 
   
    const info = await serverResponse.json(); 
  

    outputElement.innerText = url;
    
  }




//för att man ska kunna få fram informationen  från checkbox ang väder. 
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

//för att man ska kunna få fram informationen  från checkbox ang attraktioner. 
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
