import { useState, useEffect } from "react";
import enemies from "./data/enemies"

const HealthBar = ({ health }) => {

    return (
        <>
            <div className="health">
                <p className="health-text">{health}</p>
            </div>
        </>
    );
}

export default HealthBar;