let weather = {
    'apiKey' : "6219e810383031dcda15a731033262fe",
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then(response => response.json())
        .then(data => this.displayWeather(data));
        },
    displayWeather:function(data)
    {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { icon, description } = data.weather[0];
        Math.round(temp);
        document.querySelector('.city').innerText = name;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.icon').src=`http://openweathermap.org/img/w/${icon}.png`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = "Humidity " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind " + speed + "km/h";
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.background = "url('https://source.unsplash.com/1920x1080/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
}

document.querySelector(".search-btn").addEventListener('click', ()=>{
    weather.search();
})

document.querySelector(".search-bar").addEventListener('keyup', event =>{
    if(event.key == "Enter")
    {
        weather.search();
    }
})

let cities = ["London", "Melbourne", "Texas", "Toronto", "New Jersey", "Tokyo", "New York", "Maldives"]

function randomInd(){
    random = Math.floor(Math.random() * cities.length);
    return random;
}
randomInd();
weather.fetchWeather(cities[random]);