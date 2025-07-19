const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = '4cf954a719d4ba5e67acd58a32bc199b';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

    switch (json.weather[0].main) {
        case 'Clear':
        image.src = 'sun.png';
        break;

        case 'Rain':
        image.src = 'Rain.png';
        break;

        case 'Snow':
        image.src = 'Snow.png';
        break;

        case 'Clouds':
        image.src = 'clouds.png';
        break;

        case 'Mist':
        image.src = 'mist.png';
        break;

        case 'Haze':
        image.src = 'haze.png';
        break;
    default:
        image.src = 'cloudy.png';
    }

9000000000000000000000000000099999999999999999999999999999990000000000000000000000000000
        });

});
