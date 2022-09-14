import { useState, useEffect } from "react";
import Bar from "./Bar";
import { GiSkullCrossedBones } from "react-icons/gi"
import { TbSword } from "react-icons/tb"

const Experience = ({ enemies, goldModifier, setGoldModifier, experience, setExperience, kills, damage }) => {
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

    // Save Level State
    useEffect(() => {
        const data = window.localStorage.getItem("LEVEL")
        if (data > 1) setLevel(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem("LEVEL", JSON.stringify(level))
    }, [level])


    return (
        <>
            <p className="level">Level: {level}</p>
            <Bar completed={expPercent} />
            {/* <p className="exp-amount">{experience} / {expCap}</p> */}
            <div className="stats">
                <p className="kills"><GiSkullCrossedBones className="icon-s" />{kills}</p>
                <p className="damage"><TbSword className="icon-s" />{damage}</p>
            </div>
        </>
    );
}

export default Experience;