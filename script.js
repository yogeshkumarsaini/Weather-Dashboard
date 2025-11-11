const API_KEY = "08c34502ebe94624bf0121602240804 "; 

function getLocation() {
    let cityInput = document.getElementById("city-input").value;

    if (!isNaN(parseInt(cityInput))) {
        
        fetch(`https://api.postalpincode.in/pincode/${cityInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })

    } else {
        fetch(`https://api.postalpincode.in/postoffice/${cityInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
}

function getWeather() {
    
    const url = `https://api.weatherapi.com/v1/current.json?q=${getLocation}&key=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            const humidity = data.current.humidity;
            const windSpeed = data.current.wind_mph;
            const temperature = data.current.temp_c;
            const cloud = data.current.cloud;
            const gust =data.current.gust_mph;
            const pressure = data.current.pressure_in;
            const uv = data.current.uv;
            const windDirection =data.current.wind_dir;

          
            document.writeln("Humidity:", humidity);
            document.writeln("Wind Speed (mph):", windSpeed);
            document.write("Temperature (Celsius):", temperature);
            document.write("Cloud:",cloud);
            document.write("Gust:",gust);
            document.write("Pressure (mph):",pressure);
            document.write("UV:",uv);
            document.write("Wind Direction:",wind_dir);           
        })
        
}


