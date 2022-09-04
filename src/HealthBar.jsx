import { useState, useEffect } from "react";

const HealthBar = ({ health, setHealth, damage }) => {

    const handleClick = () => {
        setHealth(100)
    }

    useEffect(() => {

        const handlePress = (e) => {
            const target = e.target.id;

            if (target === "enemy") {
                (health > damage ? setHealth(health - damage) : setHealth(0))
            } return null

        }

        window.addEventListener("click", handlePress)

        return () => {
            window.removeEventListener("click", handlePress)
        }

    })


    return (
        <>
            <div className="health">
                <p className="health-text">{health}</p>
            </div>
            <button onClick={() => handleClick()}>Reset</button>
        </>
    );
}

export default HealthBar;