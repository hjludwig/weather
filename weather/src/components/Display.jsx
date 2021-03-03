import React from "react";
import Image from "./Image";

const Display = ({ weatherData }) => {
    const { temp, feels_like, weather } = weatherData.current;
    return (
        <div>
            <h1>Today's weather</h1>
            <p>Temperature: {temp}</p>
            <p>Feels like: {feels_like}</p>
            <p>{weather[0].description}</p>
            <Image id={weather[0].id} />
        </div>
    );
};

export default Display;
