import React from "react";
import './styling.css';

function Banner() {
    return (
        <header className="header">
            <h1>Orbit Report</h1>
            <p className="p">
                Click on the buttons to see the satellites in that orbit type.
            </p>
        </header>
    );
}

export default Banner;
