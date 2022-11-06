import React from "react";

export default function Skill({ image, title }) {
    return (
        <div className="group flex flex-col items-center mb-1 w-20 overflow-hidden">
            <img src={image} alt="title" width={100} height={100} />
            <p className={`text-center mt-2 mb-0`}>{title}</p>
        </div>
    )
}
