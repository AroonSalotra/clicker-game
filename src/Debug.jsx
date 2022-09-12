const Debug = ({ enemies, setEnemyHealth, setGold, activeEnemy, gold, setDamage }) => {

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
        </>
    );
}

export default Debug;