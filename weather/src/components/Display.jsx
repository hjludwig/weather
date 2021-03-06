import React, { useState } from "react";
import Image from "./Image";

const Display = ({ weatherData, city }) => {
    const { temp, feels_like, weather } = weatherData.current;
    const [tab, setTab] = useState("current");
    return (
        <div className="bg-white rounded-lg p-10">
            <div>
                <h1>{city.name}</h1>
                <h2>Current forecast</h2>
                <p>Temperature: {temp}</p>
                <p>Feels like: {feels_like}</p>
                <p>{weather[0].description}</p>
                <Image id={weather[0].id} />
            </div>
            <div>
                <button className="btn-blue">Current</button>
                <button className="btn-blue">Hourly</button>
                <button className="btn-blue">7 Day</button>
            </div>
        </div>
    );
};

export default Display;
