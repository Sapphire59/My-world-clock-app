function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesDateElement.innerHTML = "August 30th, 2024";
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  parisDateElement.innerHTML = "August 30th, 2024";
  let parisTimeElement = parisElement.querySelector(".time");
  parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
