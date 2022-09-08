import { useState, useEffect } from "react";
import Bar from "./Bar";

const Experience = ({ enemies, goldModifier, setGoldModifier, experience, setExperience }) => {
    const [level, setLevel] = useState(1)

    const handleLevel = () => {

    }

    useEffect(() => {
        if (experience > 99) {
            setLevel(level + 1)
            setExperience(0)
        }
    }, [experience])

    return (
        <>
            <p className="level">Level: {level}</p>
            <Bar completed={experience} />
        </>
    );
}

export default Experience;