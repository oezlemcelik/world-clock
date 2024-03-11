function updateTime(){
    let canberraElement = document.querySelector("#canberra");
    if(canberraElement){
        let canberraDateElement = canberraElement.querySelector(".date");
        let canberraTimeElement = canberraElement.querySelector(".time");
        let canberraTime = moment().tz("Australia/Canberra");

        canberraDateElement.innerHTML = canberraTime.format("MMMM	Do YYYY");
        canberraTimeElement.innerHTML = canberraTime.format("h:mm:ss [<small>]A[</small>]");

    }

    let dublinElement = document.querySelector("#dublin");
    if(dublinElement){
        let dublinDateElement = dublinElement.querySelector(".date");
        let dublinTimeElement = dublinElement.querySelector(".time");
        let dublinTime = moment().tz("Europe/Dublin");

        dublinDateElement.innerHTML = dublinTime.format("MMMM	Do YYYY");
        dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");

    }
}

function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
     let cityName = cityTimeZone.replace("_", " ").split("/"[1]);
     let cityTime = moment().tz(cityTimeZone);
     let citiesElement = document.querySelector("#cities");
     citiesElement.innerHTML= `
    <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

updateTime();
setInterval(updateTime, 1000);




let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);