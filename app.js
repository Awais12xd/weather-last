let url = "https://api.openweathermap.org/data/2.5/weather?appid=1de6d35e80c137d01f0753b368f09530&units=metric&q=";
let cityName = document.querySelector(".ali");
let search = document.querySelector(".search");
let temper= document.querySelector(".temper");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let city = document.querySelector(".city");
let img = document.querySelector(".weather-img");
let errorr =  document.querySelector(".error");
let hide =  document.querySelector(".hide");

const imgChange = (cond) => {
    console.log(cond);
    if( cond === "Clear" || cond === "Partly Cloudy ||" || cond === "Overcast "){
      img.src= "cloudy.png";}
    else if(cond === "Mist" || cond === "Fog"){
        img.src="mist.png"
    }else if(cond === "Light drizzle" || cond === " drizzle"){
        img.src = "drizzle.png";
    }else if(cond === "Sunny" || cond === "Mostly Sunny" || cond === "Mostly Sunny "){
        img.src = "sunny.png";
    }else if(cond === "Snow" || cond === "Snowing"){
        img.src = "snowing.png"
    }else if(cond === "Rain" || cond === "Raining"){
        img.src = "rain.png"
    }
}


search.addEventListener( "click" , async () =>{  
    let fetched = await fetch(`${url}${cityName.value}`);
    console.log(fetched);
    let statuss = fetched.status;
    if(statuss === 200 ){
        let data = await fetched.json();
        console.log(data);
        let humidityData = data.main.humidity;
        let tempeData = data.main.temp;
        let windData = data.wind.speed;
        temper.innerText = tempeData + "°C ";
        wind.innerText = windData + "Km/h";
        humidity.innerText = humidityData  + "%";
        city.innerText = cityName.value;
        let text = data.weather[0].main;
        console.log(statuss);
        hide.style.display = "block";
        errorr.style.display = "none";
        imgChange(text);
    }else {
        errorr.style.display = "block";
        hide.style.display = "none";
    }
    
});