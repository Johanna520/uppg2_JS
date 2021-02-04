"strict mode";

/*
search-city
i min sök-input skriver jag in den stadjag vill söka efter. 
jag använder mig av event "change". när användaren trycker på 
Enter ändras id="city" till det användaren skriver in i sökfältet. 

*/
{
let input = document.getElementById('executeSearch');
let log = document.getElementById('city');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
}
/*
fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid=a0d70789704075e6099712d8603723f3 ') hämta api*/ 


{
    document.getElementById("checkBox1").onchange = function(e){
        var text = document.getElementById("textWeather");
        if (checkBox1.checked == true){
            text.style.display = "block";
          } else {
             text.style.display = "none";
          }
    }
    }


    {
        document.getElementById("checkBox2").onchange = function(e){
            var text = document.getElementById("textAttractions");
            if (checkBox2.checked == true){
                text.style.display = "block";
              } else {
                 text.style.display = "none";
              }
        }
        }
