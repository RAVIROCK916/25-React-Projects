import React from "react";

const Branch = ({ data }) => {
    return (
        <div>
            {data.map((ele, idx) => {
                if (typeof ele === "object") {
                    return (
                        <div className={idx != 0 && "ml-4"}>
                            <Branch data={ele} key={idx} />
                        </div>
                    );
                } else {
                    return <span>{ele}</span>;
                }
            })}
        </div>
    );
};

export default Branch;
