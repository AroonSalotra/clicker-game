import { useState, useEffect } from "react"

const Debug = ({ enemies, setEnemyHealth, setGold, activeEnemy, gold, setDamage }) => {

    const [counter, setCounter] = useState(0);

    const ADD = () => setCounter(counter + 1)

    const SUB = () => setCounter(counter - 1)

    const resetGold = () => {
        setEnemyHealth(enemies[activeEnemy].health)
        setGold(0)
    }

    const giveGold = () => {
        setGold(gold + 100)
    }

    const giveDamage = () => {
        setDamage(1000)
    }

    // useEffect to GET state
    useEffect(() => {
        const data = window.localStorage.getItem("COUNT")
        if (data > 0) setCounter(JSON.parse(data))
    }, [])

    // useEffect to SAVE state
    useEffect(() => {
        window.localStorage.setItem("COUNT", counter)
    }, [counter])

    return (
        <>
            <div className="debug">
                <button onClick={() => resetGold()}
                    className="debug-btn">
                    Reset Gold</button>

                <button onClick={() => giveGold()}
                    className="debug-btn">
                    Give Gold</button>

                <button onClick={() => giveDamage()}
                    className="debug-btn">
                    Give DMG</button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", paddingTop: "1rem" }}>
                <button onClick={() => SUB()}>SUB</button>
                <p>{counter}</p>
                <button onClick={() => ADD()}>ADD</button>
            </div>
        </>
    );
}

export default Debug;