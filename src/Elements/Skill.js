import React from "react";

export default function Skill({ image, title }) {
    return (
        <div className="group flex flex-col items-center mb-1 overflow-hidden">
            <img src={image} alt="title" width={60} height={60} />
            <p className={`text-center mt-2 text-sm mb-0`}>{title}</p>
        </div>
    )
}
