import React, { useState } from "react";

const UserInputs = ({ setCity, fetchData }) => {
    const london = {
        name: "London",
        lat: "42.9849",
        lon: "-81.2453",
    };
    const hamilton = {
        name: "Hamilton",
        lat: "43.255",
        lon: "-79.8438",
    };
    const dawson = {
        name: "Dawson City",
        lat: "64.0600",
        lon: "-139.4320",
    };

    const handleClick = city => {
        setCity(city);
        fetchData(city);
    };
    return (
        <div className="bg-white my-5 rounded-lg p-10 shadow-xl">
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
