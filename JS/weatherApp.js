"strict mode";
//Här hämtar jag de olika elementen från html för att kuna använda dem i js.

//För väder
let outputElement = document.querySelector("#textWeather");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let desc = document.querySelector("#desc");
let day = document.querySelector("#day");
//För attraktioner

let attractionName1 = document.querySelector("#attractionName1");
let attractionName2 = document.querySelector("#attractionName2");
let attractionName3 = document.querySelector("#attractionName3");
//let adress = document.querySelector("#adress");
//let something = document.querySelector("#something");

/*via metoder i searchParams fyller jag på url-objektet med vad som ska finnas i url. 
därefter bygger jag url som använder samtliga parametrar. */

//För väder url.
function getWeatherUrl(input) {
  const weatherUrl = new URL("https://api.openweathermap.org/data/2.5/weather");

  weatherUrl.searchParams.append("q", input.value);
  weatherUrl.searchParams.append("appid", "a0d70789704075e6099712d8603723f3");
  weatherUrl.searchParams.append("mode", "json");
  weatherUrl.searchParams.append("units", "metric");
  weatherUrl.searchParams.append("lang", "se");

  return weatherUrl;
}
const weatherUrl = getWeatherUrl(input);
window.weatherUrl = weatherUrl;

//för attracionerurl

function getAttractionUrl(input) {
  const attractionUrl = new URL("https://api.foursquare.com/v2/venues/explore");

  attractionUrl.searchParams.append(
    "client_id",
    "L1EHZS4J4D4E4SJXZ1TUQCVTSBVATHI2KIGGL3BC5O44F1Z5"
  );
  attractionUrl.searchParams.append(
    "client_secret",
    "R1NCJZTLBUBMOQJLKPWXI4KMQDMJUJFT2KZ30TFWMQBM1UNO"
  );
  attractionUrl.searchParams.append("near", input.value);
  attractionUrl.searchParams.append("limit", "10");
  attractionUrl.searchParams.append("v", "20210212");

  return attractionUrl;
}
const attractionUrl = getAttractionUrl(input);
window.attractionUrl = attractionUrl;

/* 
Att skriva ut async innan en funktionen returnera ett promise (löftet). 
Async tillåter programmet att köra en funktion utan att frysa hela programmet.
Att skriva await före en funktion låter functionen vänta på promise (löftet).
Await kan endast används inuti en async funktion.

Ett Promise objekt  representerar det slutgiltiga resultatet, det kan antingen vara löst eller olöst resultat.  
Om resultatet är olöst och vi inte lyckas prata med servern, man skriver ex. en stad som inte finns. Kör vi en catch .alert och skickar ut ett felmeddelande, 
*/
input.onchange = async function weather() {
  const weatherUrl = getWeatherUrl(input);
  const attractionrUrl = getAttractionUrl(input);

  try {
    const serverResponse = await fetch(weatherUrl);
    const weatherInfo = await serverResponse.json();

    const Response = await fetch(attractionrUrl);
    const attractionInfo = await Response.json();

    attractionName1.innerHTML =
      attractionInfo.response.groups[0].items[0].venue.name;
    attractionName2.innerHTML =
      attractionInfo.response.groups[0].items[1].venue.name;
    attractionName3.innerHTML =
      attractionInfo.response.groups[0].items[2].venue.name;

    //adress.innerHTML = attractionInfo.response.;
    //something.innerHTML = attractionInfo.response.groups[0].items[2].venue.name;
    //day.innerHTML = ` ${weatherInfo.}`;
    temp.innerHTML = `Temperature: ${weatherInfo.main.temp} &#8451;`;
    wind.innerHTML = `Wind speed: ${weatherInfo.wind.speed}`;
    desc.innerHTML = `Weather condition: ${weatherInfo.weather[0].main}`;
  } catch {
    alert("Error! Something went wrong, try again or choose another city.");
  }
};
