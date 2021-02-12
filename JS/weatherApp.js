"strict mode";
//Här hämtar jag de olika elementen från html för att kuna använda dem i js.
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let desc = document.querySelector("#desc");
let day = document.querySelector("#day");

/*via metoder i searchParams fyller jag på url-objektet med vad som ska finnas i url. 
därefter bygger jag url som använder samtliga parametrar. */
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

/* 
Att skriva ut async innan en funktionen returnera ett promise (löftet). 
Async tillåter programmet att köra en funktion utan att frysa hela programmet.
Att skriva await före en funktion låter functionen vänta på promise (löftet).
Await kan endast används inuti en async funktion.

Ett Promise objekt  representerar det slutgiltiga resultatet, det kan antingen vara löst eller olöst resultat.  
Om resultatet är olöst och vi inte lyckas prata med servern, man skriver ex. en stad som inte finns. Kör vi en catch .alert och skickar ut ett felmeddelande, 
*/
input.onchange = async function () {
  const weatherUrl = getWeatherUrl(input);

  try {
    const serverResponse = await fetch(weatherUrl);
    const weatherInfo = await serverResponse.json();
    //day.innerHTML = ` ${weatherInfo.}`;
    temp.innerHTML = `Temperature: ${weatherInfo.main.temp} &#8451;`;
    wind.innerHTML = `Wind speed: ${weatherInfo.wind.speed}`;
    desc.innerHTML = `Weather condition: ${weatherInfo.weather[0].main}`;
  } catch {
    alert("Error! Something went wrong, try again or choose another city.");
  }
};
