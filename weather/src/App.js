import React, { useEffect, useState } from "react";

// api.openweathermap.org/data/2.5/onecall?lat=42.9849&lon=81.2453&units=metric&appid=4b861c89a18155e0e8d3c5587cdcad71

// api.openweathermap.org/data/2.5/forecast?id=524901&appid=4b861c89a18155e0e8d3c5587cdcad71

// api.openweathermap.org/data/2.5/weather?q=London,ON,CA&appid=4b861c89a18155e0e8d3c5587cdcad71

// api.openweathermap.org/data/2.5/weather?lat=79.8711&lon=43.2557&appid=4b861c89a18155e0e8d3c5587cdcad71

function App() {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=42.9849&lon=81.2453&units=metric&appid=4b861c89a18155e0e8d3c5587cdcad71"
        )
            .then(response => response.json())
            .then(data => setWeatherData(data));
    }, []);

    return (
        <div className="App">
            <div>Temp: {weatherData.current.temp}</div>
        </div>
    );
}

export default App;
