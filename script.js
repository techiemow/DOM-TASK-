function fetchWeather(city) {
    let weatherResults = document.querySelector('.weatherResults');
    
    weatherResults.innerHTML = '';//clear previous city weather report

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=daa4027a7f6c2030e883bbb38738d2d6`)
        .then(response => response.json())
        .then(weather => {
            let location = document.querySelector('.location');
            location.innerHTML = `Results for <strong>${weather.name}, ${weather.sys.country}</strong>`;

            // creating an div as weatherIconColfor adding icons of their respective climatic conditions 
            let weatherIconCol = document.createElement('div');
            weatherIconCol.classList.add('col');
            weatherIconCol.classList.add('d-flex');
            weatherIconCol.classList.add('align-items-center');
            weatherIconCol.classList.add('justify-content-center');
            let weatherIcon = document.createElement('img');
            weatherIcon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

            weatherIconCol.appendChild(weatherIcon);

            // Creating an header & their name as temp to  which gives the user hourly temperature of the city in kelvin which then converted into celcius
            let temp = document.createElement('h1');
            temp.style.fontSize = '3rem';
            temp.classList.add('d-inline')
            temp.innerHTML = `${Math.floor(weather.main.temp - 273.15)}<span class="text-muted fs-6">°C</span>`;
            weatherIconCol.appendChild(temp);
            weatherResults.appendChild(weatherIconCol);

            // creating a div block for description of the weather report of the specific city with their pressure,humidity,speed 
            let descCol = document.createElement('div');
            descCol.classList.add('col');
            let desc = document.createElement('p');
            desc.innerHTML = `<span class="material-symbols-outlined">
            thermostat
            </span>:${weather.main.pressure} hPa <br> <span class="material-symbols-outlined">
            humidity_percentage
            </span>: ${weather.main.humidity}% <br>
            <span class="material-symbols-outlined">
                air
                </span>:${weather.wind.speed} m/s`;

            descCol.appendChild(desc);
            weatherResults.appendChild(descCol);


            // timestamp representing the current date and time in a specific format using JavaScript's Date object
            

            let timestamp = new Date().toLocaleDateString('en-US', {
                weekday: 'long',//like Monday
                hour: 'numeric',//(1-12)
                minute: '2-digit'//(00-59)
            });
            // creating a div to present the specific day with their local time of the cities with small description of their climate  
            let timeCol = document.createElement('div');
            timeCol.classList.add('col');
            let time = document.createElement('p');
            time.innerHTML = `<h2>Weather</h2>${timestamp}<br><strong>${weather.weather[0].description[0].toUpperCase()+weather.weather[0].description.slice(1, )}</strong>`;

            timeCol.appendChild(time);
            weatherResults.appendChild(timeCol);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            let weatherResults = document.getElementById('weatherResults');
            weatherResults.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
}


    function getWeather(e) {
        e.preventDefault();
        let city = e.target.elements.city.value;
        fetchWeather(city);
    }
    