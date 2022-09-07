import { useState, useEffect } from "react";

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