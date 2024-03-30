import React from "react";

const Button = ({ children, handleClick, buttonStyle }) => {
    return (
        <button
            className="border border-black px-4 py-2 disabled:bg-blue-400 transition-all duration-100 hover:bg-neutral-100"
            onClick={handleClick}
            style={buttonStyle}
        >
            {children}
        </button>
    );
};

export default Button;
