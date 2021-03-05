import React, { useState } from "react";
import Button from "./Button";

const UserInputs = ({ setCity }) => {
    const [count, setCount] = useState(0);
    const london = {
        name: "London",
        lat: "42.9849",
        lon: "-81.2453",
    };
    const hamilton = {
        name: "Hamilton",
        lat: "40",
        lon: "-60",
    };
    const dawson = {
        name: "Dawson City",
        lat: "40",
        lon: "-60",
    };

    const handleClick = city => {
        setCity(city);
    };
    const message = "Hello there";
    return (
        <div className="bg-white my-5 rounded-lg p-10">
            <h1>Choose city</h1>
            <button
                className="btn-blue"
                onClick={() => {
                    handleClick(london);
                }}
            >
                London, ON
            </button>
            <button
                className="btn-blue"
                onClick={() => {
                    handleClick(hamilton);
                }}
            >
                Hamilton, ON
            </button>
            <button
                className="btn-blue"
                onClick={() => {
                    handleClick(dawson);
                }}
            >
                Dawson City, YK
            </button>
        </div>
    );
};

export default UserInputs;
