import { useState, useEffect } from "react"

const Debug = ({ enemies, setEnemyHealth, setGold, activeEnemy, gold, setDamage }) => {

    const [counter, setCounter] = useState(0);

    const [one, setOne] = useState(null)
    const [two, setTwo] = useState(null)

    const RANDOM = () => {
        const randomOne = Math.floor(Math.random() * 20)
        const randomTwo = Math.floor(Math.random() * 20)
        setOne(randomOne)
        setTwo(randomTwo)
    }

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
        const getOne = window.localStorage.getItem("ONE")
        const getTwo = window.localStorage.getItem("TWO")

        const setState = (value, target) => (value > 0 ? target(value) : null)

        setState(getOne, setOne); setState(getTwo, setTwo)
    }, [])


    // useEffect to SAVE state
    useEffect(() => {
        window.localStorage.setItem("ONE", one)
        window.localStorage.setItem("TWO", two)
    }, [one, two])


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

            <div>
                <button onClick={() => RANDOM()}>RANDOM</button>
                <p>{one}</p>
                <p>{two}</p>
            </div>

            <div>
            </div>

        </>
    );
}

export default Debug;