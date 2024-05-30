let inputCity=document.getElementById("inputCity");
let btn=document.getElementById("btn");

let cityName=document.getElementById("cityName");
let localtime=document.getElementById("localtime");
let temp_c=document.getElementById("temp_c");
let temp_f=document.getElementById("temp_f");
let condition=document.getElementById("condition");

let weatherData=document.getElementById("weatherData");

document.body.style.backgroundColor="#231709 ";

async function getJson(city){
    let getJsonResult=await fetch(`http://api.weatherapi.com/v1/current.json?key=edf6d589cc3c440c9e2212423242705&q=${city}&aqi=yes`);
    return (await getJsonResult.json())
}
getJson();

async function showWeatherResult(){
   const inputCityValue=inputCity.value;
   const weatherResult=await getJson(inputCityValue) ;

let cityName=document.getElementById("cityName");

cityName.innerHTML=`${weatherResult.location.name},<br/> ${weatherResult.location.region},<br/> ${weatherResult.location.country}`

localtime.innerHTML=`Local Time ${weatherResult.location.localtime}`

temp_c.innerHTML=`Temp in C ${weatherResult.current.temp_c}`

temp_f.innerHTML=`Temp in F ${weatherResult.current.temp_f}`

condition.innerHTML=`${weatherResult.current.condition.text} <img src="${weatherResult.current.condition.icon}">`

//--------------------------------Implementing Different Background for Different Conditions-----------------------

let bgCondition=weatherResult.current.condition.text;
if(bgCondition=="Sunny"){
    document.body.style.backgroundImage ='url("https://wallpapercave.com/wp/wp4555644.jpg")';
}
else if(bgCondition=="Mist"){
    document.body.style.backgroundImage ='url("https://wallpapercave.com/wp/wp4155400.jpg")';
}
else if(bgCondition=="Cloudy"){
    document.body.style.backgroundImage ='url("https://wallpaperaccess.com/full/1575262.jpg")';
}
else if(bgCondition==" Clear Sky "){
    document.body.style.backgroundImage ='url("https://jooinn.com/images/clear-sky-9.jpg")';
}
else if(bgCondition=="Partly cloudy"){
    document.body.style.backgroundImage ='url("https://cdn.wallpapersafari.com/4/53/JCZUF5.jpg")';
    // document.body.style.background.opacity="0.5";

}
else if(bgCondition=="Overcast"){
    document.body.style.backgroundImage ='url("https://wallpapercrafter.com/desktop/18223-clouds-cloudy-horizon-field-overcast-4k.jpg")';
}
else if(bgCondition=="Fog"){
    document.body.style.backgroundImage ='url("https://www.pixelstalk.net/wp-content/uploads/2016/11/Fog-Desktop-Pictures.jpg")';
}
else if(bgCondition=="Haze"){
    document.body.style.backgroundImage ='url("https://media.premiumtimesng.com/wp-content/files/2017/10/Harmattan.jpg")';
}
else if(bgCondition=="Light rain"){
    document.body.style.backgroundImage ='url("https://i.pinimg.com/originals/9c/34/ce/9c34cecf0d331e57fe62bd03b990335e.png")';
}
else if(bgCondition=="Moderate Rain"){
    document.body.style.backgroundImage ='url("https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?b=1&s=170667a&w=0&k=20&c=lXXWPQuhXI4xZRrr8d1uZGjQasuR-oRS1_GraXO9Fd0=")';
}
else if(bgCondition=="Heavy Rain"){
    document.body.style.backgroundImage ='url("https://www.gannett-cdn.com/-mm-/ec97db89cd91c31507534edde6ce9a20dc98ef64/c=0-33-680-417/local/-/media/2015/10/25/JacksonMS/JacksonMS/635813795612345451-Heavy-Rain-iStock-680x451.jpg?width=3200&height=1680&fit=crop")';
}
else if(bgCondition=="Showers"){
    document.body.style.backgroundImage ='url("https://cdn.wallpapersafari.com/89/43/V56CWU.jpg")';
}
else if(bgCondition=="Drizzle"){
    document.body.style.backgroundImage ='url(https://www.fastweather.com/images/education/drizzle.jpg")';
}
else if(bgCondition=="Overcast"){
    document.body.style.backgroundImage ='url("https://upload.wikimedia.org/wikipedia/commons/a/a3/Overcast_skies_from_Tropical_Storm_Danny.jpg")';
}
else if(bgCondition=="Thunderstorm"){
    document.body.style.backgroundImage ='url("https://wtop.com/wp-content/uploads/2014/07/355929.jpg")';
}

else if(bgCondition=="Breezy"){
    document.body.style.backgroundImage ='url("https://www.8newsnow.com/wp-content/uploads/sites/59/2020/06/Wind_palmTrees.jpg)';
}
else if(bgCondition=="Windy"){
    document.body.style.backgroundImage ='url("https://ak2.picdn.net/shutterstock/videos/4107430/thumb/1.jpg?i10c=img.resize(height:72)")';
}

else if(bgCondition=="Gale"){
    document.body.style.backgroundImage ='url("https://www.newshub.co.nz/home/new-zealand/2019/04/weather-8m-waves-gale-force-winds-storming-towards-new-zealand/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1556413760427/storm-sea-ocean-giant-massive-waves-CREDIT-GETTY-280419-1120.jpg")';
}
else if(bgCondition=="Storm"){
    document.body.style.backgroundImage ='url("https://getwallpapers.com/wallpaper/full/4/6/6/528684.jpg")';
}

else if(bgCondition=="Light rain shower"){
    document.body.style.backgroundImage ='url("https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/97bce74774706d5d79a9324226ca8277.jpg")';
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="cover";
}
else if(bgCondition=="Hurricane"){
    document.body.style.backgroundImage ='url("https://media.npr.org/assets/img/2023/09/07/hurricane-lee-atlantic-ocean_wide-44ec21841e65eedbe8c1fce377426d69f76785ce-s1400-c100.jpg")';
}
else if(bgCondition=="Tornado"){
    document.body.style.backgroundImage ='url("https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Science/Q-Z/tornado.jpg")';
}
else if(bgCondition=="Clear"){
    document.body.style.backgroundImage ='url("https://media.istockphoto.com/photos/beautiful-sky-with-white-cloud-background-picture-id517897328?k=20&m=517897328&s=612x612&w=0&h=Qf2A87AK7_8pwBAkr-VsUbLy8LVHg5ufcnRpLVYVWS4=")';
    document.body.style.backgroundSize = 'cover';
    // document.body.style.backgroundPosition = 'center';
}
else{
    document.body.style.backgroundImage ='url("")';
}

//------------------------------------------Implementing Different Font Colors according to Bg-----------------------

if(bgCondition=="Mist"){
    document.body.style.color="white";
}

if(bgCondition=="Sunny"){
    document.body.style.color="white";
}

if(bgCondition=="Partly cloudy"){
    document.body.style.color="red";
}

if(bgCondition=="Light rain"){
    document.body.style.color="white";
}

if(bgCondition=="Light rain shower"){
    document.body.style.color="white";
}
}






btn.addEventListener("click",showWeatherResult);
