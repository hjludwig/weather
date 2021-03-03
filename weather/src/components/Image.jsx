import React from "react";

const Image = ({ id }) => {
    return (
        <div>
            {id > 199 && id < 299 ? (
                <p>Thunderstorm</p>
            ) : id > 299 && id < 399 ? (
                <p>Drizzle</p>
            ) : id > 499 && id < 599 ? (
                <p>Rain</p>
            ) : id > 599 && id < 699 ? (
                <p>Snow</p>
            ) : id > 699 && id < 799 ? (
                <p>Atmosphere</p>
            ) : id === 800 ? (
                <p>Clear</p>
            ) : id > 800 && id < 899 ? (
                <p>Cloudy</p>
            ) : (
                <p>I dunno</p>
            )}
            <p>Image id: {id}</p>
        </div>
    );
};

export default Image;
