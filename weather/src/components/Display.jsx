import React, { useState } from "react";
import Current from "./Current";
import Daily from "./Daily";
import Hourly from "./Hourly";

const Display = ({ weatherData, city }) => {
    const [tab, setTab] = useState("current");
    return (
        <div className="bg-white rounded-lg p-10 shadow-xl">
            <h1>{city.name}</h1>
            <div className="mb-8">
                <button
                    className="px-3 py-1 border"
                    onClick={() => setTab("current")}
                >
                    Current
                </button>
                <button
                    className="px-3 py-1 border"
                    onClick={() => setTab("hourly")}
                >
                    Hourly
                </button>
                <button
                    className="px-3 py-1 border"
                    onClick={() => setTab("daily")}
                >
                    7 Day
                </button>
            </div>
            <div>
                {tab === "current" ? (
                    <Current data={weatherData.current} />
                ) : tab === "hourly" ? (
                    <Hourly data={weatherData.hourly} />
                ) : (
                    <Daily data={weatherData.daily} />
                )}
            </div>
        </div>
    );
};

export default Display;
