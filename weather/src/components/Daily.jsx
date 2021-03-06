import React from "react";
import formatDate from "../utils/formatDate";

const Day = ({ i }) => {
    const today = new Date();
    const finalDate = new Date(today);
    finalDate.setDate(today.getDate() + i);
    const formattedDate = formatDate(finalDate);
    return <h3>{formattedDate}</h3>;
};

const Daily = ({ data }) => {
    // finalDate.setDate(today.getDate() + 1);
    // console.log(today, finalDate);
    return (
        <>
            <h2>7 Day forecast</h2>
            <div className="flex justify-evenly mt-8">
                {data.map((day, i) => (
                    <div className="px-3 py-6 shadow">
                        <Day i={i} /> {day.temp.max}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Daily;
