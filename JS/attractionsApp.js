/*"strict mode";
let outputAttractions = document.querySelector("#textAttractions");


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
  attractionUrl.searchParams.append("limit", 10);
  attractionUrl.searchParams.append("v", 20210212);

  return attractionUrl;
}
const attractionUrl = getAttractionUrl(input);
window.attractionUrl = attractionUrl;

input.onchange = async function attraction() {
  const attractionrUrl = getAttractionUrl(input);

  try {
    const Response = await fetch(attractionrUrl);
    const attractionInfo = await Response.json();

    textAttractions.innerHTML =
      attractionInfo.response.groups[0].items[0].venue.name;
  } catch {
    alert("Error! Something went wrong, try again or choose another city.");
  }
};
*/
