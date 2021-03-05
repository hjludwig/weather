import React from "react";

const Button = ({ children }) => {
    return (
        <button className="bg-blue-900 text-white px-6 py-2 mx-1 rounded">
            {children}
        </button>
    );
};

export default Button;
