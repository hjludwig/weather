import React from "react";
import {
    WiCloudy,
    WiDaySunny,
    WiFog,
    WiRain,
    WiShowers,
    WiSnow,
    WiThunderstorm,
} from "react-icons/wi";

const Image = ({ id }) => {
    return (
        <div style={{ fontSize: "300px" }}>
            {id > 199 && id < 299 ? (
                <WiThunderstorm />
            ) : id > 299 && id < 399 ? (
                <WiRain />
            ) : id > 499 && id < 599 ? (
                <WiShowers />
            ) : id > 599 && id < 699 ? (
                <WiSnow />
            ) : id > 699 && id < 799 ? (
                <WiFog />
            ) : id === 800 ? (
                <WiDaySunny />
            ) : id > 800 && id < 899 ? (
                <WiCloudy />
            ) : (
                <p>I dunno</p>
            )}
        </div>
    );
};

export default Image;
