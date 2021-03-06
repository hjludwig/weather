import React from "react";
import Image from "./Image";

const Current = ({ data }) => {
    console.log(data);
    const { temp, weather, feels_like } = data;
    return (
        <div>
            <h2>Current forecast</h2>
            <p>Temperature: {temp}</p>
            <p>Feels like: {feels_like}</p>
            <p>{weather[0].description}</p>
            <Image id={weather[0].id} />
        </div>
    );
};

export default Current;
