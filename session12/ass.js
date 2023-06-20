var allItem=[];

var city=document.getElementById("cityName")

  city.addEventListener("keyup",function(){
    getData(city.value);
})


function getData(location){
    var myHttp= new XMLHttpRequest();
myHttp.open("GET",`http://api.weatherapi.com/v1/forecast.json?key=beb117eb9e68492c963175029232502&q=${location}&days=7`);
myHttp.send();

myHttp.addEventListener("readystatechange",function(){
    // console.log(myHttp.readyState);
    if(myHttp.readyState==4 && myHttp.status==200){
        // console.log(JSON.parse(myHttp.response));
        allItem=JSON.parse(myHttp.response);
        console.log(allItem);
        displayCurrent(allItem);
        displayForecast(allItem);
        displayForecast2(allItem);
        console.log(allItem.forecast.forecastday[1].date)
    }

});
}
getData("Alexandria");
function displayCurrent(allItem){
    var cartona=``;
    
        cartona+=`   
        <div class="forecast-item">
          <div class="header d-flex justify-content-between">
            <p id="today">${day}</p>
            <p>${allItem.location.localtime}</p>
          </div>

          <div class="forecast-content">
            <div class="city">${allItem.location.name}</div>
            <div class="degree d-flex justify-content-between">
              <div class="num">${allItem.current.temp_c}<sup>o</sup>C</div>
              <div class="forecast-icon mt-4">
                  <img src=${allItem.current.condition.icon} alt="" width="90">
              </div>	
          </div>
          <div class="custom">${allItem.current.condition.text}</div>
          <div class="forecast-icon">
            <span><img src="icon-umberella.png" alt="">${allItem.current.uv}%</span>
            <img src="icon-wind.png" alt=""class="ms-4">${allItem.current.wind_kph}km/h
            <img src="icon-compass.png" alt=""class="ms-4 mb-4">${allItem.current.wind_dir}
          </div>
          </div>
        </div>
      
        `
      
document.getElementById("myData").innerHTML=cartona;
}

function displayForecast(allItem){
    var cartona=``;
    cartona+=`  
    <div class="forecast-item">
      <div class="header1 d-flex  align-items-center justify-content-center">
        <p>${days[new Date(allItem.forecast.forecastday[1].date).getDay()]}</p>
       
      </div>
      <div class="forecast-content1 text-center">
        <div class="forecast-icon mt-5">
          <img src="${allItem.forecast.forecastday[1].day.condition.icon}" alt="">
        </div>
        <div class="degree mt-4">${allItem.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div> 
        <div class="degree-min mt-2">${allItem.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</div> 
        <div class="custom">${allItem.forecast.forecastday[1].day.condition.text}</div>
      </div>
  </div>`
  document.getElementById("myData1").innerHTML=cartona;
}
function displayForecast2(allItem){
        var cartona=``;
        cartona+=`  
        <div class="forecast-item">
          <div class="header d-flex  align-items-center justify-content-center">
            <p>${days[new Date(allItem.forecast.forecastday[2].date).getDay()]}</p>
           
          </div>
          <div class="forecast-content text-center">
            <div class="forecast-icon mt-5">
              <img src="${allItem.forecast.forecastday[2].day.condition.icon}" alt="">
            </div>
            <div class="degree mt-4">${allItem.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div> 
            <div class="degree-min mt-2">${allItem.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</div> 
            <div class="custom">${allItem.forecast.forecastday[2].day.condition.text}</div>
          </div>
      </div>`
      document.getElementById("myData2").innerHTML=cartona;
}


    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for( let i=0;i<days.length;i++) {
        const d = new Date();
        var day = days[d.getDay()];
       
    }
    




