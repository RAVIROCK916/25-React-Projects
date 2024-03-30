import React from "react";

const Header = ({ projectNo, title }) => {
    return (
        <div className="my-10">
            <hr />
            <div className="my-10">
                <h2 className="text-6xl font-extrabold mb-5">
                    Project {projectNo}
                </h2>
                <h3 className="text-4xl font-semibold">{title}</h3>
            </div>
            <hr />
        </div>
    );
};

export default Header;
