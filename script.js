
 let APIKEY= "75097a4d423e0503be525d747d77ba35"

let result=document.getElementById('result')
let getweather=async (cityname,APIKEY)=>{


let weatherapi=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}&units=metric`
let weatherobj=await fetch(weatherapi);
let response=weatherobj.json();
    return response;
 }
 async function getweather1(){
var cityname=document.getElementById("input").value;

    getweather(cityname,APIKEY)
    .then((response)=>{
        console.log(response)
        let temperature=response['main']['temp']
        let country=response['sys']['country']
        result.innerHTML=temperature+" celcius"
        console.log(temperature)
     
    })
 }
getweather1(cityname,APIKEY)