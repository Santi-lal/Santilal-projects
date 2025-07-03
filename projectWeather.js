const apiKeys = "308e1fb3dda8d8d107e2e09397a8514e";
const url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
async function checkWeather(city) {
    const responce=await fetch(url + city + `&appId=${apiKeys}`)
    var data=await responce.json()

console.log(data);

document.querySelector(".city").innerHTML=data.name
document.getElementsByClassName("temp").innerHTML=Math.round(data.main.temp) + " °c"
document.getElementsByClassName("humidity").innerHTML=data.main.humidity + " %"
document.getElementsByClassName("wind").innerHTML=data.wind.speed + " km/h"

if(data.weather[0].main==="Rain"){
    weather_icon.src="images/rain.png"
}
else if(data.weather[0].main==="Clear"){
    weather_icon.src="images/clear.png"
}
else if(data.weather[0].main==="Mist"){
    weather_icon.src="images/mist.png"
}
else if(data.weather[0].main==="Drizzle"){
    weather_icon.src="images/drizzle.png"
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})