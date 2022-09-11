import { useState, useEffect } from "react";
import Bar from "./Bar";

const Experience = ({ enemies, goldModifier, setGoldModifier, experience, setExperience }) => {
    const [level, setLevel] = useState(1)
    const [expCap, setExpCap] = useState(99)
    const [expPercent, setExpPercent] = useState(null)

    useEffect(() => {
        
        setExpPercent(Math.round(experience / expCap * 99))

        if (experience > expCap) {
            setLevel(level + 1)
            setExperience(0)
            setGoldModifier(level / 2.5)
            setExpCap(expCap + 20)
        } 
    }, [experience])


    return (
        <>
            <p className="level">Level: {level}</p>
            <Bar completed={expPercent} />
            <p>{experience} / {expCap}</p>
        </>
    );
}

export default Experience;