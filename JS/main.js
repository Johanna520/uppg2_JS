"strict mode";
//Här hämtar jag de olika elementen från html för att kuna använda dem i js.
let input = document.querySelector("#executeSearch");
let city = document.querySelector("#city");
let textAttractions1 = document.querySelector("#textAttractions1");
let textAttractions2 = document.querySelector("#textAttractions2");
let textAttractions3 = document.querySelector("#textAttractions3");
let textWeather = document.querySelector("#textWeather");
/*
search-city
i min sök-input skriver jag in den stadjag vill söka efter. 
jag använder mig av event "change". när användaren trycker på 
Enter ändras id="city" till det användaren skriver in i sökfältet. 
*/

input.addEventListener("change", cityName);

function cityName(e) {
  city.textContent = e.target.value;
}

//för att man ska kunna få fram informationen  från checkbox ang väder.
{
  document.getElementById("checkBox1").onchange = function showWeather() {
    if (checkBox1.checked === true) {
      textWeather.style.display = "block";
    } else {
      textWeather.style.display = "none";
    }
  };
}

//för att man ska kunna få fram informationen  från checkbox ang attraktioner.
{
  document.getElementById("checkBox2").onchange = function showAttractions() {
    if (checkBox2.checked === true) {
      textAttractions1.style.display = "block";
      textAttractions2.style.display = "block";
      textAttractions3.style.display = "block";
    } else {
      textAttractions1.style.display = "none";
      textAttractions2.style.display = "none";
      textAttractions3.style.display = "none";
    }
  };
}
