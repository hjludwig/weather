import React, { useEffect, useState } from "react";
import Display from "./components/Display";

const londonURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=42.9849&lon=-81.2453&units=metric&appid=4b861c89a18155e0e8d3c5587cdcad71";

// api.openweathermap.org/data/2.5/forecast?id=524901&appid=4b861c89a18155e0e8d3c5587cdcad71

// api.openweathermap.org/data/2.5/weather?q=London,ON,CA&appid=4b861c89a18155e0e8d3c5587cdcad71

// api.openweathermap.org/data/2.5/weather?lat=79.8711&lon=43.2557&appid=4b861c89a18155e0e8d3c5587cdcad71

function App() {
    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState(true);
    const fetchData = async url => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            console.log(data);
            setWeatherData(data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData(londonURL);
    }, []);

    console.log(weatherData);

    return (
        <div className="App">
            {loading ? (
                <h1>Loading...</h1>
            ) : !weatherData ? (
                <h1>No data</h1>
            ) : (
                <>
                    <Display weatherData={weatherData} />
                </>
            )}
        </div>
    );
}

export default App;
