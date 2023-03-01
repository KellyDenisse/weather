import {weather_data} from "./data.js";

let loadDayForecastData = () => {
    let data_city = weather_data[0];//Ciudad de Guayaquil
    let {city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall,}  = data_city;
    
    //Forecast del Dia
    let cityElem = document.getElementById('city');
    let dateElem = document.getElementById('date');
    let maxtemperatureElem = document.getElementById('maxtemperature');
    let mintemperatureElem = document.getElementById('mintemperature');
    let cloudinessElem = document.getElementById('cloudiness');
    let windElem = document.getElementById('wind');
    let rainfallElem = document.getElementById('rainfall');
    
    cityElem.innerHTML = city;
    dateElem.innerHTML = date;
    maxtemperatureElem.innerHTML = maxtemperature;
    mintemperatureElem.innerHTML = mintemperature;
    cloudinessElem.innerHTML =cloudiness;
    windElem.innerHTML = wind;
    rainfallElem.innerHTML = rainfall;
    

    let [tarde, noche] = data_city.forecast_today;

    //Forecast de tarde
    let {text:late_text, temperature:late_temperature, forecast:late_forecast, icon:late_icon} = tarde;

    let textElemLate = document.getElementById('late_text');
    let temperatureElemLate = document.getElementById('late_temperature');
    let forecastElemLate = document.getElementById('late_forecast');
    let iconElemLate = document.getElementById('late_icon');
    
    textElemLate.innerHTML = late_text;
    temperatureElemLate.innerHTML = late_temperature;
    forecastElemLate.innerHTML = late_forecast;
    iconElemLate.innerHTML = late_icon;

    //Forecast de Noche
    let {text:night_text, temperature:night_temperature, forecast:night_forecast, icon:night_icon} = noche

    let textElemNight = document.getElementById('night_text');
    let temperatureElemNight = document.getElementById('night_temperature');
    let forecastElemNight = document.getElementById('night_forecast');
    let iconElemNight = document.getElementById('night_icon');
    
    textElemNight.innerHTML = night_text;
    temperatureElemNight.innerHTML = night_temperature;
    forecastElemNight.innerHTML = night_forecast;
    iconElemNight.innerHTML = night_icon;

}

let loadWeekForecastData = () => {
    let data_city = weather_data[0];//Ciudad de Guayaquil
    let data_week_city = data_city.forecast_week;

    let htmlWeek = '';

    for(let day of data_week_city){

        let {text, date, icon, temperature:{max, min}} = day;

        let htmlDay = `
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
            <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
            <span class="text-xs">${date}</span>
        </div>
        <div class="d-flex align-items-center ">
            <span class="font-weight-bold text-dark mx-2">${max}/span> |  <span class="text-dark mx-2">${min}</span>
            <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
        </div>
        </li>\n
        `;
        htmlWeek = htmlWeek + htmlDay;
    }
    let template_forecast = document.getElementsByClassName('list-group');
    template_forecast[0].innerHTML = htmlWeek;
}

document.addEventListener("DOMContentLoaded", (e) => {
    loadDayForecastData()

    let cargar = document.getElementById('loadinfo')
    cargar.addEventListener("click", (e) => loadWeekForecastData())
});

;